import React from "react";
import Skeleton from "react-loading-skeleton";

export default function LoadCardAllNews({ count }) {
  return Array(count)
    .fill(0)
    .map((item, i) => (
      <div className="pointer-events-none col-span-1" key={i}>
        <div className="grid grid-cols-12 rounded-lg shadow-lg">
          <div className="col-span-12 border lg:col-span-4">
            <div className="block overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
              <Skeleton className="aspect-[16/10] object-cover object-center transition-all duration-500 lg:aspect-[4/3]" />
            </div>
          </div>

          <div className="col-span-12 border lg:col-span-8 lg:flex lg:items-center lg:rounded-tr-lg lg:px-12">
            <div className="mt-5 px-5 pb-5 lg:m-0 lg:w-full lg:p-0">
              <div className="block font-bold leading-5 hover:underline lg:text-xl">
                <Skeleton count={2} />
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                <Skeleton className="w-24" />
              </div>
              <p className="mt-3 text-sm text-other lg:mt-5 lg:text-base">
                <Skeleton count={2} />
              </p>
              <div className="taxt-base mt-5 hidden italic text-blue-500 lg:block">
                <Skeleton className="w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
}
