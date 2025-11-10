import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReelsStore } from '@/store/useReelsStore';
import { useAuthStore } from '@/store/useAuthStore';
import ReelItem from '@/components/reels/ReelItem';
import StoriesBar from '@/components/reels/StoriesBar';
import BottomNav from '@/components/BottomNav';
import { MessageCircle, User } from 'lucide-react';
import MessagesDrawer from '@/components/reels/MessagesDrawer';

const Reels = () => {
  const { reels, initReels } = useReelsStore();
  const currentUser = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initReels();
  }, [initReels]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / viewportHeight);
      setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Render only visible reels (current ± 1) for performance
  const visibleReels = reels.slice(
    Math.max(0, currentIndex - 1),
    Math.min(reels.length, currentIndex + 2)
  );

  const startIndex = Math.max(0, currentIndex - 1);

  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden">
      {/* Stories Bar */}
      {/* <div className="absolute top-0 left-0 right-0 z-20">
        <StoriesBar />
      </div> */}

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => currentUser && navigate(`/profile/${currentUser.id}`)}
          className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="View profile"
        >
          <User className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setMessagesOpen(true)}
          className="bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Open messages"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

{/* Reels Container */}

      <div

        ref={containerRef}

        className="reels-container overflow-y-scroll h-screen snap-y snap-mandatory"

      >

        {reels.map((reel, idx) => (

          <ReelItem key={reel.id} reel={reel} isActive={currentIndex === idx} />

        ))}

      </div>

      {/* Messages Drawer */}
      <MessagesDrawer open={messagesOpen} onClose={() => setMessagesOpen(false)} />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Reels;
