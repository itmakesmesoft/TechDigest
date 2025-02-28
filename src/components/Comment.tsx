"use client";
import Giscus from "@giscus/react";
import { useTheme } from "nextra-theme-docs";

const themeMap: Record<string, string> = {
  light: "light",
  dark: "dark",
  system: "dark",
};

const Comment = () => {
  const { theme = "dark" } = useTheme();
  return (
    <div className="mt-10">
      <Giscus
        theme={themeMap[theme]}
        id="comments"
        repo="itmakesmesoft/TechDigest"
        repoId="R_kgDON-ZC-w"
        category="General"
        categoryId="DIC_kwDON-ZC-84CnarR"
        mapping="title"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactions-enabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
