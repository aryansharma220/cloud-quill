import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cloud Quill - Modern Document Editor for Collaborative Writing",
    template: "%s | Cloud Quill"
  },
  description: "Cloud Quill is a modern document editor for seamless collaboration. Write, edit, and share your ideas in real-time with powerful features and enterprise-grade security.",
  keywords: ["document editor", "collaborative writing", "real-time collaboration", "text editor", "team collaboration", "secure documents"],
  authors: [{ name: "Cloud Quill Team" }],
  creator: "Cloud Quill",
  publisher: "Cloud Quill",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cloud-quill.vercel.app/",
    title: "Cloud Quill - Modern Document Editor for Collaborative Writing",
    description: "Write, edit, and collaborate on documents in real-time with Cloud Quill's powerful features and enterprise-grade security.",
    siteName: "Cloud Quill",
    images: [{
      url: "/logo.svg",
      width: 1200,
      height: 630,
      alt: "Cloud Quill Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Quill - Modern Document Editor for Collaborative Writing",
    description: "Write, edit, and collaborate on documents in real-time with Cloud Quill's powerful features and enterprise-grade security.",
    images: ["/logo.svg"],
    creator: "@cloudquill",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Add JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cloud Quill",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Cloud Quill is a modern document editor for seamless collaboration. Write, edit, and share your ideas in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#735DA5" />
        <link rel="canonical" href="https://cloud-quill.vercel.app/" />
      </head>
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
