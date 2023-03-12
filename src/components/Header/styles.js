import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--background-light);
  width: 100%;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  padding: 16px 32px;
`;

export const CartAndLinks = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
`;

const modalMobileOpen = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  70% {
    transform: translate(0, -5%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Links = styled.ul`
  align-items: center;
  display: flex;
  gap: 24px;
  z-index: 1;

  li {
    list-style: none;
  }

  a {
    color: var(--text-gray);
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: var(--text-gray);
    font-size: 1rem;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }

  @media (max-width: 1000px) {
    background-color: var(--background-light);
    bottom: 0;
    border-radius: 30px 30px 0 0;
    flex-direction: column;
    gap: 32px;
    left: 0;
    margin: 0;
    padding: 64px 0 40px;
    position: fixed;
    transition: transform 0.3s;
    width: 100vw;

    animation: ${modalMobileOpen} 0.6s;
    ${({ $drawerTransition }) =>
      !$drawerTransition && `transform: translate(0, 100%);`}

    li {
      margin-left: 0;
    }

    button {
      background-color: var(--blue);
      border-radius: 2rem;
      color: var(--text-light);
      padding: 1rem 0;
      transition: filter 0.2s;
      width: 265px;
      &:hover {
        color: var(--text-light);
        cursor: pointer;
        filter: brightness(0.9);
      }
    }

    button > span {
      font-weight: var(--fontWeightSemiBold);
    }
  }
`;

export const CloseBtn = styled.img`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    margin: 32px 32px 0 0;
    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuBtnMobile = styled.div`
  display: none;
  width: 32px;

  @media (max-width: 1000px) {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Logo = styled.img``;
