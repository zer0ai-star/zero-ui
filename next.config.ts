/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
      remotePatterns:[
          {
              protocol:"https",
              hostname:"cdn.hashnode.com"
          },
          {
              protocol: "https",
              hostname: "images.unsplash.com",
            },
      ]
  }
}

module.exports = nextConfig