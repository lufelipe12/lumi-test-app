"use client";
import { Open_Sans } from "next/font/google";

import { Sidebar } from "@/components/sidebar";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/global-styles";
import Provider from "@/providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />

      <Provider>
        <body className={openSans.className}>
          <Sidebar />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </Provider>
    </html>
  );
}
