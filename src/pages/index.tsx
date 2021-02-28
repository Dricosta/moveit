import Head from "next/head";
import { GetServerSideProps } from "next";
import { Container } from "../styles/container";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import WrapperContent from "../styles/wrapperContent";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/CountDown";
import ChallengeBox from "../components/ChallengeBox";
import { CountdonwProvider } from "../contexts/CountdowContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdonwProvider>
          <WrapperContent>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </WrapperContent>
        </CountdonwProvider>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
