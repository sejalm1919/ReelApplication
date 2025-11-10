import { create } from 'zustand';
import { Reel, seedReels } from '@/data/seedData';


interface ReelsState {
  reels: Reel[];
  initReels: () => void;
  toggleLike: (reelId: string) => void;
  addComment: (reelId: string, comment: any) => void;
  getReelById: (reelId: string) => Reel | undefined;
}

export const useReelsStore = create<ReelsState>((set, get) => ({
  reels: [],
  
  // initReels: () => {
  //   const storedReels = localStorage.getItem('reels_data');
  //   if (storedReels) {
  //     set({ reels: JSON.parse(storedReels) });
  //   } else {
  //     localStorage.setItem('reels_data', JSON.stringify(seedReels));
  //     set({ reels: seedReels });
  //   }
  // },


  initReels: () => {
    localStorage.setItem('reels_data', JSON.stringify(seedReels));
    set({ reels: seedReels });
  },

  
  toggleLike: (reelId: string) => {
    set((state) => {
      const updatedReels = state.reels.map((reel) =>
        reel.id === reelId
          ? {
              ...reel,
              liked: !reel.liked,
              likes: reel.liked ? reel.likes - 1 : reel.likes + 1,
            }
          : reel
      );
      localStorage.setItem('reels_data', JSON.stringify(updatedReels));
      return { reels: updatedReels };
    });
  },
  
  addComment: (reelId: string, comment: any) => {
    set((state) => {
      const updatedReels = state.reels.map((reel) =>
        reel.id === reelId
          ? { ...reel, comments: [comment, ...reel.comments] }
          : reel
      );
      localStorage.setItem('reels_data', JSON.stringify(updatedReels));
      return { reels: updatedReels };
    });
  },
  
  getReelById: (reelId: string) => {
    return get().reels.find((reel) => reel.id === reelId);
  },
}));
