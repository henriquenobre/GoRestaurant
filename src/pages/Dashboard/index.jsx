import { useState } from 'react';

import { Header } from '../../components/Header';
import api from '../../services/api';
import {Food} from '../../components/Food';
import {ModalAddFood} from '../../components/ModalAddFood';
import {ModalEditFood} from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

export function Dashboard () {
  const [modalAddIsOpen, SetModalAddIsOpen] = useState(false)
  const [modalEditIsOpen, SetModalEditIsOpen] = useState(false)

  function OpenAddModal(){
    SetModalAddIsOpen((prevCheck) => !prevCheck)
  }

  function OpenEditModal(){
    SetModalEditIsOpen((prevCheck) => !prevCheck)
  }

    return (
      <>
        <Header OpenAddModal={OpenAddModal}/>
        <ModalAddFood modalAddIsOpen={modalAddIsOpen} OpenAddModal={OpenAddModal}/>
        <ModalEditFood modalEditIsOpen={modalEditIsOpen} OpenEditModal={OpenEditModal}/>

        <FoodsContainer data-testid="foods-list">
              <Food OpenEditModal={OpenEditModal}/>
        </FoodsContainer>
      </>
    );
  }