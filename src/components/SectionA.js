import React from 'react'
// import { Link } from 'react-router-dom';

const SectionA = () => {

    // localStorage.getItem("name");
    // localStorage.getItem("email");
    return (
        <>
            <div class="container c-a">
                <div class="block b-a">
                    <h1>ProgrammerXD / Naman Saini</h1>
                    <p>
                        I am a Trainee at Novem Controls and learning the MERN Stack technology by Situ Sir, building this project simultaneously while learning MERN. Thanks to everyone for this opportunity that I can design and develop beautiful websites like this one.
                    </p>
                    {/* <Link to="/#sec"> */}
                    <a href="#progress">
                        <button >Continue !</button>
                    </a>
                    {/* </Link> */}
                </div>
                <img src="./blob.svg" alt="Floating Image" />
            </div>
        </>
    )
}

export default SectionA