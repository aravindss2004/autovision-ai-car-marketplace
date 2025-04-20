/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/embed",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-src 'self' https://vehiql-waitlist-aravind.created.app",
            },
          ],
        },
      ];
    },
  
    images: {
      domains: ['hpiodrziiaviwwjxbfmb.supabase.co'], // ✅ Add your Supabase domain here
    },
  };
  
  export default nextConfig;