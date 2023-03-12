import React, { useContext, useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { ModalRegister } from '../../components/ModalRegister';
import { ModalContext } from '../../Contexts/ModalContext';
import { ContentContainer, CountProdutsText, ProductsList } from './styles';
import { ProductCard } from '../../components/ProductCard';

export function Home() {
  const { isOpenRegisterModal, isOpenCouponModal } = useContext(ModalContext);

  const productsMock = [
    {
      id: 1,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 2,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 3,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 4,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 5,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 6,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 7,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 8,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 9,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
    {
      id: 10,
      name: 'Combo Casa - Smart Tela DLED 50 4K Multi e Air Fryer 3,5 L Temp. até 200°C, 1.500 W e 127V Preto - CE198K',
      price: 'R$ 2.359,12',
      numberOfInstallments: 12,
      installmentValue: 'R$ 283,25',
      imageProductUrl:
        'https://lojamultilaser.vteximg.com.br/arquivos/ids/439899-250-250/TL032M---CE198.jpg?v=638036896225070000',
    },
  ];

  return (
    <MainTemplate>
      <ContentContainer>
        <CountProdutsText>
          <span>{productsMock.length}</span> Produtos encontrados:
        </CountProdutsText>
        <ProductsList>
          {productsMock.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                numberOfInstallments={product.numberOfInstallments}
                installmentValue={product.installmentValue}
                imageProductUrl={product.imageProductUrl}
              />
            );
          })}
        </ProductsList>
      </ContentContainer>
      {(isOpenRegisterModal || isOpenCouponModal) && <ModalRegister />}
    </MainTemplate>
  );
}
