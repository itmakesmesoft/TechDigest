/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const getBookList = () => {
  const rootPath = path.resolve(__dirname, "../../../");
  const srcPath = path.join(rootPath, "src", "content", "books");
  const items = fs.readdirSync(srcPath);
  const filter = ["index.mdx", "_meta.ts"];
  const filtered = items.filter((item) => !filter.includes(item));
  return filtered;
};

module.exports = {
  prompt: ({ prompter }) => {
    const bookList = getBookList();
    return prompter
      .select({
        type: "input",
        name: "name",
        message: "문서화할 책을 선택하세요.",
        choices: bookList,
      })
      .then((choice) =>
        prompter
          .prompt({
            type: "input",
            name: "chapter",
            message: "작업할 책의 챕터를 입력해주세요.",
          })
          .then(({ chapter }) => {
            return { nameOfBook: choice, chapter };
          }),
      );
  },
};
