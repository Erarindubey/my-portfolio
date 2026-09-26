import Link from 'next/link';
import { Container } from '@/components/layout';
import { MagneticButton } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="w-full min-h-[100dvh] bg-background flex flex-col justify-center items-center text-foreground">
      <Container size="default" className="flex flex-col items-center justify-center text-center">
        <h1 className="font-serif italic font-light tracking-tight text-7xl md:text-9xl mb-4">404</h1>
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-12">
          Page not found. The path you are looking for does not exist.
        </p>
        <Link href="/">
          <MagneticButton variant="primary" size="default">
            Return Home
          </MagneticButton>
        </Link>
      </Container>
    </div>
  );
}
