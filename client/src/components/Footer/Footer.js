import React from "react";
import {
  FooterContainer,
  FooterRow,
  FooterTextWrapper,
  FooterText,
  GitIcon,
  SourceCode,
} from "./Footer.elements";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterTextWrapper>
          <FooterText white>Ingeniería del Conocimiento</FooterText>
          <FooterText white>Facultad de Ingeniería</FooterText>
          <FooterText white>UNJu</FooterText>
          <FooterText white>2020</FooterText>
        </FooterTextWrapper>
        <FooterTextWrapper>
          <FooterText white>Grupo 8</FooterText>
          <FooterText>Eduardo Albornoz</FooterText>
          <FooterText>Sergio Gamarra</FooterText>
          <FooterText>Matias Jurado</FooterText>
          <FooterText>Matias Ruiz</FooterText>
          <FooterText>Damaris Silva</FooterText>
        </FooterTextWrapper>
      </FooterRow>
      <FooterRow>
        <SourceCode>
          <GitIcon
            href={"https://github.com/soamati/audioexpert"}
            target="_blank"
          >
            <GoMarkGithub />
          </GitIcon>
          <FooterText white>Código Fuente</FooterText>
        </SourceCode>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
