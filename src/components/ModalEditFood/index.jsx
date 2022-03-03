import { useState } from "react";

import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Input from "../Input";
import ReactModal from "react-modal";

export function ModalEditFood({ modalEditIsOpen, OpenEditModal, foods, food, handleEditFood }) {
  const [formData, setFormData] = useState(food);

  const handleChange = (e) => {
    setFormData({
      ...food,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateFood = { ...formData, id: food.id, available: true };
    const updateFoods = [...foods];
    const productIndex = updateFoods.findIndex((foods) => foods.id === food.id);
    updateFoods[productIndex] = updateFood;
    handleEditFood(updateFoods);
    OpenEditModal()
  };

  return (
    <ReactModal
      isOpen={modalEditIsOpen}
      onRequestClose={OpenEditModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={!false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h1>Editar Prato</h1>
        <Input name="image" defaultValue={food.image} onChange={handleChange} />

        <Input name="name" defaultValue={food.name} onChange={handleChange} />
        <Input name="price" defaultValue={food.price} onChange={handleChange} />

        <Input
          name="description"
          defaultValue={food.description}
          onChange={handleChange}
        />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </ReactModal>
  );
}
