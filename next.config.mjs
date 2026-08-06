/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
  async redirects() {
    return [
      // Oude Squarespace-URL's die nog in Google staan
      { source: "/webshop", destination: "/bestellen", permanent: true },
      { source: "/shop", destination: "/bestellen", permanent: true },
      { source: "/kookboek", destination: "/bestellen", permanent: true },
      { source: "/spijs", destination: "/bestellen", permanent: true },

      // Private chef is verhuisd naar het persoonlijke domein
      { source: "/private-chef-service", destination: "https://www.tjitzevanderdam.com/koken", permanent: true },
      { source: "/private-chef", destination: "https://www.tjitzevanderdam.com/koken", permanent: true },
      { source: "/prive-chef", destination: "https://www.tjitzevanderdam.com/koken", permanent: true },

      { source: "/culinaire-coaching", destination: "/diensten", permanent: true },
      { source: "/coaching", destination: "/diensten", permanent: true },
      { source: "/services", destination: "/diensten", permanent: true },

      // Oude GitHub Pages-site met .html-extensies
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/cases.html", destination: "/cases", permanent: true },
      { source: "/diensten.html", destination: "/diensten", permanent: true },
      { source: "/over-ons.html", destination: "/over-ons", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/over", destination: "/over-ons", permanent: true },
      { source: "/about", destination: "/en/about", permanent: true },
    ];
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
