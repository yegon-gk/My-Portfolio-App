import React from "react";
import { TypeAnimation } from "react-type-animation";
// import {FaTwitter, FaFacebookF,Fainstagram, FaLinkedinIn} from "react-icons/fa"
// import { GrTwitter } from "react-icons/gr";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left" src="https://tinyurl.com/27g9nh2x"></img>
            <div className="w-full h-screen absolute top-0 bg-white/20">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-extrabold text-orange-600">I'm Yegon</h1>
                    <h2 className="flex sm-text-3x text-2xl font-semibold text-white">
                        <TypeAnimation
      sequence={[
        'Software Engineer',
        2000,
        'Full-Stact Developer',
        2000,
        'Web and Mobile Developer',
        2000,
        'Data Structures and Algorithms',
        2000
      ]}
      wrapper="div"
      speed={20}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
      repeat={Infinity}
    />
                    </h2>
                     {/* <div className="flex justify-between pt-6 max-w-[200px] w-full"> 
                    <GrTwitter />
                    <FaFacebookF />
                    <Fainstagram />
                    <FaLinkedinIn />
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Main;