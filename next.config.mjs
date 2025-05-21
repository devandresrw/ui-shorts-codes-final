/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        "http://localhost:3000",
        "http://192.168.128.4:3000", // agrega aquí la IP desde la que accedes
    ],
};

export default nextConfig;