export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurDiets = "ourdiets",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface DietType {
  name: string;
  desc?: string;
  image: string;
}
