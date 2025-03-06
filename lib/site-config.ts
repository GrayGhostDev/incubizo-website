/**
 * Site configuration with dynamic values
 * These values can be overridden by environment variables
 */

type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    twitter?: string;
    linkedin?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
};

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Incubizo",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 
    "A business incubator and innovation hub helping startups grow through innovation, mentorship, and strategic partnerships.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://grayghostdev.github.io/incubizo-website",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/images/og-image.jpg",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/GrayGhostDev/incubizo-website",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@incubizo.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (123) 456-7890",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "123 Innovation Street, Tech District, CA 94103",
  },
}; 