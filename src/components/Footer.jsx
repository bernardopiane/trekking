import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #424242;
  padding: 4em 0 4em 0;
  color: white;
`;

const MyRow = styled(Row)`
  align-items: center;
`;

const MyCol = styled(Col)`
  justify-content: space-between;
  padding: 1em 0 1em 0;
  text-align: ${(props) => (props.inverted ? "right" : "left")};
`;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Link = styled.a`
  color: white;
  :hover {
    color: #b4b4b4;
    text-decoration: none;
  }
  &:not(:last-child) {
    ::after {
      content: "";
      border-left: 1px solid #aa9b77;
      margin: 1em;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <MyRow>
          <MyCol xs={12} lg={4}>
            <div>Trekking</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad
              dolore ex nemo animi labore quasi, aliquam obcaecati alias
              exercitationem saepe. Sequi, repellat laborum distinctio ducimus
              minus ipsam iste quae!
            </div>
          </MyCol>
          <MyCol xs={12} lg={4} inverted>
            <LinkArea>
              <Link href="#!">Credits</Link>
              <Link href="#!">Privary</Link>
              <Link href="#!">About</Link>
              <Link href="#!">Contact</Link>
            </LinkArea>
            <div>Design by gianluca cosetta</div>
          </MyCol>
        </MyRow>
      </Container>
    </Wrapper>
  );
}
