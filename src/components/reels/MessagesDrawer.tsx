import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { seedMessages } from '@/data/seedData';

interface MessagesDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MessagesDrawer = ({ open, onClose }: MessagesDrawerProps) => {
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

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-lg">Messages</h3>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {seedMessages.map((message) => (
                <button
                  key={message.id}
                  className="flex items-center gap-3 w-full p-4 hover:bg-secondary transition-colors border-b border-border"
                >
                  <div className="relative">
                    <img
                      src={message.avatar}
                      alt={message.userName}
                      className="w-14 h-14 rounded-full"
                    />
                    {message.unread && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-semibold text-sm ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {message.userName}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {message.time}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${message.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                      {message.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MessagesDrawer;
