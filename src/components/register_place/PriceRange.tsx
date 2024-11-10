import * as React from "react";
import { useController } from "react-hook-form";

import Select from "react-select";

const PriceRange = () => {
  const { field: price_range } = useController({ name: "price_range" });

  const priceRange = [
    { value: "1", label: "$ - Inexpensive" },
    { value: "2", label: "$$ - Moderate" },
    { value: "3", label: "$$$ - Expensive" },
  ];

  return (
    <React.Fragment>
      <Select
        {...price_range}
        required={true}
        placeholder={"Price Range"}
        options={priceRange}
        classNamePrefix="react-select"
        styles={{
          menu: (baseStyles) => ({
            ...baseStyles,
            zIndex: 10,
          }),
        }}
      ></Select>
    </React.Fragment>
  );
};

export default PriceRange;
