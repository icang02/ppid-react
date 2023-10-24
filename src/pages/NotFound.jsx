import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="flex min-h-screen flex-grow items-center justify-center bg-biru-uho px-2 lg:px-0">
      <div class="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 class="mb-4 text-4xl font-bold lg:mb-6 lg:text-5xl">404</h1>
        <p class="text-sm text-gray-600 lg:text-base">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          class="mt-4 inline-block rounded bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 lg:mt-6 lg:text-base"
        >
          {" "}
          Go back to Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
