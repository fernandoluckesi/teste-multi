import React from 'react';
import {
  MainContainer,
  Price,
  ProductImage,
  Title,
  InstallmentInfo,
  AddToCartBtn,
} from './styles';
import PropTypes from 'prop-types';

export function ProductCard({
  name,
  price,
  numberOfInstallments,
  installmentValue,
  imageProductUrl,
}) {
  return (
    <MainContainer>
      <ProductImage src={imageProductUrl} alt={name} />
      <Title>{name} </Title>
      <Price> {price} </Price>
      <InstallmentInfo>
        ou {numberOfInstallments} x de {installmentValue}{' '}
      </InstallmentInfo>
      <AddToCartBtn>Adicionar</AddToCartBtn>
    </MainContainer>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  numberOfInstallments: PropTypes.number.isRequired,
  installmentValue: PropTypes.string.isRequired,
  imageProductUrl: PropTypes.string.isRequired,
};
