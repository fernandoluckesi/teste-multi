import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  border: 1px solid var(--gray);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem;
  width: 210px;

  &:hover {
    border-color: var(--shape);
    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  width: 148px;
`;

export const Title = styled.h3`
  color: var(--text-gray);
  font-size: 0.8rem;
  font-weight: var(--fontWeightBold);
  margin: 5px 0;
  text-align: center;
`;

export const Price = styled.p`
  color: var(--blue);
  font-size: 1.2rem;
  line-height: 120%;
`;

export const InstallmentInfo = styled.p`
  color: var(--text-gray);
  font-size: 0.8rem;
  line-height: 0.9rem;
  margin: 5px 0;
`;

export const AddToCartBtn = styled.button`
  background-color: transparent;
  border: 1px solid var(--blue);
  border-radius: 2rem;
  color: var(--blue);
  font-weight: var(--fontWeightBold);
  padding: 0.5rem 2rem;

  &:hover {
    background-color: var(--blue);
    color: var(--text-light);
    cursor: pointer;
  }
`;
