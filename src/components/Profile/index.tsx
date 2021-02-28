import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import * as S from "./styles";

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Profile>
      <S.ProfileImage
        src="https://github.com/Dricosta.png"
        alt="Adriano da Costa"
      />
      <S.ProfileContent>
        <strong>Adriano da Costa</strong>
        <p>
          <img src="/icons/level.svg" alt="icon up" />
          Level {level}
        </p>
      </S.ProfileContent>
    </S.Profile>
  );
}
