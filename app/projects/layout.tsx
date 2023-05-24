import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Adetomokun Israel | Projects",
  description: "Adetomokun's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={roboto.className}>
      <div>{children}</div>
    </div>
  );
}
