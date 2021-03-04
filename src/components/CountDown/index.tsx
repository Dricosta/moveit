import React, { useContext } from "react";
import * as S from "./styles";
import { CountdownContext } from "../../contexts/CountdowContext";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
    setTime,
    setChoiceTime,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function handleSetTimeAndChoice(time: number) {
    setTime(time);
    setChoiceTime(time);
  }

  return (
    <React.Fragment>
      <S.SettingsCount>
        <S.ButtonCount onClick={() => handleSetTimeAndChoice(0.2 * 25)}>
          00:05
        </S.ButtonCount>
        <S.ButtonCount onClick={() => handleSetTimeAndChoice(0.75 * 60)}>
          00:45
        </S.ButtonCount>
        <S.ButtonCount onClick={() => handleSetTimeAndChoice(1 * 60)}>
          01:00
        </S.ButtonCount>
        <S.ButtonCount onClick={() => handleSetTimeAndChoice(2 * 60)}>
          02:00
        </S.ButtonCount>
        <S.ButtonCount onClick={() => handleSetTimeAndChoice(15 * 60)}>
          15:00
        </S.ButtonCount>
      </S.SettingsCount>

      <S.Countdown>
        <S.CountdownBox>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.CountdownBox>
        <span className="separator">:</span>
        <S.CountdownBox>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.CountdownBox>
      </S.Countdown>

      <S.Button
        disabled={hasFinished}
        onClick={isActive ? resetCountdown : startCountdown}
        type="button"
        active={isActive}
      >
        {isActive
          ? "Abandonar ciclo"
          : hasFinished
          ? "Ciclo encerrado"
          : "Iniciar um ciclo"}
      </S.Button>
    </React.Fragment>
  );
}
