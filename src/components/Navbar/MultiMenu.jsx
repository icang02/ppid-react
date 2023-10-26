import { IoChevronDown } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function MultiMenu({ currentPath, titleLink, listMenu }) {
  function handleClickMenu() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={`${
        listMenu
          .map((item) => item.path)
          .some((key) => currentPath.includes(key)) && "active"
      } group cursor-pointer`}
    >
      <div className="flex items-center gap-0.5 py-3.5 tracking-widest transition-all duration-500 group-hover:text-acsent">
        {titleLink} <IoChevronDown />
      </div>

      <div className="pointer-events-none absolute translate-y-4 text-other opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <ul className="overflow-hidden rounded-lg bg-white text-xs text-black">
          {listMenu.map((item, i) => (
            <div key={i}>
              <Link
                onClick={handleClickMenu}
                to={item.path}
                className="block py-3 pl-5 pr-7 tracking-wider duration-300 hover:bg-[#eeeeee] hover:text-acsent"
              >
                <span>{item.nama}</span>
              </Link>
              {i < listMenu.length - 1 && <hr />}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
