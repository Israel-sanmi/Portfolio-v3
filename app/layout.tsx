import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Adetomokun Israel | Home",
  description: "Adetomokun's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
        <div>{children}</div>
      </body>
    </html>
  );
}
