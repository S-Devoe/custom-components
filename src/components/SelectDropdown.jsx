import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { useState } from "react";

const SelectDropdown = () => {
  const countryNames = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState();

  const handleChange = (value) => {
    setSelectedCountry(value);
  };

  console.log([countryNames.map((item) => item.name)]);

  const options = [
    { value: "World", label: "World" },
    { value: "Deev", label: "Deev" },
    { value: "Deev056", label: "Deev056" },
  ];

  return (
    <div>
      <Select
        className="hello"
        classNamePrefix="customStyle"
        // how to pass data that doesnt have inbuilt value and label

        // options={
        //   countryNames?.map((item) => ({
        //     value: item?.name,
        //     label: item?.name,
        //   })) || []
        // }

        // or

        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.name}
        options={countryNames}
        // to keep menu open while I inspect

        // menuIsOpen={true}
        value={selectedCountry}
        onChange={setSelectedCountry}
        isSearchable={true}
        name="color"
      />
    </div>
  );
};
export default SelectDropdown;
