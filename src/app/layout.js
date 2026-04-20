import "./globals.css";
import { Inria_Serif } from "next/font/google";
import Header from "@/components/Header";

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased text-[#973434]`}>
      <body
        className={`${inria.className} min-h-screen flex flex-col border border-red-700 text-[#973434]`}
      >
        <div className="text-[#973434]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
