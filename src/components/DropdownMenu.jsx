/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CountryCode from "../util/CountryCode";
//import Select from "react-select";
import { Select } from "antd";
import "antd/dist/antd.css";

const DropdownMenu = ({ countryCode, customStyles }) => {
  const [selectedCode, setSelectedCode] = useState("+62");
  const { Option } = Select;

  const searchList = CountryCode?.map(({ name, value }) => {
    return {
      value: value,
      label: `(${value}) ${name}`,
    };
  });

  const handleChange = (selectedCode) => {
    setSelectedCode(selectedCode);
    countryCode(selectedCode);
  };

  return (
    <Select
      dropdownClassName={customStyles ? "select-dark" : null}
      showSearch
      optionFilterProp="children"
      defaultValue={"+62"}
      value={selectedCode}
      onChange={handleChange}
      style={{ width: "100%" }}
    >
      {CountryCode.map((country, index) => (
        <Option
          className={customStyles ? "select-dark" : null}
          key={index}
          value={country?.value}
        >
          {country?.value} {country?.name}
        </Option>
      ))}
    </Select>
  );
};

export default DropdownMenu;
