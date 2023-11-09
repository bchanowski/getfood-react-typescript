import { SelectedPage } from "@/shared/types";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavbarItems = ({ selectedPage, setSelectedPage }: Props) => {
  const linkPages = ["Home", "Benefits", "Our Diets", "Contact Us"];
  return (
    <>
      {linkPages.map((pageName, id) => (
        <Link
          key={id}
          page={pageName}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </>
  );
};

export default NavbarItems;
