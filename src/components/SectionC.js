import React from 'react'
import { Link } from 'react-router-dom';

const SectionC = () => {
    return (

        <div className="container c-c">
            <img className="c-wave" src="./wave-flipped.svg" alt=""/>
                <h2>My Projects</h2>
            <div className="block b-c">
                <div className="cardsCont">
                     <div className="cards">
                            {/* <Link to={ `/${put.title}`} key={index}> */}
                            <a href="https://spotify-clone-phi-puce.vercel.app">    
                                <div className="card" key={"index"}>
                                    <h3>Spotify Clone</h3>
                                    <div>
                                        <img src='./spotifyClone.png' alt='project image' />
                                        <p>A Next-JS Project</p>
                                    </div>
                                </div>
                            </a>
                            {/* </Link> */}
                    </div>
                </div>
            </div>
            {/* <img src="./blob.svg" alt="Floating Image" /> */}
        </div>
    )
}

export default SectionC