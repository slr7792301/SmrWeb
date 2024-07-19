import React, { useState } from 'react';
import sample_1 from './img/sample1.png'
import sample_2 from './img/sample2.png'
import sample_3 from './img/sample3.png'
import sample_4 from './img/sample4.png'
import sample_5 from './img/sample5.png'

export default function ImageSwitcher() {
    const images = [sample_1, sample_2, sample_3, sample_4, sample_5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={images[currentIndex]} alt={`圖片 ${currentIndex + 1}`} />
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={handlePrevious}>❮</button>　　
                <button onClick={handleNext}>❯</button>
            </div>
        </div>
    );
}
