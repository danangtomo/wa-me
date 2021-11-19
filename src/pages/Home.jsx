import React, { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import InputValue from "../components/Input";
import {
  StyleReset,
  Text,
  Div,
  Row,
  Col,
  Icon,
  Button,
  Notification,
} from "atomize";

const Home = () => {
  const [code, setCode] = useState("+62");
  const c = code.substring(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [dangerLight, setDangerLight] = useState(false);

  const getCountryCode = (code) => {
    setCode(code);
  };

  const getPhoneNumber = (num) => {
    setPhoneNumber(num);
  };

  const sendText = () => {
    if (isNaN(phoneNumber)) {
      setDangerLight(true);
    } else {
      setIsClick(true);
      window.open(`https://api.whatsapp.com/send/?phone=${c}${phoneNumber}`);
      window.location.reload(true);
    }
  };

  const onClose = () => {
    setDangerLight(false);
  };

  return (
    <>
      <StyleReset />
      <Col
        rounded="lg"
        minW={{ xs: "90%", md: "40%" }}
        bg="gray200"
        shadow="4"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Row p={{ y: "1rem" }}>
          <Col size="12">
            <Text
              textWeight="400"
              textAlign="center"
              textSize="title"
              fontFamily="primary"
              m={{ b: "30px" }}
            >
              Send WhatsApp chats without saving the number ?
            </Text>
            <DropdownMenu countryCode={getCountryCode} />
            <InputValue valNum={getPhoneNumber} />
            <Button
              m={{ t: "1rem" }}
              w="100%"
              onClick={sendText}
              disabled={phoneNumber?.length > 3 ? false : true}
              bg="info500"
              prefix={
                <Icon
                  name={isClick ? "Loading" : "MessageSolid"}
                  pos="absolute"
                  top="50%"
                  left="1rem"
                  transform="translateY(-50%)"
                  size="18px"
                  color="white"
                  m={{ r: "0.5rem" }}
                />
              }
            >
              Open chat in WhatsApp
            </Button>

            <Div pos="relative">
              <Notification
                bg="danger100"
                textColor="danger800"
                isOpen={dangerLight}
                onClose={onClose}
                w={{ xs: "auto", md: "25vw" }}
                pos="absolute"
                m={{
                  t: { xs: "-80%", md: "-50%", lg: "-50%" },
                }}
                left="17%"
                prefix={
                  <Icon
                    name="Close"
                    color="danger800"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                Should only contain numbers
              </Notification>
            </Div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Home;
