/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Input } from "atomize";

const InputField = ({ valNum, bg, textColor }) => {
  const [val, setVal] = useState();

  const handleChange = (e) => {
    setVal(e?.target.value);
  };

  useEffect(() => {
    valNum(val);
  }, [val]);

  return (
    <Input
      fontFamily="code"
      bg={bg}
      textColor={textColor}
      m={{ t: "0.5rem" }}
      placeholder="Phone Number"
      value={val}
      onChange={handleChange}
    />
  );
};

export default InputField;
