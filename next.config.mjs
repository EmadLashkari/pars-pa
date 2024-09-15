/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/pars-pa",
  // output: "export", // <=== enables static exports
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trustseal.enamad.ir",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
