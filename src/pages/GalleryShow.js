import React from 'react';
import '../styles/galleryshowcase.css';

const cardData = [
    { id: 'c1', icon: '1', title: 'Cat', description: 'Cats are popular pets due to their independent and caring.' },
    { id: 'c2', icon: '2', title: 'Dog', description: 'Dogs are extremely loyal and have unique characteristics.' },
    { id: 'c3', icon: '3', title: 'Bird', description: 'Birds are cheerful and colorful pets.' },
    { id: 'c4', icon: '4', title: 'Rabbit', description: 'Rabbits are gentle and social pets.', checked: true },
    { id: 'c5', icon: '5', title: 'Hamster', description: 'Hamsters are cute little animals and love playing.' },
    { id: 'c6', icon: '6', title: 'Monkey', description: 'Monkeys are intelligent and social animals.' },
    { id: 'c7', icon: '7', title: 'Squirrel', description: 'Squirrels are small, agile and often seen in parks.' },
];

const Gallery = () => {
    return (
        <section className='gallery-showcase'>
            <h4 className='h4-text-showcase'>Meet the Pets you loved!</h4>
            <div className='wrapper-showcase'>
                {cardData.map(card => (
                    <div className='container-showcase' key={card.id}>
                        <input className="radio-showcase "type='radio' name='slide' id={card.id} defaultChecked={card.checked} />
                        <label htmlFor={card.id} className='card-showcase'>
                            <div className='row-showcase'>
                                <div className='icon-showcase'>{card.icon}</div>
                                <div className='description-showcase'>
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
