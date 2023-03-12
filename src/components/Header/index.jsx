import React, { useState, useCallback, useContext } from 'react';
import {
  Links,
  MainContainer,
  Nav,
  CloseBtn,
  MenuBtnMobile,
  CartAndLinks,
} from './styles';
import CloseIcon from '../../assets/images/close-icon.png';
import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';
import { MultiIcon } from '../MultiIcon';
import { CartIcon } from '../CartIcon';
import { MenuIcon } from '../MenuIcon';
import { ModalContext } from '../../Contexts/ModalContext';

export function Header() {
  const [drawerTransition, setDrawerTransition] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const isMobile = useMedia('(max-width: 1000px)');

  const { setIsOpenRegisterModal } = useContext(ModalContext);

  const handleOpenRegisterModal = () => {
    setIsOpenRegisterModal(true);
  };

  const handleCloseDrawer = useCallback(() => {
    setDrawerTransition(false);

    setTimeout(() => {
      setIsOpenDrawer(false);
    }, 300);
  }, [setIsOpenDrawer]);

  const handleOpenDrawer = () => {
    if (isOpenDrawer) {
      handleCloseDrawer();
    } else {
      setIsOpenDrawer(true);
      setDrawerTransition(true);
    }
  };

  return (
    <MainContainer>
      <Nav>
        <MenuBtnMobile onClick={handleOpenDrawer}>
          <MenuIcon />
        </MenuBtnMobile>
        <Link to={'/'}>
          <MultiIcon />
        </Link>
        <CartAndLinks>
          {(isOpenDrawer || !isMobile) && (
            <Links $drawerTransition={drawerTransition}>
              <CloseBtn src={CloseIcon} onClick={handleCloseDrawer} />
              <li>
                <a href="/">Produtos</a>
              </li>
              <li>
                <button onClick={handleOpenRegisterModal}>Ganhar cupom</button>
              </li>
              <li>
                <button>
                  <span>Entre ou</span> Cadastre-se
                </button>
              </li>
            </Links>
          )}
          <CartIcon />
        </CartAndLinks>
      </Nav>
    </MainContainer>
  );
}
