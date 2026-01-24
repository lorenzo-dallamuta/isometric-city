import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'ISOCOASTER — Theme Park Builder',
    template: 'ISOCOASTER — %s',
    absolute: 'ISOCOASTER — Theme Park Builder',
  },
  description: 'Build the ultimate theme park with thrilling roller coasters, exciting rides, and happy guests!',
  openGraph: {
    title: 'ISOCOASTER — Theme Park Builder',
    description: 'Build the ultimate theme park with thrilling roller coasters, exciting rides, and happy guests!',
    siteName: 'IsoCoaster',
  },
  appleWebApp: {
    title: 'IsoCoaster',
  },
};

export default function CoasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
