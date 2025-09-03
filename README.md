
# 🌍 WanderAI - AI Trip Planner ✈️

WanderAI is an AI-powered trip planner built with **Next.js, React, TypeScript, Convex, Arcjet, Clerk Authentication, Google Gemini 1.5 Flash, Pixabay API, Unsplash API, and more**.  
It helps users effortlessly plan trips, explore destinations, and generate detailed itineraries.

---

## 🚀 Features
- 🤖 **AI-Powered Trip Planning** using **Google Gemini 1.5 Flash**
- 📸 **Automatic fetching of destination images** from Pixabay & Unsplash
- 🔐 **Secure authentication** with Clerk
- 🗄️ **Database & backend logic** powered by Convex
- ⚡ **Rate limiting & security** via Arcjet
- 🍁 ** Google Maps using Google Api
- 🎨 **Modern responsive UI** with TailwindCSS + ShadCN/UI
- 🎥 **Video backgrounds & animations** for immersive experience
- 🗺️ **Interactive maps** with MapLibre / Globe integration (optional you can add that also)

---

## 📂 Project Structure

```
WanderAI/
│── .next/                  # Next.js build folder
│── .vscode/                # VSCode settings
│── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication pages
│   ├── api/                # API routes
│   ├── Components/         # Reusable components
│   ├── create-new-trip/    # Trip creation pages
│   ├── my-trips/           # User trips
│   ├── pricing/            # Pricing page
│   ├── view-trips/         # View trips page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── Provider.tsx        # Global provider
│
│── components/             # Shared components
│   ├── magicui/            # Custom magic UI effects
│   └── ui/                 # UI building blocks
│
│── convex/                 # Convex backend functions
│── hooks/                  # Custom React hooks
│── public/                 # Static assets (images, icons, media)
│   ├── S1.png … S12.png    # Screenshots
│   ├── logo.png            # App logo
│   ├── globe.svg           # Globe assets
│   └── ...                 # Other images & media
│
│── package.json            # Dependencies & scripts
│── next.config.ts          # Next.js config
│── middleware.ts           # Middleware
│── postcss.config.mjs      # Tailwind/PostCSS config
│── tsconfig.json           # TypeScript config
│── README.md               # Project documentation
```

---

## 🖼️ Screenshots

<h1 className='font-bold text-4xl'>Here Are Some Screenshots of My project WANDER-AI</h1>

<p align="center">
  <img src="public/S1.png" alt="Screenshot 1" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S2.png" alt="Screenshot 2" width="45%" style="border-radius:15px; margin:10px;" />
</p>

<p align="center">
  <img src="public/S3.png" alt="Screenshot 3" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S4.png" alt="Screenshot 4" width="45%" style="border-radius:15px; margin:10px;" />
</p>

<p align="center">
  <img src="public/S5.png" alt="Screenshot 5" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S6.png" alt="Screenshot 6" width="45%" style="border-radius:15px; margin:10px;" />
</p>

<p align="center">
  <img src="public/S7.png" alt="Screenshot 7" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S8.png" alt="Screenshot 8" width="45%" style="border-radius:15px; margin:10px;" />
</p>

<p align="center">
  <img src="public/S9.png" alt="Screenshot 9" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S10.png" alt="Screenshot 10" width="45%" style="border-radius:15px; margin:10px;" />
</p>

<p align="center">
  <img src="public/S11.png" alt="Screenshot 11" width="45%" style="border-radius:15px; margin:10px;" />
  <img src="public/S12.png" alt="Screenshot 12" width="45%" style="border-radius:15px; margin:10px;" />
</p>


---

## ⚙️ Tech Stack

### 🖥️ Frontend
![Next.js](https://skillicons.dev/icons?i=next) 
![React](https://skillicons.dev/icons?i=react) 
![Typescript](https://skillicons.dev/icons?i=ts) 
![Tailwind](https://skillicons.dev/icons?i=tailwind)  

### ⚡ Backend & DB
![Convex](https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=icloud&logoColor=white)  

### 🔐 Authentication & Security
![Clerk](https://img.shields.io/badge/Clerk-3B82F6?style=for-the-badge&logo=lock&logoColor=white)
![Arcjet](https://img.shields.io/badge/Arcjet-8A2BE2?style=for-the-badge&logo=shield&logoColor=white)  

### 🤖 AI
![Google](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)  

### 📸 APIs
![Pixabay](https://img.shields.io/badge/Pixabay-2ecc71?style=for-the-badge&logo=pixabay&logoColor=white)
![Unsplash](https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=unsplash&logoColor=white)  

### 🛠️ Tools
![Vercel](https://skillicons.dev/icons?i=vercel) 
![Git](https://skillicons.dev/icons?i=git) 
![Github](https://skillicons.dev/icons?i=github) 
![VSCode](https://skillicons.dev/icons?i=vscode)  

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/wanderai.git
cd wanderai
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)  
- [Convex](https://convex.dev/)  
- [Clerk](https://clerk.com/)  
- [Arcjet](https://arcjet.com/)  
- [Pixabay](https://pixabay.com/)  
- [Unsplash](https://unsplash.com/)  
- [Google Gemini](https://ai.google/)  

---

## 📜 License

```
Copyright (c) 2025 Sachin Pundir  
All Rights Reserved.  

Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.  
This software is proprietary and confidential.  

Developed by Sachin Pundir 🚀
```

---

💡 *Dream. Plan. Explore. With WanderAI!* 🌍✨
