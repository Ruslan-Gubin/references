import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutHeader } from "@/widgets/layout/layout-header/LayoutHeader";
import { CheckAuth } from "@/widgets/layout/check-auth/CheckAuth";

import "./styles/globals.scss";
import styles from "./styles/Layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itilium",
  description: "Itilium by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <LayoutHeader />
          <CheckAuth />
          <div className={styles.content}>{children}</div>
        </main>
      </body>
    </html>
  );
}
