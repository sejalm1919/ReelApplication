import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Reel } from '@/data/seedData';
import { useReelsStore } from '@/store/useReelsStore';
import { useAuthStore } from '@/store/useAuthStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CommentsPanelProps {
  reel: Reel;
  open: boolean;
  onClose: () => void;
}

const CommentsPanel = ({ reel, open, onClose }: CommentsPanelProps) => {
  const [commentText, setCommentText] = useState('');
  const addComment = useReelsStore((state) => state.addComment);
  const user = useAuthStore((state) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !user) return;

    const newComment = {
      id: `c-${Date.now()}`,
      userId: user.id,
      userName: user.username,
      avatar: user.avatar,
      text: commentText,
      time: 'Just now',
    };

    addComment(reel.id, newComment);
    setCommentText('');
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-card rounded-t-3xl z-50 max-h-[80vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-lg">
                Comments ({reel.comments.length})
              </h3>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {reel.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <img
                    src={comment.avatar}
                    alt={comment.userName}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {comment.userName}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm mt-1">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border flex gap-2"
            >
              <Input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1"
                maxLength={500}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!commentText.trim()}
                className="bg-gradient-instagram hover:opacity-90"
              >
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommentsPanel;
