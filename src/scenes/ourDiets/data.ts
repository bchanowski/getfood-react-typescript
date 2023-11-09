import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { DietType } from "@/shared/types";

export const diets: DietType[] = [
  {
    name: "Standard",
    desc: "Vestibulum sit amet lectus magna. Nulla sollicitudin leo quis eleifend hendrerit. Aliquam blandit sem a tortor accumsan, at tempus nulla finibus",
    image: image1,
  },
  {
    name: "Vege",
    desc: "Etiam nec nunc eget magna tincidunt varius quis non nulla. Sed est sapien, sodales quis ipsum quis, vulputate tristique elit. Mauris a dictum erat, nec eleifend turpis.",
    image: image2,
  },
  {
    name: "Vegan",
    desc: "Quisque eu purus mattis, accumsan tellus pretium, auctor erat. Cras luctus, lacus in fringilla posuere, magna tellus hendrerit eros, vitae maximus libero odio sed diam. Nullam vestibulum blandit sagittis. In eu libero elit.",
    image: image3,
  },
  {
    name: "Summer Box",
    desc: "Duis nec purus augue. In hac habitasse platea dictumst. Aliquam dapibus nisl aliquam molestie scelerisque.",
    image: image4,
  },
  {
    name: "Lactose & Gluten Free",
    desc: "Cras augue purus, rutrum at mi maximus, dignissim pharetra massa. Quisque rhoncus velit at pretium commodo.",
    image: image5,
  },
  {
    name: "No Fish",
    desc: "Nunc eleifend ante quis lacus varius, in cursus lorem efficitur. Phasellus non neque nisl. Suspendisse massa justo, malesuada ut molestie a, dapibus a dui.",
    image: image6,
  },
];
