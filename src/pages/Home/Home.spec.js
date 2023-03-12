import React from 'react';
import { Home } from '.';
import { ModalProvider } from '../../Contexts/ModalContext';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const mountComponent = () => {
  render(
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
};

describe('home component', () => {
  mountComponent();
  it('test elements in scren', async () => {
    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');
    const registerBtn = screen.getByTestId('register-btn');

    fireEvent.change(inputName, { target: { value: 'Fernando' } });
    fireEvent.change(inputEmail, { target: { value: 'fernando@email.com' } });

    await waitFor(() => {
      fireEvent.click(registerBtn);
    });

    expect(screen.getByTestId('input-name')).not.toBeIntTheDocument();
    expect(screen.getByTestId('input-email')).not.toBeIntTheDocument();

    await waitFor(() => {
      const closeModalCouponBtn = screen.getByTestId('close-modal-coupon-btn');
      fireEvent.click(closeModalCouponBtn);
    });

    expect(screen.getByText('Produtos')).toBeIntTheDocument();
    expect(screen.getByText('Ganhar Cupom')).toBeIntTheDocument();
    expect(screen.getByText('Entre ou Cadastre-se')).toBeIntTheDocument();
  });

  it('test modal errors', async () => {
    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');

    fireEvent.change(inputName, { target: { value: '' } });

    await waitFor(() => {
      expect(
        screen.getByText('Este campo não pode estar vazio')
      ).toBeIntTheDocument();
    });

    fireEvent.change(inputEmail, { target: { value: 'fer' } });
    await waitFor(() => {
      expect(screen.getByText('Informe um e-mail válido')).toBeIntTheDocument();
    });
  });
});
