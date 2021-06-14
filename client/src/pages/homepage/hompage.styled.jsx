import styled from 'styled-components/macro';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export default HomePageContainer;
