import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(true);
  const [isOpenCouponModal, setIsOpenCouponModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpenRegisterModal,
        setIsOpenRegisterModal,
        isOpenCouponModal,
        setIsOpenCouponModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
