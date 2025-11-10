import { Home, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useAuthStore((state) => state.user);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-lg border-t border-border">
      <div className="flex justify-around items-center h-16 px-4">
        <button
          onClick={() => navigate('/reels')}
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
            isActive('/reels') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-label="Home"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button
          onClick={() => currentUser && navigate(`/profile/${currentUser.id}`)}
          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
            location.pathname.includes('/profile') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-label="Profile"
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
