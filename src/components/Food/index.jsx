import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import { ModalEditFood } from "../../components/ModalEditFood";


export function Food ({foods, food, handleDelete, handleEditFood}) {
  const [isAvailable, setIsAvailable] = useState(true)
  const [modalEditIsOpen, SetModalEditIsOpen] = useState(false);

  function OpenEditModal() {
    SetModalEditIsOpen((prevCheck) => !prevCheck);
  }


    return (
      <Container available={isAvailable}>
         <ModalEditFood
        modalEditIsOpen={modalEditIsOpen}
        OpenEditModal={OpenEditModal}
        foods={foods}
        food={food}
        handleEditFood={handleEditFood}
      />
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </section>
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              onClick={OpenEditModal}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              onClick={()=>handleDelete(food.id)}
              // data-testid={`remove-food-${food.id}`}
            >
              <FiTrash size={20} />
            </button>
          </div>

          <div className="availability-container">
            <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

            <label className="switch">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={() => setIsAvailable((prevCheck) => !prevCheck)}
              />
              <span className="slider" />
            </label>
          </div>
        </section>
      </Container>
    );
  }


