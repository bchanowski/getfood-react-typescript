import Logo from "@/assets/Logo.png";
import NavbarItems from "./NavbarItems";
import ActionButton from "@/shared/ActionButton";

const NavbarMenu = () => {
  return (
    <>
      <img alt="logo" src={Logo} />

      <div className={`flex w-full items-center justify-between max-md:hidden`}>
        <div className={`flex items-center justify-between gap-8 text-sm`}>
          <NavbarItems />
        </div>
        <div className={`flex items-center justify-between gap-8 `}>
          <p>Sign In</p>
          <ActionButton>Become a Member</ActionButton>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
