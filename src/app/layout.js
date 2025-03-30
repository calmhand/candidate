import { Exo } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import SiteNav from "@/_components/SiteNav";

const exoSans = Exo({
    variable: "--font-exo",
    subsets: ["latin"]
})

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'web application',
        'next.js',
        'react',
        'job seekers',
        'web design'
    ],
    authors: [
        {
            name: "seven days. nine years.",
            url: "https://seven-nine.co"
        }
    ],
    creator: "seven days. nine years.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "seven days. nine years.",
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${exoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
