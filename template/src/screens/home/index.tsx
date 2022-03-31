import React from "react";
import { Container, Image, Text, TopBar, TopBarText } from "./styled";
import logo from "../../assets/svg/react.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <TopBarText>Welcome to my template!</TopBarText>
      </TopBar>
      <br />
      <Image src={logo} alt="react-logo" />
      <br />
      <Text>
        Start by editing the <strong>index.tsx </strong>
        in <strong>"src/screens/home"</strong>"
      </Text>
    </Container>
  );
};

export default Home;
