import { useState } from 'react';
import { motion } from 'framer-motion';
import { seedUsers } from '@/data/seedData';
import StoryModal from './StoryModal';

const StoriesBar = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <>
      <div className="bg-gradient-to-b from-black/80 to-transparent pt-4 pb-6 px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-none">
          {seedUsers.map((user) => (
            <motion.button
              key={user.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedUserId(user.id)}
              className="flex flex-col items-center gap-2 flex-shrink-0"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-instagram p-[2px] story-ring">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-full h-full rounded-full border-2 border-background object-cover"
                  />
                </div>
              </div>
              <span className="text-white text-xs font-medium max-w-[64px] truncate">
                {user.username}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <StoryModal
        userId={selectedUserId}
        onClose={() => setSelectedUserId(null)}
      />
    </>
  );
};

export default StoriesBar;
