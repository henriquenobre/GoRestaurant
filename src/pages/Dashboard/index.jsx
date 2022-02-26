import { useState } from 'react';

import { Header } from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

export function Dashboard () {
  

    return (
      <>
        <Header />
        <ModalAddFood />
        <ModalEditFood />

        <FoodsContainer data-testid="foods-list">
              <Food />
        </FoodsContainer>
      </>
    );
  }

