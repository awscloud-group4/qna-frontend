/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    api_url: "192.168.0.23:8000",
  },
};

export default nextConfig;
