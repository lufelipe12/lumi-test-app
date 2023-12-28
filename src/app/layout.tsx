"use client";
import { Open_Sans } from "next/font/google";

import { Sidebar } from "@/components/sidebar";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/global-styles";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />

      <body className={openSans.className}>
        <Sidebar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
