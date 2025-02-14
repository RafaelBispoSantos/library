import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  remotePatterns: [
    {
      protocol: "https",
      hostname: "phacehold.co",
      
    },{
      protocol: "https",
      hostname: "ik.imagekit.io",
      port: "",
    }
  ],
  domains: ["m.media-amazon.com"],
 }
};

export default nextConfig;
