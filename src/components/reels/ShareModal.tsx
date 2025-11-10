import { motion, AnimatePresence } from 'framer-motion';
import { X, Send as SendIcon } from 'lucide-react';
import { seedUsers } from '@/data/seedData';
import { useToast } from '@/hooks/use-toast';

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
}

const ShareModal = ({ open, onClose }: ShareModalProps) => {
  const { toast } = useToast();

  const handleShare = (userName: string) => {
    toast({
      description: `Sent to ${userName}`,
    });
    onClose();
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

          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-card rounded-t-3xl z-50 max-h-[70vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-lg">Share</h3>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Users List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {seedUsers.slice(0, 8).map((user) => (
                <button
                  key={user.id}
                  onClick={() => handleShare(user.username)}
                  className="flex items-center justify-between w-full p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-sm">{user.username}</p>
                      <p className="text-xs text-muted-foreground">{user.bio}</p>
                    </div>
                  </div>
                  <SendIcon size={20} className="text-muted-foreground" />
                </button>
              ))}
            </div>

            {/* Share to other apps (decorative) */}
            <div className="p-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Share to</p>
              <div className="flex gap-4">
                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-instagram flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IG</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Instagram</span>
                </button>
                <button className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">FB</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Facebook</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
