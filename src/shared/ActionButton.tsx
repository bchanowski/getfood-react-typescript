import React from "react";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <a
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {children}
      </p>
    </a>
  );
};

export default ActionButton;
