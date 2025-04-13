'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function GumroadSuccessCheck() {
  const router = useRouter();
  
  return (
    <Suspense fallback={null}>
      {(() => {
        const searchParams = useSearchParams();
        
        useEffect(() => {
          // Check if this is a redirect from Gumroad with a successful purchase
          if (searchParams.get('success') === 'true' && searchParams.has('from_gumroad')) {
            router.push('/thank-you');
          }
        }, [router, searchParams]);

        return null;
      })()}
    </Suspense>
  );
} 