import React, { useState, useEffect } from "react";
import DropdownMenu from "../components/DropdownMenu";
import InputValue from "../components/Input";
import { StyleReset, Row, Col, Div} from "atomize";

const Home = () => {
  const [code, setCode] = useState('+62')
  const [phoneNumber, setPhoneNumber] = useState('');
  const c = code.substring(1)

  const getCountryCode = (code) => {
    setCode(code);
  };

  const getPhoneNumber = (num) => {
    setPhoneNumber(num);
  };

  const sendText = () => {
    {window.location.href=`https://wa.me/send/?phone=${c}${phoneNumber}&text&app_absent=0`};
  }

  return (
    <>
      {console.log(code)}
      <StyleReset />
      <Col
        rounded="lg"
        minW={{ xs: "90%", md: "40%" }}
        bg="gray200"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Row p={{ y: "1rem" }}>
          <Col size="12">
            <DropdownMenu countryCode={getCountryCode} />
            <InputValue valNum={getPhoneNumber} />
            <Div>
              <button onClick={sendText}>
                Send
              </button>
            </Div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Home;
