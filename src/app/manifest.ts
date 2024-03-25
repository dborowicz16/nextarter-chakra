import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'DBSS, LLC',
  name: 'DBSS, LLC',
  lang: 'en',
  start_url: '/',
  background_color: '#282C35',
  theme_color: '#282C35',
  dir: 'ltr',
  display: 'standalone',
  prefer_related_applications: false,
  icons: [
    {
      src: '/blackDevices.png',
      purpose: 'any',
      sizes: '16x16 48x48 72x72 96x96 128x128 256x256',
      type: 'image/png'
    },
  ],
});

export default manifest;
