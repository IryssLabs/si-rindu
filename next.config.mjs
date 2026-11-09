/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true, // penting agar export tidak error
  },
  trailingSlash: true, // menambah slash di akhir URL agar semua page jadi folder (lebih aman di cPanel)
};

export default nextConfig;
