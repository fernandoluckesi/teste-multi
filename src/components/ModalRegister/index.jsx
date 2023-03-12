import React, { useContext, useState } from 'react';
import {
  CloseModalBtn,
  InputData,
  FormRegister,
  MainContainer,
  ModalContainer,
  RegisterBtn,
  InputErrorMsg,
  InputContainer,
} from './styles';
import LightboxRegister from '../../assets/images/Lightbox_Cadastro.png';
import LightboxCoupon from '../../assets/images/Lightbox_Cupom.png';

import CloseIcon from '../../assets/images/close-icon.png';
import { ModalContext } from '../../Contexts/ModalContext';

export function ModalRegister() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const [inputNameEmptyError, setInputNameEmptyError] = useState(false);
  const [inputEmailEmptyError, setInputEmailEmptyError] = useState(false);
  const [inputEmailInvalidError, setInputEmailInvalidError] = useState(false);

  const {
    setIsOpenRegisterModal,
    setIsOpenCouponModal,
    isOpenRegisterModal,
    isOpenCouponModal,
  } = useContext(ModalContext);

  const handleInputName = (value) => {
    setInputName(value);
    if (!value) {
      setInputNameEmptyError(true);
    } else {
      setInputNameEmptyError(false);
    }
  };

  const handleInputEmail = (value) => {
    setInputEmail(value);
    if (!value) {
      setInputEmailEmptyError(true);
      return;
    } else {
      setInputEmailEmptyError(false);
    }

    const emailValidate = value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!emailValidate) {
      setInputEmailInvalidError(true);
    } else {
      setInputEmailInvalidError(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (inputName && inputEmail && !inputEmailInvalidError) {
      setIsOpenRegisterModal(false);
      setIsOpenCouponModal(true);
    }

    if (!inputName) {
      setInputNameEmptyError(true);
    }
    if (!inputEmail) {
      setInputEmailEmptyError(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpenRegisterModal(false);
    setIsOpenCouponModal(false);
  };

  return (
    <MainContainer>
      {isOpenRegisterModal && (
        <ModalContainer className="modal-register">
          <img
            src={LightboxRegister}
            alt="formulário para cadastro"
            className="modal-image"
          />
          <CloseModalBtn
            src={CloseIcon}
            onClick={handleCloseModal}
            data-testid="close-modal-register-btn"
          />
          <FormRegister onSubmit={handleRegister}>
            <InputContainer>
              <InputData
                placeholder="Nome"
                value={inputName}
                onChange={(event) => handleInputName(event.target.value)}
                onBlur={(event) => handleInputName(event.target.value)}
                data-testid="input-name"
              />
              {inputNameEmptyError && (
                <InputErrorMsg>Este campo não pode estar vazio</InputErrorMsg>
              )}
            </InputContainer>
            <InputContainer>
              <InputData
                placeholder="Seu e-mail"
                value={inputEmail}
                onChange={(event) => handleInputEmail(event.target.value)}
                onBlur={(event) => handleInputEmail(event.target.value)}
                data-testid="input-email"
              />
              {inputEmailEmptyError && (
                <InputErrorMsg>Este campo não pode estar vazio</InputErrorMsg>
              )}
              {inputEmailInvalidError && (
                <InputErrorMsg>Informe um e-mail válido</InputErrorMsg>
              )}
            </InputContainer>
            <RegisterBtn type="submit" data-testid="register-btn">
              CADASTRE-SE
            </RegisterBtn>
          </FormRegister>
        </ModalContainer>
      )}
      {isOpenCouponModal && (
        <ModalContainer className="modal-coupon">
          <img
            src={LightboxCoupon}
            alt="formulário para cadastro"
            className="modal-image"
          />

          <CloseModalBtn
            src={CloseIcon}
            onClick={handleCloseModal}
            data-testid="close-modal-coupon-btn"
          />
        </ModalContainer>
      )}
    </MainContainer>
  );
}
