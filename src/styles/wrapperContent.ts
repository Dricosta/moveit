import styled from "styled-components";

const WrapperContent = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  }
`;

export default WrapperContent;
