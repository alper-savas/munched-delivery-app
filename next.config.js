/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    PASSWORD: process.env.PASSWORD,
  },
};

module.exports = nextConfig;
