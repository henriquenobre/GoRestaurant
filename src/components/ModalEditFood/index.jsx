import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Input from '../Input';
import ReactModal from 'react-modal';


export function ModalEditFood({ modalEditIsOpen, OpenEditModal }) {

    return (
        <ReactModal
            isOpen={modalEditIsOpen}
            onRequestClose={OpenEditModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={!false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#F0F0F5',
                    color: '#000000',
                    borderRadius: '8px',
                    width: '736px',
                    border: 'none',
                },
                overlay: {
                    backgroundColor: '#121214e6',
                },
            }}>
            <Form nitialData="">
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />

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

