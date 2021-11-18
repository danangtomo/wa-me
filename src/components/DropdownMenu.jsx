import React, { useState, useEffect } from "react";
import CountryCode from "../util/CountryCode";
import Select from "react-select";

const DropdownMenu = ({countryCode}) => {
  const [selectedCode, setSelectedCode] = useState();

  const searchList = CountryCode.map(
    ({ name, value }) => {
      return{ 
      value: value, 
      label: `(${value}) ${name}` 
      }
    }
  );

  const handleChange = selectedCode => {
    setSelectedCode(selectedCode)
    countryCode(selectedCode?.value)
  }

  return (
    <Select
      options={searchList}
      defaultValue={searchList[99]}
      onChange={handleChange}
      placeholder={false}
      search
    />
  );
};

export default DropdownMenu;
