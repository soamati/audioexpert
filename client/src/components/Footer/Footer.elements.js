import styled from "styled-components";
import { Link } from "react";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 24px;
  padding: 24px;
`;

export const FooterText = styled.h3`
  color: ${({ white }) => (white ? "#fff" : "#0fb9b1")};
`;

export const GitIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 40px;
`;

export const SourceCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
