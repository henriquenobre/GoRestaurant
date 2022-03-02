import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import api from '../../services/api';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

export function Dashboard() {
  const [foods, setFoods] = useState([])
  const [modalAddIsOpen, SetModalAddIsOpen] = useState(false)
  const [modalEditIsOpen, SetModalEditIsOpen] = useState(false)

  useEffect(() => {
    async function loadFoods() {
      await api
        .get("foods")
        .then((response) => setFoods(response.data));
    }

    loadFoods();
  }, []);

  function OpenAddModal() {
    SetModalAddIsOpen((prevCheck) => !prevCheck)
  }

  function OpenEditModal() {
    SetModalEditIsOpen((prevCheck) => !prevCheck)
  }

  function handleDeleteFood(foodId) {
    try {
      const updateFood = [...foods]
      const productIndex = updateFood.findIndex(foods => foods.id === foodId)

      if (productIndex >= 0) {
        updateFood.splice(productIndex, 1)
        setFoods(updateFood)
      } else {
        throw Error()
      }
    } catch {
      alert('Erro na remoção do produto');
    }
  };


  return (
    <>
      <Header OpenAddModal={OpenAddModal} />
      <ModalAddFood modalAddIsOpen={modalAddIsOpen} OpenAddModal={OpenAddModal} />
      <ModalEditFood modalEditIsOpen={modalEditIsOpen} OpenEditModal={OpenEditModal} />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
            // handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}