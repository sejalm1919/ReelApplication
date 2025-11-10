import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Instagram } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email',
        variant: 'destructive',
      });
      return;
    }

    const success = login(email, password);
    if (success) {
      toast({
        title: 'Welcome!',
        description: 'Login successful',
      });
      navigate('/reels');
    } else {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-lg p-8 shadow-2xl">
          {/* Logo */}
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Instagram className="w-16 h-16 text-foreground" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-gradient-instagram opacity-50 blur-xl" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-center mb-2">Instagram</h1>
          <p className="text-muted-foreground text-center mb-8">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-border"
                aria-label="Email input"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary border-border pr-10"
                aria-label="Password input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-instagram hover:opacity-90 transition-opacity font-semibold"
              >
                Log In
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {showDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-secondary rounded-lg border border-border"
            >
              <p className="text-sm font-semibold mb-2">Demo Credentials:</p>
              <p className="text-sm text-muted-foreground">
                Email: <span className="text-foreground">sohail123@gmail.com</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Password: <span className="text-foreground">sohail123</span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
