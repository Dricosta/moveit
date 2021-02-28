import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.CompletedChallenges>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.CompletedChallenges>
  );
}
