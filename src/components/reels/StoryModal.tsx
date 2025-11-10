import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { seedUsers } from '@/data/seedData';

interface StoryModalProps {
  userId: string | null;
  onClose: () => void;
}

const StoryModal = ({ userId, onClose }: StoryModalProps) => {
  const user = seedUsers.find((u) => u.id === userId);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (user && videoRef.current) {
      videoRef.current.play();
    }
  }, [user, currentStoryIndex]);

  useEffect(() => {
    if (!user) return;

    const timer = setTimeout(() => {
      if (currentStoryIndex < user.stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else {
        onClose();
      }
    }, user.stories[currentStoryIndex]?.duration * 1000 || 15000);

    return () => clearTimeout(timer);
  }, [user, currentStoryIndex, onClose]);

  if (!user) return null;

  const currentStory = user.stories[currentStoryIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Progress bars */}
        <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
          {user.stories.map((_, idx) => (
            <div
              key={idx}
              className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{
                  width: idx < currentStoryIndex ? '100%' : idx === currentStoryIndex ? '100%' : '0%',
                }}
                transition={{ duration: idx === currentStoryIndex ? currentStory.duration : 0 }}
                className="h-full bg-white"
              />
            </div>
          ))}
        </div>

        {/* User info */}
        <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="text-white font-semibold">{user.username}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-white hover:scale-110 transition-transform"
          >
            <X size={28} />
          </button>
        </div>

        {/* Story video */}
        <video
          ref={videoRef}
          src={currentStory?.videoUrl}
          className="max-h-screen max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
          autoPlay
          controls
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryModal;
