import styled from "styled-components";
import { title } from "../../styles/colors";

interface ProfileContentHeader {
  checkedSwitch: boolean;
}

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const ProfileContent = styled.div`
  margin-left: 1.5rem;
  width: 100%;
  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) =>
      props.theme.title === "light" ? title : props.theme.colors.text};
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    img {
      margin-right: 0.5rem;
    }
  }
`;

export const ProfileContentHeader = styled.div<ProfileContentHeader>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .switch {
    .react-switch-bg {
      border: 3px solid
        ${(props) => (props.checkedSwitch ? "#3c1e70" : "#d1d5da")};
      transition: none !important;
    }
    .react-switch-handle {
      width: 28px !important;
      height: 28px !important;
      top: -2px !important;
      transform: ${(props) =>
        props.checkedSwitch ? "translateX(18px)" : "translateX(0px)"}!important;
    }
  }
`;
