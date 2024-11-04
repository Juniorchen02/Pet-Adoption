import Pets from "../models/PetModel.js";

export const getPets = async (req, res) => {
    try {
        const pets = await Pets.findAll();
        const petsWithImages = pets.map(pet => ({
            ...pet.toJSON(),
        }));
        res.status(200).json(petsWithImages);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pets', error: error.message });
    }
};



export const getPetById = async (req, res) => {
    try {
        const response = await Pets.findOne({
            attributes: ['uuid', 'name', 'description', 'image', 'age', 'weight', 'location'],
            where: {
                uuid: req.params.id
            }
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPet = async (req, res) => {
    const { name, description, image, age, weight, location } = req.body;

    try {
        await Pets.create({
            name: name,
            description: description,
            image: image, // Save as a buffer if you're using BLOB
            age: age,
            weight: weight,
            location: location
        });
        res.status(201).json({ msg: "Pet berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};



export const updatePet = async (req, res) => {
    const pet = await Pets.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!pet) return res.status(404).json({ msg: "Pet tidak ditemukan" });
    const { name, description, image, age, weight, location } = req.body;

    try {
        await Pets.update({
            name: name,
            description: description,
            image: image,
            age: age,
            weight: weight,
            location: location
        }, {
            where: {
                id: pet.id
            }
        });
        res.status(200).json({ msg: "Pet Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deletePet = async (req, res) => {
    const pet = await Pets.findOne({
        where: {
            uuid: req.params.id
        },


    });
    console.log(pet)
    if (!pet) return res.status(404).json({ msg: "Pet not found" });
    try {
        await Pets.destroy({
            where: {
                id: pet.id
            }
        });
        res.status(200).json({ msg: "Pet Deleted" });
    } catch (error) {
        console.error(error); // Log error untuk debugging
        res.status(400).json({ msg: error.message });
    }
}


export const getPetTypes = async (req, res) => {
    try {
        const pets = await Pets.findAll({
            attributes: ['name'],
            group: ['name'] // Pastikan untuk mengelompokkan berdasarkan nama
        });
        const petTypes = pets.map(pet => pet.name);
        res.status(200).json(petTypes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pet types', error: error.message });
    }
};
