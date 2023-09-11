import React from 'react';
import { Link } from 'react-router-dom';

const SectionB = () => {
    var data = [
        {
            "title": "Mongo",
            "description": "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format.",
            "progress": "30"
        },
        {
            "title": "Express",
            "description": "Express.js is a minimal and flexible Node.js web application framework.",
            "progress": "40"
        },
        {
            "title": "React",
            "description": "React.js is a popular JavaScript library for building user interfaces.",
            "progress": "70"
        },
        {
            "title": "Node",
            "description": "Node.js is a server-side JavaScript runtime environment.",
            "progress": "50"
        }
    ];

    return (
        <div className="container c-b">
            <img className="c-wave" src="./wave.svg" alt="" id={'progress'} />
            <div className="block b-b">
                <h2>What have I learned so far...</h2>
                <div className="cardsCont">
                    <img className="bikeImg" src="./bike.png" alt="" />
                    <div className="cards">
                        {data.map((put, index) => (
                            <Link to={ `/Home/${put.title}`} key={index}>
                                <div className="card" key={index}>
                                    <h3>{put.title}</h3>
                                    <div>
                                        <p>{put.description}</p>
                                        <label htmlFor="prog">Current progress
                                            <progress name="prog" value={put.progress} max="100"></progress>
                                        </label>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* <img src="./blob.svg" alt="Floating Image" /> */}
        </div>
    );
}

export default SectionB;
