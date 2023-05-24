// import './globals.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Adetomokun Israel | about",
  description: "Important details about Israel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={roboto.className}>{children}</div>
    </div>
  );
}
