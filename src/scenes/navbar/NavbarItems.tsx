import Link from "./Link";

const NavbarItems = () => {
  const linkPages = ["Home", "Benefits", "Our Diets", "Contact Us"];
  return (
    <>
      {linkPages.map((pageName, id) => (
        <Link key={id} page={pageName} />
      ))}
    </>
  );
};

export default NavbarItems;
