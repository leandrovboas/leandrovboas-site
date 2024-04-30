/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  esModule: true,
  compress: false,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
