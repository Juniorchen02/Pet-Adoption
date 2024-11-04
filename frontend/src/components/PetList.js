import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/modal.css';

const PetList = ({ pets, onPetClick, onEditPet, onDeletePet }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    const handleDeleteClick = (pet) => {
        setSelectedPet(pet);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedPet) {
            onDeletePet(selectedPet.uuid);
        }
        setIsModalOpen(false);
        setSelectedPet(null);
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
    };

    return (
        <div className="container">
            {pets.length === 0 ? (
                <p>No pets found.</p>
            ) : (
                pets.map((pet) => (
                    <div key={pet.uuid} className="pet-card" onClick={() => onPetClick(pet)}>
                        <img src={pet.image} alt={pet.name} style={{ width: '100%', height: 'auto' }} />
                        <div className="pet-info">
                            <h3>{pet.name}</h3>
                            <p>{pet.description}</p>
                        </div>
                        <div className="pet-card-buttons">
                            <button onClick={(e) => { e.stopPropagation(); onEditPet(pet); }} className="icon-button">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); handleDeleteClick(pet); }} className="icon-button">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))
            )}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Konfirmasi Penghapusan</h2>
                        <p>Apakah Anda yakin ingin menghapus pet "{selectedPet ? selectedPet.name : ''}"?</p>
                        <button onClick={handleConfirmDelete} className='confirm-button'>Ya</button>
                        <button onClick={handleCancelDelete} className='closeBtn'>Tidak</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetList;
