import type { Metadata } from "next";
import { Outfit, Dancing_Script } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your dream trips with AI",
};

// Outfit
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// Dancing Script
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.variable} ${dancingScript.variable} font-sans min-h-screen w-full relative`}
        >
          {/* Background Video */}
          {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

          {/* Optional gradient overlay for dreamy effect */}
          {/* <div
            className="fixed inset-0 -z-10"
            style={{
              backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
            `,
            }}
          /> */}
          
          <BackgroundBeamsWithCollision className="fixed inset-0 -z-10"/>
          {/* Foreground Content */}
          <ConvexClientProvider>
            <div className=" z-10">{children}</div>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
