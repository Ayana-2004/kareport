import { Fraunces, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

// next/font/google downloads + self-hosts the font at build time,
// instead of the <link href="fonts.googleapis.com"> tag we used
// in the plain HTML version. Faster, and no external request.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-worksans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-plexmono',
});

export const metadata = {
  title: 'KarePort — The Gateway of Kerala',
  description:
    "Bridging borders to Kerala's finest healthcare — surgery, dentistry and Ayurveda, curated by a doctor-led panel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
