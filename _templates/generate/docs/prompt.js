/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const FILTER_LIST = new Set(["index.mdx", "_meta.ts"]);

const getBookList = () => {
  try {
    const rootPath = path.resolve(__dirname, "../../../");
    const srcPath = path.join(rootPath, "src/content/books");
    return fs.readdirSync(srcPath).filter((item) => !FILTER_LIST.has(item));
  } catch (error) {
    console.error("❌ 책 목록을 불러오는 중 오류가 발생했어요:", error);
    return [];
  }
};

module.exports = {
  prompt: async ({ prompter }) => {
    const bookList = getBookList();
    if (bookList.length === 0) {
      console.error("⚠️ 선택 가능한 책이 없습니다.");
      return null;
    }

    const { name } = await prompter.select({
      type: "input",
      name: "name",
      message: "문서화할 책을 선택해주세요.",
      choices: bookList,
    });

    const { chapter } = await prompter.prompt({
      type: "input",
      name: "chapter",
      message: "작업할 책의 챕터를 입력해주세요.",
    });

    return { nameOfBook: name, chapter };
  },
};
