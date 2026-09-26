"use client";

import { useEffect } from 'react';
import { Container } from '@/components/layout';
import { MagneticButton } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[100dvh] bg-background flex flex-col justify-center items-center text-foreground">
      <Container size="default" className="flex flex-col items-center justify-center text-center">
        <h1 className="font-serif italic font-light tracking-tight text-5xl md:text-7xl mb-4">Something went wrong.</h1>
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-12">
          We encountered an unexpected error processing your request.
        </p>
        <div onClick={() => reset()} className="cursor-pointer">
          <MagneticButton variant="primary" size="default">
            Try again
          </MagneticButton>
        </div>
      </Container>
    </div>
  );
}
