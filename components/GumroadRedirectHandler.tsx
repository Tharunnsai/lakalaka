'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GumroadRedirectHandler() {
  const router = useRouter();
  
  return (
    <Suspense fallback={null}>
      {(() => {
        const searchParams = useSearchParams();

        useEffect(() => {
          // Check if this is a redirect from Gumroad with a successful purchase
          const isFromGumroad = searchParams.has('from_gumroad');
          const isPurchaseSuccess = searchParams.has('success') && searchParams.get('success') === 'true';
          
          if (isFromGumroad && isPurchaseSuccess) {
            // Redirect to thank you page
            router.push('/thank-you');
          }
        }, [router, searchParams]);

        return null;
      })()}
    </Suspense>
  );
} 