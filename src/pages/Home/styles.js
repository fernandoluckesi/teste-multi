import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 4rem 2rem;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }
`;

export const CountProdutsText = styled.p`
  font-size: 1.6rem;
  font-weight: var(--fontWeightBold);

  span {
    color: var(--blue);
    font-size: 2rem;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;
