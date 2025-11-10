import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Volume2, VolumeX } from 'lucide-react';
import { Reel } from '@/data/seedData';
import { useReelsStore } from '@/store/useReelsStore';
import { useNavigate } from 'react-router-dom';
import CommentsPanel from './CommentsPanel';
import ShareModal from './ShareModal';
import { useToast } from '@/hooks/use-toast';

interface ReelItemProps {
  reel: Reel;
  isActive: boolean;
}

const ReelItem = ({ reel, isActive }: ReelItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showHeartPop, setShowHeartPop] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleLike = useReelsStore((state) => state.toggleLike);
  const navigate = useNavigate();
  const { toast } = useToast();

  // ✅ Only play/pause active video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (isActive) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.warn('Playback blocked, retrying...', error);
          setTimeout(() => video.play().catch(() => {}), 300);
        }
      };
      playVideo();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, isMuted]);

  const handleLike = () => {
    toggleLike(reel.id);
    if (!reel.liked) {
      setShowHeartPop(true);
      setTimeout(() => setShowHeartPop(false), 800);
    }
  };

  const handleDoubleTap = () => {
    if (!reel.liked) {
      handleLike();
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    toast({
      description: saved ? 'Removed from saved' : 'Saved to collection',
    });
  };

  return (
    <div className="reel-item relative w-full h-screen bg-black overflow-hidden">
      {/* 🟡 Video */}
      <video
        ref={videoRef}
        key={reel.videoUrl}
        src={reel.videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
        preload="metadata"
        onClick={handleDoubleTap}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={(e) => console.error('Video failed:', e.currentTarget.src)}
      />

      {/* 🟣 Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Heart Pop */}
      <AnimatePresence>
        {showHeartPop && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <Heart className="w-32 h-32 text-white fill-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-20 z-10">
        <div className="flex items-end justify-between">
          {/* Left: User info and description */}
          <div className="flex-1 mr-12">
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => navigate(`/profile/${reel.authorId}`)}
                className="flex items-center gap-2"
              >
                <img
                  src={reel.avatar}
                  alt={reel.authorName}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="font-semibold text-white">{reel.authorName}</span>
              </button>
              <button className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors">
                Follow
              </button>
            </div>
            <p className="text-white text-sm mb-2">{reel.description}</p>
            <div className="flex flex-wrap gap-2">
              {reel.hashtags.map((tag) => (
                <span key={tag} className="text-white/80 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col items-center gap-6">
            {/* Like */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="flex flex-col items-center gap-1"
            >
              <Heart
                className={`w-8 h-8 ${
                  reel.liked ? 'fill-red-500 text-red-500' : 'text-white'
                } transition-colors`}
              />
              <span className="text-white text-xs font-semibold">
                {reel.likes > 1000 ? `${(reel.likes / 1000).toFixed(1)}K` : reel.likes}
              </span>
            </motion.button>

            {/* Comment */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setCommentsOpen(true)}
              className="flex flex-col items-center gap-1"
            >
              <MessageCircle className="w-8 h-8 text-white" />
              <span className="text-white text-xs font-semibold">
                {reel.comments.length}
              </span>
            </motion.button>

            {/* Share */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShareOpen(true)}
              className="flex flex-col items-center gap-1"
            >
              <Send className="w-8 h-8 text-white" />
            </motion.button>

            {/* Save */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleSave}
              className="flex flex-col items-center gap-1"
            >
              <Bookmark
                className={`w-8 h-8 ${
                  saved ? 'fill-white text-white' : 'text-white'
                } transition-colors`}
              />
            </motion.button>

            {/* Mute */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
              className="flex flex-col items-center gap-1 mt-4"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Panels */}
      <CommentsPanel reel={reel} open={commentsOpen} onClose={() => setCommentsOpen(false)} />
      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
    </div>
  );
};

export default ReelItem;
