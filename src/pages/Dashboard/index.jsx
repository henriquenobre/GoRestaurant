import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import api from "../../services/api";
import { Food } from "../../components/Food";
import { ModalAddFood } from "../../components/ModalAddFood";
import { FoodsContainer } from "./styles";

export function Dashboard() {
  const [foods, setFoods] = useState([]);
  const [modalAddIsOpen, SetModalAddIsOpen] = useState(false);
  
  //recebe os dados dos pratos pela api
  useEffect(() => {
    async function loadFoods() {
      await api.get("foods").then((response) => setFoods(response.data));
    }

    loadFoods();
  }, []);

  //abrir e fechar modal
  function OpenAddModal() {
    SetModalAddIsOpen((prevCheck) => !prevCheck);
  }

  //adciona novo prato atraves de dados vindos da modal add foods
  function handleAddFood(updateFoods) {
    setFoods(updateFoods);
  }

  //deleta os pratos 
  function handleDeleteFood(foodId) {
    try {
      const updateFood = [...foods];
      const productIndex = updateFood.findIndex((foods) => foods.id === foodId);

      if (productIndex >= 0) {
        updateFood.splice(productIndex, 1);
        setFoods(updateFood);
      } else {
        throw Error();
      }
    } catch {
      alert("Erro na remoção do produto");
    }
  }

  function handleEditFood(updateFoods){
    setFoods(updateFoods);
  }

  return (
    <>
      <Header OpenAddModal={OpenAddModal} />
      <ModalAddFood
        handleAddFood={handleAddFood}
        foods={foods}
        modalAddIsOpen={modalAddIsOpen}
        OpenAddModal={OpenAddModal}
      />
      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food
              key={food.id}
              foods={foods}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}
