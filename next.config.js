/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  i18n: {
    locales: ['th'],
    defaultLocale: 'th',
  },
}

module.exports = nextConfig
