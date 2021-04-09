import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  childrenToggle,
  menToggle,
  setFilter,
  toggleFilter,
  womenToggle,
} from "../features/cart/cartSlice";

const Wrapper = styled.div`
  padding: 4em 0 4em 0;
  background-color: #f5f6f7;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const ToggleSection = styled.div`
  display: flex;
  font-weight: bold;
  & > div {
    padding: 0 2em 0 0;
  }
`;

const SpanLabel = styled.span`
  padding-left: 0.5em;
`;

const Button = styled.button`
  padding: 1em 3em 1em 3em;
  text-transform: uppercase;
  background-color: #aa9b77;
  border: none;
  font-weight: bold;
  border-radius: 3px;
  color: white;
`;

export default function Filter() {
  const toggleAll = () => {
    dispatch(setFilter("men"));
    dispatch(setFilter("women"));
    dispatch(setFilter("children"));
  };

  const dispatch = useDispatch();

  const ChkMen = useSelector(menToggle);
  const ChkWomen = useSelector(womenToggle);
  const ChkChildren = useSelector(childrenToggle);

  return (
    <Wrapper>
      <Container>
        <Content>
          <ToggleSection>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ChkMen}
                  onChange={() => {
                    dispatch(toggleFilter("men"));
                  }}
                />
                <SpanLabel>Men</SpanLabel>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ChkWomen}
                  onChange={() => {
                    dispatch(toggleFilter("women"));
                  }}
                />
                <SpanLabel>Women</SpanLabel>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ChkChildren}
                  onChange={() => {
                    dispatch(toggleFilter("children"));
                  }}
                />
                <SpanLabel>children</SpanLabel>
              </label>
            </div>
          </ToggleSection>
          <Button onClick={toggleAll}>See all products</Button>
        </Content>
      </Container>
    </Wrapper>
  );
}
