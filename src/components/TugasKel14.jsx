import React, { useState, useEffect } from "react";
import ReactLogo from '../assets/react.svg'
import Emyu from '../assets/meme2.jpg'
import "./TugasKel14.css";

export default function Counter() {
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);

    // fungsi tambah
    const countUp = () => {
        setCount(count + 1)
    };

    // fungsi kurang
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        (count == 10) && alert("10")
    })

    return (
        <>
            {count >= 10 ?
                <img src={Emyu} alt="up" width={300} height={250} />
                :
                <img src={ReactLogo} alt="down" />
            }

            <h3> Tugas Modul 3 KEL 14 </h3>


            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countUp}> +
                    </button>
                </div>
                <div className="ViewButton1">
                    <button style={{
                        backgroundColor: 'rgb(8, 236, 38)',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black'
                    }} onClick={countDown}> -
                    </button>
                </div>
            </div>
        </>
    );
}
