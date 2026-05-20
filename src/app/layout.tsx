import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'أفضل مطعم مشويات ومبشور في الطائف | مطعم مبشور الطائف',
  description: 'استمتع بألذ المشويات الحجازية والمبشور الأصلي في الطائف. جودة عالية، جلسات عائلية، وخدمة ممتازة تجعل زيارتك تجربة لا تُنسى.',
  keywords: ["مطعم مشويات في الطائف, أفضل مبشور في الطائف, مشويات حجازية, مطاعم الطائف, رز بشاوري ومشاوي"],
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
