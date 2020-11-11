import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export const RecSec = styled.div`
  color: #101522;
  padding: 20px 0;
  background: #fff;
`;

export const FormRow = styled.div`
  display: flex;
  margin: 20px -15px -15px -15px;
  flex-wrap: wrap;
`;

export const FormColumn = styled.div`
  background: ${({ darkBg }) => (darkBg ? "#101522" : "#fff")};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 20px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${({ lightTitle }) => (lightTitle ? "#fff" : "#101522")};
  text-align: center;
`;

export const Subtitle = styled.h2`
  color: ${({ lightTitle }) => (lightTitle ? "#0fb9b1" : "#101522")};
  text-align: center;
`;

export const Results = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border: 1px solid #0fb9b1;
  border-radius: 20px;
  padding: 10px;
`;

export const ResultTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
`;

export const ResultContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 10px;
  row-gap: 10px;
`;

export const ResultText = styled.h3`
  color: #fff;
  text-align: left;
`;

export const Progress = styled(CircularProgress)`
  && {
    color: #fff;
    position: absolute;
    margin-left: 10px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
