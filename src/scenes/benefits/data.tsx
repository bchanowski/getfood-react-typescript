import { BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Made in Real Restaurant Kitchens",
    desc: "Cras tincidunt elit nec erat ultricies faucibus. Aliquam imperdiet massa neque, at vulputate quam porttitor et. Quisque porta arcu nec eros rhoncus porttitor.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Customers in Over 100 Cities Around The World",
    desc: "Cras tempor mauris id commodo volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Qualified and Educated Chefs",
    desc: " Praesent arcu purus, fringilla vitae eleifend at, dapibus et lorem. Morbi pretium, risus vel tincidunt laoreet, nisi metus rhoncus metus, ut ullamcorper turpis enim sed sapien.",
  },
];
