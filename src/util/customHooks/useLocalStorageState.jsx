// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const UseLocalStorageState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage?.getItem(key);
    return persistedValue !== null ? persistedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorageState;
