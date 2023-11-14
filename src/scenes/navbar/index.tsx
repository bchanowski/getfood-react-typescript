import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import ActionButton from "@/shared/ActionButton";
import NavbarItems from "./NavbarItems";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between ";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}

            <div className={`${flexBetween}  w-full max-md:hidden`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <NavbarItems />
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <ActionButton>Become a Member</ActionButton>
              </div>
            </div>

            <button
              className="rounded-full bg-secondary-500 p-2 md:hidden"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/*MOBILE MENU MODAL */}
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
