import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavbarItems from "./NavbarItems";
import NavbarMenu from "./NavbarMenu";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} fixed top-0 z-40 flex w-full items-center justify-between py-6`}
      >
        <div className={`mx-auto flex w-5/6 items-center justify-between`}>
          <div className={`flex w-full items-center justify-between gap-16`}>
            <NavbarMenu />
            <button
              className="rounded-full bg-secondary-500 p-2 md:hidden"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl md:hidden">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <NavbarItems />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
