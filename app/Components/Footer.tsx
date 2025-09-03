import React from "react";

interface SocialLink {
  href: string;
  src: string;
  alt: string;
  label: string;
}

interface QuickLink {
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/sachin",
    src: "https://img.icons8.com/?size=100&id=16318&format=png&color=FFFFFF",
    alt: "GitHub",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/sachin",
    src: "https://img.icons8.com/?size=100&id=13930&format=png&color=FFFFFF",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/sachin",
    src: "https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=FFFFFF",
    alt: "Twitter",
    label: "Twitter",
  },
  {
    href: "https://facebook.com/sachin",
    src: "https://img.icons8.com/?size=100&id=118497&format=png&color=FFFFFF",
    alt: "Facebook",
    label: "Facebook",
  },
  {
    href: "https://instagram.com/sachin",
    src: "https://img.icons8.com/?size=100&id=32323&format=png&color=FFFFFF",
    alt: "Instagram",
    label: "Instagram",
  },
];

const quickLinks: QuickLink[] = [
  { name: "Destinations", href: "#destinations" },
  { name: "Travel Guides", href: "#guides" },
  { name: "Book Now", href: "#booking" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                ✈️ WanderAI
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
              <p className="text-xl font-semibold text-gray-300 leading-relaxed">
                Dream Big, Explore Bigger
              </p>
              <p className="text-gray-400 leading-relaxed">
                "Empowering travelers worldwide to create their perfect journeys
                and discover the extraordinary in every destination."
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link: QuickLink, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block"
                >
                  → {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Stay Connected
            </h3>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Get exclusive travel deals and destination insights!
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Join
                </button>
              </div>
            </div>

            {/* Enhanced Social Media Links */}
            <div className="space-y-3">
              <p className="text-gray-300 text-sm font-medium">
                Follow our journey
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(
                  ({ href, src, alt, label }: SocialLink, index: number) => (
                    <a
                      key={index}
                      href={href}
                      className="group relative w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl"
                      title={label}
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {label}
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-300">
              <span className="flex items-center">
                &copy; {currentYear} WanderAI |
                <span className="ml-2 flex items-center text-pink-400">
                  Crafted with
                  <span className="text-red-500 mx-1 animate-pulse text-lg">
                    ♥
                  </span>
                  by Sachin
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:underline"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:underline"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Travel Quote */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 italic text-sm opacity-75">
            "The world is a book and those who do not travel read only one
            page." - Saint Augustine
          </p>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600"></div>
    </footer>
  );
};

export default Footer;
