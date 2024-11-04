import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/modal.css';

function AddPetModal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set image to base64 string
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/pets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    image, // The base64 string of the image
                    age,
                    weight,
                    location,
                }),
                credentials: "include",
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Pet berhasil dibuat!");
                setIsSuccess(true);
                setTimeout(() => {
                    onClose();
                    navigate("/pets");
                }, 1000);
            } else {
                setMessage(data.msg || "Pet gagal dibuat. Coba lagi.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error, coba lagi.");
            setIsSuccess(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Tambah Pet baru</h3>
                {message && <p className={isSuccess ? "success" : "error"}>{message}</p>} {/* Show message */}
                <form onSubmit={handleSubmit}>
                    {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                    <br />
                    <div className="form-group">
                        <label>Gambar:</label>
                        <input
                            type="text"
                            placeholder="Url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nama Peliharaan:</label>
                        <input
                            type="text"
                            placeholder="Nama"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Deskripsi:</label>
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Umur:</label>
                        <input
                            type="number"
                            placeholder="Umur"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Berat:</label>
                        <input
                            type="number"
                            placeholder="Berat"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Lokasi:</label>
                        <input
                            type="text"
                            placeholder="Lokasi"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className='btnContainer'>
                        <button type="submit">Tambah Pet</button>
                        <button type="button" onClick={onClose} className='closeBtn'>Batal</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPetModal;
