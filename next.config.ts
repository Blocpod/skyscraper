import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
          remotePatterns: [
            { protocol: "https", hostname: "*.amazonaws.com" },
            { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },
            { protocol: "https", hostname: "*.cloudflare.com" },
            { protocol: "https", hostname: "pub-*.r2.dev" },
                ],
    },
    experimental: {
          serverActions: {
                  allowedOrigins: ["localhost:3001"],
          },
    },
};

export default nextConfig;
