/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '8qdflvbxjc.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};

export default nextConfig;
