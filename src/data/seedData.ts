// Seed data for the Reels demo app

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  postsCount: number;
  followers: number;
  following: number;
  stories: Story[];
  posts: Post[];
}

export interface Story {
  id: string;
  videoUrl: string;
  duration: number;
}

export interface Post {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  text: string;
  time: string;
}

export interface Reel {
  id: string;
  authorId: string;
  authorName: string;
  avatar: string;
  videoUrl: string;
  thumbnail?: string;
  description: string;
  hashtags: string[];
  likes: number;
  liked: boolean;
  comments: Comment[];
  views: string;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

// Sample avatars (using placeholder service)
const avatars = [
  '/images/Sohail.jpeg',
  '/images/sohail.jpeg',
  '/images/Sejal.jpeg',
  '/images/umair.jpeg',
  '/images/Shubham.jpeg',
  '/images/Ayush.jpeg',
  '/images/shravya.jpeg',
  '/images/mohsin.jpeg',
  '/images/jeevan.jpeg',
  '/images/Divya.jpeg',
  '/images/default.jpeg',
];

// Sample video URLs (replace with actual video files in public/videos/)
const videoUrls = [
  'http://localhost:8081/videos/start.mp4',
  'http://localhost:8081/videos/intro.mp4',
  'http://localhost:8081/videos/reel3.mp4',
  'http://localhost:8081/videos/reel4.mp4',
  'http://localhost:8081/videos/reel5.mp4',
  'http://localhost:8081/videos/reel6.mp4',
  'http://localhost:8081/videos/reel7.mp4',
  'http://localhost:8081/videos/reel8.mp4',
  'http://localhost:8081/videos/reel9.mp4',
  'http://localhost:8081/videos/reel10.mp4',
  'http://localhost:8081/videos/reel11.mp4',
  'http://localhost:8081/videos/reel12.mp4',
  'http://localhost:8081/videos/reel13.mp4',
  'http://localhost:8081/videos/reel14.mp4',
  'http://localhost:8081/videos/reel15.mp4',
  'http://localhost:8081/videos/reel16.mp4',
  'http://localhost:8081/videos/reel17.mp4',
  'http://localhost:8081/videos/reel18.mp4',
  'http://localhost:8081/videos/reel19.mp4',
  'http://localhost:8081/videos/reel20.mp4',
  'http://localhost:8081/videos/reel21.mp4',
  'http://localhost:8081/videos/reel22.mp4',
  'http://localhost:8081/videos/reel23.mp4',
  'http://localhost:8081/videos/reel24.mp4',
  'http://localhost:8081/videos/reel25.mp4',
  'http://localhost:8081/videos/reel26.mp4',
  'http://localhost:8081/videos/reel26.1.mp4',
  'http://localhost:8081/videos/reel27.mp4',
  'http://localhost:8081/videos/reel27.1.mp4',
  'http://localhost:8081/videos/reel28.mp4',
  'http://localhost:8081/videos/reel29.mp4',
  'http://localhost:8081/videos/reel30.mp4',
  'http://localhost:8081/videos/reel31.mp4',
  'http://localhost:8081/videos/reel31.1.mp4',
  'http://localhost:8081/videos/reel32.mp4',
  'http://localhost:8081/videos/reel33.mp4',
  'http://localhost:8081/videos/reel34.mp4',
  'http://localhost:8081/videos/reel35.mp4',
  'http://localhost:8081/videos/reel35.1.mp4',
  'http://localhost:8081/videos/reel36.mp4',
  'http://localhost:8081/videos/reel37.mp4',
  'http://localhost:8081/videos/reel38.mp4',
  'http://localhost:8081/videos/reel39.mp4',
  'http://localhost:8081/videos/reel40.mp4',
  'http://localhost:8081/videos/reel41.mp4',
  'http://localhost:8081/videos/reel42.mp4',
  'http://localhost:8081/videos/reel42.1.mp4',
  'http://localhost:8081/videos/reel43.mp4',
  'http://localhost:8081/videos/reel43.1.mp4',
  'http://localhost:8081/videos/reel44.mp4',
  'http://localhost:8081/videos/reel45.mp4',
  'http://localhost:8081/videos/reel45.1.mp4',
  'http://localhost:8081/videos/reel46.mp4',
  'http://localhost:8081/videos/reel47.mp4',
  'http://localhost:8081/videos/reel48.mp4',
  'http://localhost:8081/videos/reel49.mp4',
  'http://localhost:8081/videos/reel50.mp4',
  'http://localhost:8081/videos/reel51.mp4',
  'http://localhost:8081/videos/reel52.mp4',
  'http://localhost:8081/videos/reel53.mp4',
  'http://localhost:8081/videos/reel53.1.mp4',
  'http://localhost:8081/videos/reel54.mp4',
  'http://localhost:8081/videos/reel55.mp4',
  'http://localhost:8081/videos/reel56.mp4',
  'http://localhost:8081/videos/reel57.mp4',
  'http://localhost:8081/videos/reel58.mp4',
  'http://localhost:8081/videos/reel59.mp4',  
  'http://localhost:8081/videos/reel60.mp4',
  'http://localhost:8081/videos/reel62.mp4',
  'http://localhost:8081/videos/reel63.mp4',
  'http://localhost:8081/videos/reel64.mp4',
  'http://localhost:8081/videos/reel65.mp4',
  'http://localhost:8081/videos/reel66.mp4',
  'http://localhost:8081/videos/reel67.mp4',
  'http://localhost:8081/videos/reel68.mp4',
  'http://localhost:8081/videos/reel70.mp4',
  'http://localhost:8081/videos/reel71.mp4',
  'http://localhost:8081/videos/reel72.mp4',
  'http://localhost:8081/videos/reel73.mp4',
  'http://localhost:8081/videos/reel74.mp4',
  'http://localhost:8081/videos/second-last.mp4',
  'http://localhost:8081/videos/last.mp4',
  'http://localhost:8081/videos/createdBy.mp4',
  'http://localhost:8081/videos/theEnd.mp4',
];

const usernames = [
  'Sohail', 'Sejal', 'Umair', 'Shubham', 'Ayush',
  'shravya', 'Mohsin', 'Jeevan', 'Sai', 'Divya'
];

const descriptions = [
  'Amazing sunset vibes ✨',
  'Living my best life 🌟',
  'Can\'t stop won\'t stop 💪',
  'Weekend mood activated 🎉',
  'Making memories 📸',
  'Chasing dreams ☁️',
  'Good vibes only ✌️',
  'Stay inspired 💫',
  'Adventure awaits 🗺️',
  'Feeling grateful 🙏',
];

const hashtags = [
  ['#travel', '#explore', '#wanderlust'],
  ['#fitness', '#gym', '#health'],
  ['#food', '#cooking', '#chef'],
  ['#art', '#creative', '#design'],
  ['#tech', '#innovation', '#coding'],
  ['#fashion', '#style', '#ootd'],
  ['#photography', '#photo', '#camera'],
  ['#dance', '#dancing', '#moves'],
  ['#music', '#musician', '#song'],
  ['#yoga', '#wellness', '#mindful'],
];

// Generate seed users
// export const seedUsers: User[] = [
//   {
//     id: 'demo-user',
//     username: 'demo_user',
//     email: 'demo@reels.com',
//     password: 'demo123',
//     avatar: avatars[0],
//     bio: 'Demo account for testing 🎬',
//     postsCount: 12,
//     followers: 15,
//     following: 101,
//     stories: [
//         { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 8 },
//         { id: 's2', videoUrl: '/videos/reel2.mp4', duration: 12 },
//     ],
//     posts: [
//       { id: 'p1', type: 'video' as const, url: videoUrls[0] },
//       { id: 'p2', type: 'video' as const, url: videoUrls[1] },
//       { id: 'p3', type: 'video' as const, url: videoUrls[2] },
//     ],
//   },

  




export const seedUsers: User[] = [
  {
    id: 'demo-user',
    username: 'Sohail',
    email: 'sohail123@gmail.com',
    password: 'sohail123',
    avatar: '/images/demo.jpg',
    bio: 'Demo account for testing 🎬',
    postsCount: 12,
    followers: 150,
    following: 101,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 8 },
      { id: 's2', videoUrl: '/videos/reel2.mp4', duration: 12 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[1] },
      { id: 'p3', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-0',
    username: 'Sohail',
    email: 'sohail_shaikh@example.com',
    password: 'password123',
    avatar: avatars[1],
    bio: 'Enjoying life and coding! Follow for more.',
    postsCount: 20,
    followers: 1500,
    following: 300,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 10 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[1] },
    ],
  },
  {
    id: 'user-1',
    username: 'Sejal',
    email: 'sejal@example.com',
    password: 'password123',
    avatar: avatars[2],
    bio: 'Sharing beautiful moments every day!',
    postsCount: 18,
    followers: 1200,
    following: 250,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 8 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[1] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-2',
    username: 'Umair',
    email: 'umair@example.com',
    password: 'password123',
    avatar: avatars[3],
    bio: 'Adventure and photography enthusiast!',
    postsCount: 22,
    followers: 1800,
    following: 400,
    stories: [
      { id: 's1', videoUrl: '/videos/reel2.mp4', duration: 9 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[2] },
      { id: 'p2', type: 'video' as const, url: videoUrls[0] },
    ],
  },
  {
    id: 'user-3',
    username: 'Shubham',
    email: 'shubham@example.com',
    password: 'password123',
    avatar: avatars[4],
    bio: 'Life through the lens 📸',
    postsCount: 15,
    followers: 900,
    following: 300,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 7 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[1] },
    ],
  },
  {
    id: 'user-4',
    username: 'Ayush',
    email: 'aayush@example.com',
    password: 'password123',    
    avatar: avatars[5],
    bio: 'Fitness and motivation daily!',
    postsCount: 19,
    followers: 2000,
    following: 500,
    stories: [
      { id: 's1', videoUrl: '/videos/reel2.mp4', duration: 10 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[1] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-5',
    username: 'Shravya',
    email: 'shravya@example.com',
    password: 'password123',
    avatar: avatars[6],
    bio: 'Traveler and foodie 🌍🍴',
    postsCount: 14,
    followers: 800,
    following: 250,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 9 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-6',
    username: 'Mohsin',
    email: 'mohsin@example.com',
    password: 'password123',
    avatar: avatars[7],
    bio: 'Music is life 🎵',
    postsCount: 17,
    followers: 1300,
    following: 400,
    stories: [
      { id: 's1', videoUrl: '/videos/reel2.mp4', duration: 12 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[1] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-7',
    username: 'Jeevan',
    email: 'jeevan@example.com',
    password: 'password123',
    avatar: avatars[8],
    bio: 'Life is a story. Share yours!',
    postsCount: 12,
    followers: 900,
    following: 300,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 10 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-8',
    username: 'Sai',
    email: 'sai@example.com',
    password: 'password123',
    avatar: avatars[4],
    bio: 'Capturing moments one click at a time!',
    postsCount: 15,
    followers: 1100,
    following: 350,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 8 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[1] },
      { id: 'p2', type: 'video' as const, url: videoUrls[2] },
    ],
  },
  {
    id: 'user-9',
    username: 'Gayatri',
    email: 'divya@example.com',
    password: 'password123',
    avatar: avatars[9],
    bio: 'Positive vibes only ✨',
    postsCount: 16,
    followers: 1200,
    following: 400,
    stories: [
      { id: 's1', videoUrl: '/videos/reel1.mp4', duration: 9 },
    ],
    posts: [
      { id: 'p1', type: 'video' as const, url: videoUrls[0] },
      { id: 'p2', type: 'video' as const, url: videoUrls[1] },
    ],
  },
];




// Generate 50 reels with varied data
export const seedReels: Reel[] = Array.from({ length: 100 }, (_, i) => {
  const authorIndex = i % usernames.length;
  const author = seedUsers[authorIndex + 1]; // Skip demo user for variety
  
  return {
    id: `reel-${i}`,
    authorId: author.id,
    authorName: author.username,
    avatar: author.avatar,
    videoUrl: videoUrls[i % videoUrls.length],
    description: descriptions[i % descriptions.length],
    hashtags: hashtags[i % hashtags.length],
    likes: Math.floor(Math.random() * 50000) + 1000,
    liked: false,
    views: `${(Math.random() * 500 + 50).toFixed(1)}K`,
    comments: [
      {
        id: `c-${i}-1`,
        userId: seedUsers[(i + 1) % seedUsers.length].id,
        userName: seedUsers[(i + 1) % seedUsers.length].username,
        avatar: seedUsers[(i + 1) % seedUsers.length].avatar,
        text: 'This is amazing! 🔥',
        time: `${Math.floor(Math.random() * 24)}h`,
      },
      {
        id: `c-${i}-2`,
        userId: seedUsers[(i + 2) % seedUsers.length].id,
        userName: seedUsers[(i + 2) % seedUsers.length].username,
        avatar: seedUsers[(i + 2) % seedUsers.length].avatar,
        text: 'Love this! ❤️',
        time: `${Math.floor(Math.random() * 24)}h`,
      },
      {
        id: `c-${i}-3`,
        userId: seedUsers[(i + 3) % seedUsers.length].id,
        userName: seedUsers[(i + 3) % seedUsers.length].username,
        avatar: seedUsers[(i + 3) % seedUsers.length].avatar,
        text: 'So cool! Keep it up 💪',
        time: `${Math.floor(Math.random() * 24)}h`,
      },
    ],
  };
});

// Generate seed messages
export const seedMessages: Message[] = seedUsers.slice(1, 7).map((user, i) => ({
  id: `msg-${i}`,
  userId: user.id,
  userName: user.username,
  avatar: user.avatar,
  lastMessage: i === 0 ? 'Hey! Check out my latest reel 🎬' : 'Thanks for the follow! 😊',
  time: i === 0 ? '2m' : `${i}h`,
  unread: i < 2,
}));
