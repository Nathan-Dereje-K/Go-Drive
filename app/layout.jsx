import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Go Drive",
  description: "A local car rental website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="p-1 bg-gradient-to-r from-pink-700 to-purple-700"></div>
        <Navbar />
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
