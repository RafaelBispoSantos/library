import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  remotePatterns: [
    {
      protocol: "https",
      hostname: "phacehold.co",
      
    },
  ],
  domains: ["m.media-amazon.com"],
 }
};

export default nextConfig;
