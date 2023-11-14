import React from "react";
import { SelectedPage } from "./types";
import { useAppDispatch } from "@/hooks";
import { setSelectedPage } from "../slices/selectedPage";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <a
      onClick={() => dispatch(setSelectedPage(SelectedPage.ContactUs))}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {children}
      </p>
    </a>
  );
};

export default ActionButton;
