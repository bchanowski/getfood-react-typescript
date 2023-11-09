import { diets } from "./data";
import Diet from "./Diet";
import { DietType } from "@/shared/types";

const DietsSlider = () => {
  return (
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
      <ul className="w-[2800px] whitespace-nowrap">
        {diets.map((item: DietType, index) => (
          <Diet
            key={`${item.name}-${index}`}
            name={item.name}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default DietsSlider;
