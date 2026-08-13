import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Orbis-Trading";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? repoBasePath : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
