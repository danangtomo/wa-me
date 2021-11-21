import React, { useState, useEffect } from "react";
import { IoMoon, IoPartlySunny } from "react-icons/io5";
import UseLocalStorageState from "../util/customHooks/useLocalStorageState";
import Theme from "../util/customStyle/customStyle";
import DropdownMenu from "../components/DropdownMenu";
import InputValue from "../components/Input";
import {
  StyleReset,
  ThemeProvider,
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
  const c = code?.substring(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [dangerLight, setDangerLight] = useState(false);
  const [modeClick, setModeClick] = useState(false);
  const [mode, setMode] = UseLocalStorageState("mode", "lightMode");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const toggleMode = () => {
    setModeClick(!modeClick);
    setMode(modeClick ? "lightMode" : "darkMode");
  };

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
      <ThemeProvider theme={Theme}>
        <Div
          pos="relative"
          w="100vw"
          maxH={{ xs: "100vh", md: "100vh" }}
          h="100vh"
          bg={mode === "darkMode" && "darkBody"}
        >
          <Col
            h={{ xs: "8vh", md: "5vh" }}
            w={{ xs: "20vw", md: "10vh" }}
            pos="absolute"
            top="10%"
            left="90%"
            transform="translate(-70%, -50%)"
          >
            <Button
              h="100%"
              w="100%"
              onClick={toggleMode}
              bg={mode === "lightMode" ? "black900" : "gray400"}
              hoverBg={mode === "lightMode" ? "black700" : "gray200"}
              textColor={mode === "lightMode" ? "white" : "warning700"}
              rounded="lg"
              m={{ r: "1rem" }}
            >
              {mode === "darkMode" ? (
                <IoPartlySunny size="90%" />
              ) : (
                <IoMoon size="90%" />
              )}
            </Button>
          </Col>
          <Col
            rounded="lg"
            minW={{ xs: "90%", md: "40%" }}
            bg={mode === "darkMode" ? "darkContainerCard" : "gray200"}
            shadow="4"
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Row p={{ y: "1rem" }}>
              <Col size="12">
                <Text
                  textColor={mode === "darkMode" && "darkBlueColor"}
                  textWeight="700"
                  textAlign="center"
                  textSize="title"
                  fontFamily="code"
                  m={{ b: "30px" }}
                >
                  Send WhatsApp without saving the number ?
                </Text>
                <DropdownMenu
                  countryCode={getCountryCode}
                  customStyles={mode === "darkMode" ? true : false}
                />
                <InputValue
                  valNum={getPhoneNumber}
                  //bg={mode === "darkMode" && "darkInputField"}
                  //textColor={mode === "darkMode" && "darkColor"}
                />
                <Button
                  m={{ t: "1rem" }}
                  w="100%"
                  fontFamily="code"
                  onClick={sendText}
                  disabled={phoneNumber?.length > 3 ? false : true}
                  bg={mode === "darkMode" ? "darkBlueColor" : "black900"}
                  prefix={
                    <Icon
                      name={isClick ? "Loading" : "MessageSolid"}
                      pos="absolute"
                      top="50%"
                      left="1rem"
                      color="white"
                      transform="translateY(-50%)"
                      size="18px"
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
        </Div>
      </ThemeProvider>
    </>
  );
};

export default Home;
