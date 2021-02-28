import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";
import { CountdownContext } from "../../contexts/CountdowContext";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <S.ChallengeBox>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.Button
              onClick={handleChallengeFailed}
              type="button"
              failedButton
            >
              Falhei
            </S.Button>
            <S.Button
              onClick={handleChallengeSucceeded}
              type="button"
              succeededButton
            >
              Completei
            </S.Button>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengNotActive>
      )}
    </S.ChallengeBox>
  );
}
