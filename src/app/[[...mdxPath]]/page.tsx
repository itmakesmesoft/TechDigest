import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";
import { Comment } from "@/components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

interface Props {
  params: Promise<{ mdxPath: string[] }>;
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;

  const hasComment = (metadata.asIndexPage || metadata.comments) ?? false;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
      {hasComment && <Comment />}
    </Wrapper>
  );
}
