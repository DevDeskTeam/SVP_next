import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Comment out this line to avoid the conflict with middleware
};

export default withNextIntl(nextConfig);
