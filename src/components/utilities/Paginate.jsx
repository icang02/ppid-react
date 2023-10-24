import React from "react";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";

export default function Paginate({
  setCurrentPage,
  currentPage,
  lastPage,
  from,
  to,
  total,
}) {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePrevPage = () => {
    setCurrentPage(prevPage);
  };

  const handleNextPage = () => {
    setCurrentPage(nextPage);
  };

  const handleCurrentPage = () => {
    window.scroll(0, 0);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  return (
    <nav className="mx-auto scale-90 lg:scale-100">
      {/* PREVIOUS PAGE */}
      <ul class="inline-flex -space-x-px text-sm">
        {currentPage > 1 ? (
          <>
            <li onClick={handleFirstPage} className="cursor-pointer">
              <a class="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                First Page
              </a>
            </li>

            <li onClick={handlePrevPage} className="cursor-pointer">
              <a class="flex h-10 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <IoChevronBack />
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="pointer-events-none">
              <a class="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-gray-100 px-3 leading-tight text-gray-500">
                First Page
              </a>
            </li>
            <li>
              <a class="flex h-10 items-center justify-center border border-gray-300 bg-gray-100 px-3 leading-tight text-gray-500">
                <IoChevronBack />
              </a>
            </li>
          </>
        )}

        {/* CURRENT PAGE */}
        <li className="cursor-pointer" onClick={handleCurrentPage}>
          <a class="flex h-10 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700">
            Page {currentPage}
          </a>
        </li>

        {/* NEXT PAGE */}
        {nextPage <= lastPage ? (
          <>
            <li onClick={handleNextPage} className="cursor-pointer">
              <a class="flex h-10 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <IoChevronForwardOutline />
              </a>
            </li>

            <li onClick={handleLastPage} className="cursor-pointer">
              <a class="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Last Page
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a class="flex h-10 items-center justify-center border border-gray-300  bg-gray-100 px-3 leading-tight text-gray-500">
                <IoChevronForwardOutline />
              </a>
            </li>

            <li className="pointer-events-none">
              <a class="flex h-10 items-center justify-center rounded-r-lg border border-gray-300  bg-gray-100 px-3 leading-tight text-gray-500">
                Last
              </a>
            </li>
          </>
        )}
      </ul>

      <div class="mt-2 text-center text-xs text-gray-700 dark:text-gray-400 lg:text-sm">
        Showing{" "}
        <span class="font-semibold text-gray-900 dark:text-gray-400">
          {from}
        </span>{" "}
        to{" "}
        <span class="font-semibold text-gray-900 dark:text-gray-400">{to}</span>{" "}
        of{" "}
        <span class="font-semibold text-gray-900 dark:text-gray-400">
          {total}
        </span>{" "}
        Entries
      </div>
    </nav>
  );
}
