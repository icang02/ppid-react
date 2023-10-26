import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Paginate({ lastPage, from, to, total }) {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { page, keyword } = useParams();

  const prevPage = parseInt(page) - 1;
  const nextPage = parseInt(page) + 1;

  const handlePrevPage = () => {
    if (path.includes("/berita/search/")) {
      return navigate(`/berita/search/${prevPage}/${keyword}`);
    }
    navigate(`/berita/page/${prevPage}`);
  };

  const handleNextPage = () => {
    if (path.includes("/berita/search/")) {
      return navigate(`/berita/search/${nextPage}/${keyword}`);
    }
    return navigate(`/berita/page/${nextPage}`);
  };

  const handleCurrentPage = () => {
    window.scroll(0, 0);
  };

  const handleFirstPage = () => {
    if (path.includes("/berita/search/")) {
      return navigate(`/berita/search/${1}/${keyword}`);
    }
    navigate(`/berita/page/1`);
  };

  const handleLastPage = () => {
    if (path.includes("/berita/search/")) {
      return navigate(`/berita/search/${lastPage}/${keyword}`);
    }
    navigate(`/berita/page/${lastPage}`);
  };

  return (
    <nav className="mx-auto scale-90 lg:scale-100">
      {/* PREVIOUS PAGE */}
      <ul className="inline-flex -space-x-px text-sm">
        {page > 1 ? (
          <>
            <li onClick={handleFirstPage} className="cursor-pointer">
              <a className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                First Page
              </a>
            </li>

            <li onClick={handlePrevPage} className="cursor-pointer">
              <a className="flex h-10 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <IoChevronBack />
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="pointer-events-none">
              <a className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-gray-100 px-3 leading-tight text-gray-500">
                First Page
              </a>
            </li>
            <li>
              <a className="flex h-10 items-center justify-center border border-gray-300 bg-gray-100 px-3 leading-tight text-gray-500">
                <IoChevronBack />
              </a>
            </li>
          </>
        )}

        {/* CURRENT PAGE */}
        <li className="cursor-pointer" onClick={handleCurrentPage}>
          <a className="flex h-10 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700">
            Page {page}
          </a>
        </li>

        {/* NEXT PAGE */}
        {nextPage <= lastPage ? (
          <>
            <li onClick={handleNextPage} className="cursor-pointer">
              <a className="flex h-10 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <IoChevronForwardOutline />
              </a>
            </li>

            <li onClick={handleLastPage} className="cursor-pointer">
              <a className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Last Page
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a className="flex h-10 items-center justify-center border border-gray-300  bg-gray-100 px-3 leading-tight text-gray-500">
                <IoChevronForwardOutline />
              </a>
            </li>

            <li className="pointer-events-none">
              <a className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300  bg-gray-100 px-3 leading-tight text-gray-500">
                Last Page
              </a>
            </li>
          </>
        )}
      </ul>

      <div className="mt-2 text-center text-xs text-gray-700 dark:text-gray-400 lg:text-sm">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-400">
          {from}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-400">
          {to}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-400">
          {total}
        </span>{" "}
        Entries
      </div>
    </nav>
  );
}
