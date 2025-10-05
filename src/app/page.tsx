'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect authenticated users to their dashboard
        const roleRoutes = {
          student: '/student/dashboard',
          staff: '/staff/dashboard',
          industry: '/industry/dashboard',
          admin: '/admin/dashboard',
        };
        router.push(roleRoutes[user.role] || '/login');
      } else {
        // Redirect unauthenticated users to login
        router.push('/login');
      }
    }
  }, [user, isLoading, router]);

  // Show loading spinner while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}

