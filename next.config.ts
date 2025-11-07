/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "img-src 'self' data: https://res.cloudinary.com;",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.openspeedtest.com https://*.nperf.com;",
              "style-src 'self' 'unsafe-inline';",
              "connect-src 'self' https://*.openspeedtest.com https://*.nperf.com;",
              "frame-src 'self' https://*.openspeedtest.com https://*.nperf.com;",
              "child-src 'self' https://*.openspeedtest.com https://*.nperf.com;",
              "frame-ancestors 'self';",
            ].join(" "),
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: [
              "geolocation=(self \"https://fast.com\" \"https://openspeedtest.com\"),",
              "fullscreen=(self),",
              "clipboard-read=(self),",
              "clipboard-write=(self)",
            ].join(" "),
          },
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
