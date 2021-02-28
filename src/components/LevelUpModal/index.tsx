import React, { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

export function LevelUpModal() {
  const {
    level,
    closeLevelUpModal,
    isLevelUpModalOpen,
    handleAnimateModal,
    animateModal,
  } = useContext(ChallengesContext);

  useEffect(() => {
    if (isLevelUpModalOpen) {
      handleAnimateModal();
    }
  }, [isLevelUpModalOpen]);

  return (
    <S.Overlay>
      <S.Modal moveDown={animateModal}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Modal>
    </S.Overlay>
  );
}
