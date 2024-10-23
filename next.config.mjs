/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "https://www.w3schools.com/howto/img_avatar.png",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;    