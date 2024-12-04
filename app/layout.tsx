import type { Metadata } from 'next';
import Navbar from './components/Navbar';


export const metadata: Metadata = {
  title: 'Next.js on Deno',
  description: 'Deploy your Next.js application to Deno Deploy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}