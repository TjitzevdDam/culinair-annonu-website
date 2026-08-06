/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
  async rewrites() {
    return [
      { source: "/intern/kantoor-b31", destination: "/intern/kantoor-b31/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/intern/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
