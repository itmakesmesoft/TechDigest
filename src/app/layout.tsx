import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style-prefixed.css";
import "./globals.css";

export const metadata = {
  title: "TechDigest",
  description: "개발 관련 지식을 공유하는 페이지입니다.",
};

const banner = (
  <Banner storageKey="some-key">아직 완성되지 않은 사이트임</Banner>
);
const navbar = <Navbar logo={<b>TechDigest</b>} />;
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
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
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
