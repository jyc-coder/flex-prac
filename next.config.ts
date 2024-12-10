import type { NextConfig } from "next";
// import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `@import "@/styles/font"; @import "@/styles/variables";`,
  },
};

export default nextConfig;
