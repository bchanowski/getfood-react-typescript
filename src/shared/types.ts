export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurDiets = "ourdiets",
  ContactUs = "contactus",
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export type DietType = {
  name: string;
  desc?: string;
  image: string;
};

export type selectedPageType = {
  pageName: string;
};
