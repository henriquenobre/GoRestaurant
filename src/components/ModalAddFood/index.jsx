import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Input from "../Input";
import ReactModal from "react-modal";
import { useState } from "react";

export function ModalAddFood({ OpenAddModal, modalAddIsOpen, foods, handleAddFood }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateFoods = [...foods, { ...formData, id: foods.length + 1, available: true }];
    handleAddFood(updateFoods);
    OpenAddModal()
  };

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={OpenAddModal}
      isOpen={modalAddIsOpen}
      ariaHideApp={false}
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
        <h1>Novo Prato</h1>
        <Input
          onChange={handleChange}
          name="image"
          placeholder="Cole o link aqui"
        />

        <Input
          onChange={handleChange}
          name="name"
          placeholder="Ex: Moda Italiana"
        />
        <Input onChange={handleChange} name="price" placeholder="Ex: 19.90" />

        <Input
          onChange={handleChange}
          name="description"
          placeholder="Descrição"
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </ReactModal>
  );
}
