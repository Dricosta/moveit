import styled from "styled-components";
import { title } from "../../styles/colors";

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
  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${title};
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    img {
      margin-right: 0.5rem;
    }
  }
`;
