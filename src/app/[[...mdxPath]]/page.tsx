/* eslint-disable react-hooks/rules-of-hooks */
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";
import { Comment } from "@/components";
import { notFound } from "next/navigation";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

interface Props {
  params: Promise<{ mdxPath: string[] }>;
}

export async function generateMetadata(props: Props) {
  try {
    const params = await props.params;
    if (!params.mdxPath || params.mdxPath.length === 0) notFound();

    try {
      const { metadata } = await importPage(params.mdxPath);
      return metadata;
    } catch (importError) {
      console.error("Failed to import page:", importError);
      notFound();
    }
  } catch (err) {
    console.error("Error in generateMetadata:", err);
    return {
      title: "오류 발생",
      description: "페이지를 불러오는 중 문제가 발생했습니다.",
    };
  }
}

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
