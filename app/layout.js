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
  metadataBase: new URL('https://kareport.com'),
  title: "KarePort — Gateway to Kerala's World-Class Healthcare",
  description:
    "KarePort matches you with the right hospital and specialist in Kerala for advanced surgery, modern dentistry, and Ayurveda — under doctor-led clinical guidance.",
  openGraph: {
    title: "KarePort — Gateway to Kerala's World-Class Healthcare",
    description:
      "KarePort matches you with the right hospital and specialist in Kerala for advanced surgery, modern dentistry, and Ayurveda — under doctor-led clinical guidance.",
    url: 'https://kareport.com',
    siteName: 'KarePort',
    images: [{ url: '/kareport-navbar-logo.png', width: 860, height: 860 }],
  },
  twitter: {
    card: 'summary',
    title: "KarePort — Gateway to Kerala's World-Class Healthcare",
    description:
      "KarePort matches you with the right hospital and specialist in Kerala for advanced surgery, modern dentistry, and Ayurveda — under doctor-led clinical guidance.",
    images: ['/kareport-navbar-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
