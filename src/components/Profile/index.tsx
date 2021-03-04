import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { ThemeContextApp } from "../../contexts/ThemeContext";
import Switch from "react-switch";
import * as S from "./styles";
import { ThemeContext } from "styled-components";
import { background } from "../../styles/colors";

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  const { toggleTheme } = useContext(ThemeContextApp);
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Profile>
      <S.ProfileImage
        src="https://github.com/Dricosta.png"
        alt="Adriano da Costa"
      />
      <S.ProfileContent>
        <S.ProfileContentHeader checkedSwitch={title === "dark"}>
          <strong>Adriano da Costa</strong>
          <Switch
            onChange={() => toggleTheme()}
            checked={title === "dark"}
            offHandleColor="#2f363d"
            onHandleColor="#6e40c9"
            onColor="#271052"
            offColor={background}
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={42}
            handleDiameter={20}
            className="switch"
            activeBoxShadow={null}
            checkedHandleIcon={
              <svg
                style={{
                  fill: "#f8e3a1",
                  margin: "7px 0 0 7px",
                }}
                aria-hidden="true"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
                ></path>
              </svg>
            }
            uncheckedHandleIcon={
              <svg
                style={{
                  fill: "#ffdf5d",
                  margin: "7px 0 0 7px",
                }}
                aria-hidden="true"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
                ></path>
              </svg>
            }
          />
        </S.ProfileContentHeader>

        <p>
          <img src="/icons/level.svg" alt="icon up" />
          Level {level}
        </p>
      </S.ProfileContent>
    </S.Profile>
  );
}
