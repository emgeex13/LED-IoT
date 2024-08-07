// src/LedControl.js
import React, { useState } from 'react';
import './LedControl.css';

const LedControl = () => {
    // State variables to track the state of each LED
    const [led1, setLed1] = useState(0);
    const [led2, setLed2] = useState(0);
    const [led3, setLed3] = useState(0);

    const updateLed = (field1, field2, field3) => {
        const url = `https://api.thingspeak.com/update?api_key=FDMQI1A86ZAYI05P&field1=${field1}&field2=${field2}&field3=${field3}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('LED state updated:', data);
            })
            .catch(error => {
                console.error('Error updating LED state:', error);
            });
    };
    const toggleAll = () => {
        if (led1 === 0 && led2 === 0 && led3 === 0) {
            setLed1(1);
            setLed2(1);
            setLed3(1);
            updateLed(1, 1, 1);

        }
        else if (led1 === 1 || led2 === 1 || led3 === 1) {
            setLed1(0);
            setLed2(0);
            setLed3(0);
            updateLed(0, 0, 0);
        }
    }

    const toggleLed1 = () => {
        const newLed1 = led1 === 0 ? 1 : 0;
        setLed1(newLed1);
        updateLed(newLed1, led2, led3);
    };

    const toggleLed2 = () => {
        const newLed2 = led2 === 0 ? 1 : 0;
        setLed2(newLed2);
        updateLed(led1, newLed2, led3);
    };

    const toggleLed3 = () => {
        const newLed3 = led3 === 0 ? 1 : 0;
        setLed3(newLed3);
        updateLed(led1, led2, newLed3);
    };

    return (
        <div>
            <h1>LED Control</h1>
            <button
                className={led1 === 1 ? 'led-on-green' : 'led-off'}
                onClick={toggleLed1}
            >
                LED 1 is {led1 === 1 ? 'On' : 'Off'}
            </button>
            <button
                className={led2 === 1 ? 'led-on-red' : 'led-off'}
                onClick={toggleLed2}
            >
                LED 2 is {led2 === 1 ? 'On' : 'Off'}
            </button>
            <button
                className={led3 === 1 ? 'led-on-blue' : 'led-off'}
                onClick={toggleLed3}
            >
                LED 3 is {led3 === 1 ? 'On' : 'Off'}
            </button>
            <button onClick={() => toggleAll}>Turn all LEDs on/off</button>
        </div>
    );
};

export default LedControl;
