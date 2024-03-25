import type { Metadata, Viewport } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'DBSS, LLC';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | DBSS, LLC' },
  description: 'A different kind of digital agency',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://dbssllc.com',
    title: 'DBSS, LLC',
    description: 'A different kind of digital agency',
    images: {
      url: 'https://res.cloudinary.com/dw0bnekck/image/upload/v1711380358/Montserrat-removebg-preview_qdxf8a.png',
      alt: 'Dbss, LLC Logo',
    },
  },
  twitter: {
    creator: 'DBSS, LLC',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#282C35',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#282C35'}}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
