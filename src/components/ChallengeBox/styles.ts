import styled from "styled-components";
import { white, blue, grayLine, title, red, green } from "../../styles/colors";

interface ButtonProps {
  failedButton?: boolean;
  succeededButton?: boolean;
}

export const ChallengeBox = styled.div`
  height: 100%;
  background: ${(props) =>
    props.theme.title === "light" ? white : props.theme.colors.background};
  border: ${(props) => props.theme.title === "dark" && "1px solid #30363d"};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }
`;

export const ChallengNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${(props) => (props.theme.title === "light" ? blue : "#58a6ff")};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      @media screen and (max-width: 992px) {
        margin: 2rem 1.5rem 0;
      }
    }
    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) =>
        props.theme.title === "light" ? title : props.theme.colors.text};
      margin: 1.5rem 0 1rem;
    }
    p {
      line-height: 1.5;
      color: ${(props) => props.theme.colors.text};
      @media screen and (max-width: 992px) {
        margin: 1.5rem 0;
      }
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: ${white};
  font-size: 1rem;
  font-weight: 600;
  background: ${(props) => (props.failedButton ? red : green)};
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
`;
