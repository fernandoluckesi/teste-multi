import styled from 'styled-components';
import LightboxRegister from '../../assets/images/Lightbox_Cadastro.png';

export const MainContainer = styled.div`
  align-items: center;
  background-color: rgba(32, 35, 42, 0.5);
  display: flex;
  justify-content: center;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const CloseModalBtn = styled.img`
  background-color: var(--background-light);
  border-radius: 50%;
  padding: 0.5rem;
  position: absolute;
  right: 12px;
  top: 58px;

  &:hover {
    cursor: pointer;
  }
`;

export const FormRegister = styled.form`
  align-items: flex-end;
  background-image: linear-gradient(#01acda, #46c0e5);
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 293px;
  position: absolute;
  top: 343px;
  width: 303px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const InputData = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
`;

export const InputErrorMsg = styled.small`
  bottom: -16px;
  color: var(--red);
  display: block;
  position: absolute;
`;

export const RegisterBtn = styled.button`
  background-color: var(--green);
  border: none;
  color: var(--text-light);
  font-size: 16px;
  padding: 8px;

  transition: filter 0.5s;
  width: 170px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
