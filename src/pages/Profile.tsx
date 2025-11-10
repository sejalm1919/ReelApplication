import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Grid, Settings, Upload } from 'lucide-react';
import { seedUsers } from '@/data/seedData';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import StoryModal from '@/components/reels/StoryModal';
import BottomNav from '@/components/BottomNav';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = seedUsers.find((u) => u.id === id);
  const currentUser = useAuthStore((state) => state.user);
  const [selectedStoryUser, setSelectedStoryUser] = useState<string | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>User not found</p>
      </div>
    );
  }

  const isOwnProfile = currentUser?.id === user.id;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setUploadPreview(preview);
      
      // Simulate saving to localStorage
      const uploads = JSON.parse(localStorage.getItem('user_uploads') || '[]');
      uploads.push({
        id: Date.now().toString(),
        url: preview,
        type: file.type.startsWith('video') ? 'video' : 'image',
        timestamp: Date.now(),
      });
      localStorage.setItem('user_uploads', JSON.stringify(uploads));
      
      toast({
        description: 'Upload successful! (Demo mode - file stored locally)',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate('/reels')} className="hover:opacity-70">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-semibold text-lg">{user.username}</h1>
          {isOwnProfile && (
            <button className="hover:opacity-70">
              <Settings size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6">
        <div className="flex items-center gap-6 mb-6">
          {/* Avatar with story ring */}
          <button
            onClick={() => setSelectedStoryUser(user.id)}
            className="relative flex-shrink-0"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-instagram p-[3px] story-ring">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full rounded-full border-4 border-background object-cover"
              />
            </div>
          </button>

          {/* Stats */}
          <div className="flex-1 flex justify-around">
            <div className="text-center">
              <p className="font-bold text-lg">{user.postsCount}</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{user.followers.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{user.following.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-sm">{user.bio}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isOwnProfile ? (
            <>
              <Button variant="secondary" className="flex-1">
                Edit Profile
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={20} />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </>
          ) : (
            <>
              <Button className="flex-1 bg-gradient-instagram hover:opacity-90">
                Follow
              </Button>
              <Button variant="secondary" className="flex-1">
                Message
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="border-t border-border">
        <div className="flex items-center justify-center gap-2 p-3 border-b border-primary">
          <Grid size={20} />
          <span className="font-semibold text-sm">POSTS</span>
        </div>

        <div className="grid grid-cols-3 gap-1 p-1">
          {uploadPreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-secondary relative overflow-hidden"
            >
              {uploadPreview.includes('video') ? (
                <video src={uploadPreview} className="w-full h-full object-cover" />
              ) : (
                <img src={uploadPreview} alt="Upload" className="w-full h-full object-cover" />
              )}
            </motion.div>
          )}
          {user.posts.map((post) => (
            <motion.div
              key={post.id}
              whileTap={{ scale: 0.95 }}
              className="aspect-square bg-secondary relative overflow-hidden cursor-pointer"
            >
              {post.type === 'video' ? (
                <video src={post.url} className="w-full h-full object-cover" />
              ) : (
                <img src={post.url} alt="" className="w-full h-full object-cover" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      <StoryModal
        userId={selectedStoryUser}
        onClose={() => setSelectedStoryUser(null)}
      />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Profile;
