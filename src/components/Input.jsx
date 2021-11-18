import React, { useState, useEffect } from 'react';
import { Input } from "atomize";

const InputField = ({valNum}) => {
  const [val, setVal] = useState();

  const handleChange = (e) => {
    setVal(e?.target.value)
  };

  useEffect(() => {
    valNum(val)
  }, [val]);


  return <Input placeholder="Phone Number" value={val} onChange={handleChange} />;
};

export default InputField;
