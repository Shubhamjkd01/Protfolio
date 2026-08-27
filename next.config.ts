import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const isUserSite = repositoryName.toLowerCase() === `${repositoryOwner}.github.io`.toLowerCase();
const isGitHubPagesProject = process.env.GITHUB_ACTIONS === "true" && repositoryName.length > 0 && !isUserSite;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubPagesProject ? `/${repositoryName}` : "",
};

export default nextConfig;
