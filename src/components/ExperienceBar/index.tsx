import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.Container>
      <S.MinExperienceLevel>0 xp</S.MinExperienceLevel>

      <S.ExperienceBar>
        <S.ExperienceBarProgress ProgressLevel={percentToNextLevel} />

        <S.ProgressLevel Left={percentToNextLevel}>
          {currentExperience} xp
        </S.ProgressLevel>
      </S.ExperienceBar>
      <S.MaxExperienceLevel>{experienceToNextLevel} xp</S.MaxExperienceLevel>
    </S.Container>
  );
}

export default ExperienceBar;
