import styled from "styled-components";
import { white, blue, title, text } from "../../styles/colors";

interface modalProps {
  moveDown: boolean;
}

export const Overlay = styled.div`
  background: ${(props) =>
    props.theme.title === "light" ? "rgba(242, 243, 245, 0.8)" : "#18191bcc"};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div<modalProps>`
  background: ${white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.moveDown ? "translateY(0%)" : "translateY(-100%)"};
  opacity: ${(props) => (props.moveDown ? "1" : "0")};

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${blue};
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${title};
  }

  p {
    font-size: 1.25rem;
    color: ${text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;
