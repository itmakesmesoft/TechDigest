import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style-prefixed.css";
import "./globals.css";
import Image from "next/image";
import Logo from "../../public/Logo.png";

export const metadata = {
  title: "TechDigest",
  description: "개발 관련 지식을 공유하는 페이지입니다.",
};

const banner = (
  <Banner storageKey="some-key">아직 완성되지 않은 사이트임</Banner>
);
const navbar = <Navbar logo={<Image src={Logo} width="100" alt="logo" />} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="kr"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          sidebar={{ autoCollapse: true }}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/itmakesmesoft/TechDigest"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
