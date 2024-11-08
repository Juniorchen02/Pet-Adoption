// EditPetModal.js
import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

function EditPetModal({ isOpen, onClose, onEditPet, pet }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (pet) {
            setName(pet.name);
            setDescription(pet.description);
            setImage(pet.image);
            setAge(pet.age);
            setWeight(pet.weight);
            setLocation(pet.location);
        }
    }, [pet]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedPet = {
            uuid: pet.uuid,
            name,
            description,
            image,
            age,
            weight,
            location,
        };

        onEditPet(updatedPet);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Edit Pet</h3>
                <form onSubmit={handleSubmit}>
                    {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                    <div className="form-group">
                        <label>Gambar:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nama Peliharaan:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Deskripsi:</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Usia:</label>
                        <input
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Berat:</label>
                        <input
                            type="text"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Lokasi:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Update</button>
                    <button type="button" onClick={onClose} className='closeBtn'>Batal</button>
                </form>
                {message && <div className={`notification ${isSuccess ? 'success' : 'error'}`}>{message}</div>}
            </div>
        </div>
    );
}

export default EditPetModal;
