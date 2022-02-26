import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';

export function Food () {
  const [isAvailable, setIsAvailable] = useState(true)


    return (
      <Container available={isAvailable}>
        <header>
          <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" alt="Ao molho" />
        </header>
        <section className="body">
          <h2>Ao molho</h2>
          <p>Macarrão ao molho branco, fughi e cheiro verde das montanhas</p>
          <p className="price">
            R$ <b>19.90</b>
          </p>
        </section>
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              // onClick={this.setEditingFood}
              // data-testid={`edit-food-${food.id}`}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              // onClick={() => handleDelete(food.id)}
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


export default Food;
