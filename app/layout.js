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
  title: "KarePort — Gateway to Kerala's World-Class Healthcare",
  description:
    "KarePort matches you with the right hospital and specialist in Kerala for advanced surgery, modern dentistry, and Ayurveda — under doctor-led clinical guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
