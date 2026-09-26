"use client";

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center p-8">
          <h1 className="font-serif italic font-light tracking-tight text-4xl md:text-6xl mb-4">Service Unavailable</h1>
          <p className="font-mono text-xs tracking-widest uppercase text-white/50 mb-12">
            The application experienced a critical failure.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Recover
          </button>
        </div>
      </body>
    </html>
  );
}
