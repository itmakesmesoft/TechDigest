import Link from "next/link";

const NotFound = () => {
  return (
    <div className="absolute inset-0 w-screen h-screen flex flex-col items-center justify-center">
      <div className=" px-4 text-center ">
        <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-2">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 break-keep whitespace-pre-wrap">
            요청하신 페이지가 존재하지 않거나 경로가 잘못되었습니다.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-md transition duration-200"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
