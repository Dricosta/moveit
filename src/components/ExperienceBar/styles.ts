import styled from "styled-components";
import { grayLine, green, white } from "../../styles/colors";

interface ProgressLevelProps {
  Left: number;
}

interface ExperienceBarProgressProps {
  ProgressLevel: number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
`;

export const ExperienceBar = styled.header`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${grayLine};
  margin: 0 1.5rem;
  position: relative;
`;

export const MinExperienceLevel = styled.span`
  font-size: 1rem;
`;

export const ExperienceBarProgress = styled.div<ExperienceBarProgressProps>`
  height: 4px;
  border-radius: 4px;
  background: ${green};
  transition: width 0.5s ease-in-out;
  width: ${(props) => props.ProgressLevel && `${props.ProgressLevel}%`};
`;

export const ProgressLevel = styled.span<ProgressLevelProps>`
  position: absolute;
  top: 15px;
  transform: translateX(-50%);
  font-size: 0.8rem;
  transition: left 0.5s ease-in-out;
  left: ${(props) => props.Left && `${props.Left}%`};
  background: ${green};
  padding: 0.3rem 1rem;
  border-radius: 20px;
  color: ${white};
  width: 5rem;
  text-align: center;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background: ${green};
    display: block;
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-top-left-radius: 2px;
  }
`;

export const MaxExperienceLevel = styled.span`
  font-size: 1rem;
`;
