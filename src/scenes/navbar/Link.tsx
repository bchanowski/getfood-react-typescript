import { useAppDispatch, useAppSelector } from "@/hooks";
import { SelectedPage } from "@/shared/types";
import { setSelectedPage } from "../../slices/selectedPage";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const selectedPage = useAppSelector((state) => state.selectedPage.pageName);
  const dispatch = useAppDispatch();
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => dispatch(setSelectedPage(lowerCasePage))}
    >
      {page}
    </a>
  );
};

export default Link;
