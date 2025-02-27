// frontMatter에 생성일을 추가하기 위한 헬퍼 메서드 지정

const formatDateAsYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() > 9
      ? date.getMonth() + 1
      : "0" + String(date.getMonth() + 1);
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

module.exports = {
  helpers: {
    now: () => formatDateAsYYYYMMDD(new Date()),
  },
};
