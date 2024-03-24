import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'nextarter-chakra',
  name: 'Next.js App Template',
  lang: 'en',
  start_url: '/',
  background_color: '#282C35',
  theme_color: '#282C35',
  dir: 'ltr',
  display: 'standalone',
  prefer_related_applications: false,
  icons: [
    {
      src: '/vercel.svg',
      purpose: 'any',
      sizes: '48x48 72x72 96x96 128x128 256x256',
    },
  ],
});

export default manifest;
