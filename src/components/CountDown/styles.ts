import styled from "styled-components";
import {
  blue,
  title,
  white,
  blueDark,
  red,
  text,
  textHighlight,
} from "../../styles/colors";

interface ButtonProps {
  active: boolean;
}

export const Countdown = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${title};
  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
  span {
    flex: 1;
  }
  span:first-child {
    border-right: 1px solid #f0f1f3;
  }
  span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${(props) => (props.active ? white : blue)};
  color: ${(props) => (props.active ? title : white)};
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s ease-in-out;
  outline-color: ${(props) => (props.active ? red : blue)};

  &:disabled {
    cursor: not-allowed;
    background: ${white};
    color: ${text};
  }

  &:not(:disabled):hover {
    background: ${(props) => (props.active ? red : blueDark)};
    color: ${(props) => props.active && white};
  }
`;

export const SettingsCount = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ButtonCount = styled.button`
  background: ${textHighlight};
  border: 0;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  color: ${white};
  outline: 0;
  font-size: 0.8rem;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
`;
