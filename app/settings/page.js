'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Redirect old /settings URL to /admin
export default function SettingsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin');
  }, [router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-gray-400">Redirecting...</p>
    </div>
  );
}
