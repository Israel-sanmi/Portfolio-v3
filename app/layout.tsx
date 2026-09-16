import "./globals.css";
import { Poppins, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Adetomokun Israel — Software Engineer & Creator",
  description:
    "Portfolio of Adetomokun Israel — Software Engineer building digital products that matter. Creator of Dootling and Selfana.",
  keywords: [
    "Adetomokun Israel",
    "Software Engineer",
    "Frontend Developer",
    "Portfolio",
    "Dootling",
    "Selfana",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Adetomokun Israel" }],
  openGraph: {
    title: "Adetomokun Israel — Software Engineer & Creator",
    description:
      "Building digital products that matter. Creator of Dootling and Selfana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased bg-[#07070b] text-white">
        <div className="grain-overlay" aria-hidden="true" />
        <main>{children}</main>
      </body>
    </html>
  );
}
