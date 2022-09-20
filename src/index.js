import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Info() {
    const [name, setName] = useState('y');
    const [luckyNumber, setLuckyNumber] = useState(~~(Math.random() * 100));
    const [count, setCount] = useState(1)

    const nameRef = useRef()
    const numRef = useRef()
    const countRef = useRef()


    useEffect(() => {
        const nameElement = nameRef.current;
        const numElement = numRef.current;
        const changesElement = countRef.current;
        nameElement.textContent = name;
        numElement.textContent = luckyNumber;
        changesElement.textContent = count;
    })


    function changeName() {
        setName(name + 'y')
        setCount(count + 1)
    }

    function changeNumber() {
        setLuckyNumber(~~(Math.random() * 100))
    }


    return (
        <div className='wrapper'>
            <p>Welcome Cool Gu<span ref={nameRef}></span>!</p>
            <p>Your lucky number is <span ref={numRef}></span></p>
            <p>Name has changed <span ref={countRef}></span> times</p>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeNumber}>Change Lucky Number</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Info />
    </React.StrictMode>
);


