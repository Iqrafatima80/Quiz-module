"use client";

import { useState } from "react";
import Script from "next/script";
import "./globals.css";
import LandingPage from "./components/landing-page/LandingPage";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";

// export const metadata = {
//   title: "E Ustaad",
//   description: "Hi, here to help",
// };

export default function RootLayout({ children }) {
  const [login, setLogin] = useState(true);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/0eba5e8d82.js"
          crossorigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning={true}>
        {!login && <LandingPage />}

        {login == true && (
          <div className="flex max-h-screen">
            <SideBar />

            <div className="w-full flex flex-col">
              <Header />

              <div className="p-0 h-full overflow-auto">{children}</div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
