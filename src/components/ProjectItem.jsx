import React from "react";

const ProjectItem = ({img, title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-black-200">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-60" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-gray-800 tracking-wider text-center"> 
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-gray-800 text-center">ReactJS</p>
                <a href="/"/>
                <p className="text-center p-3 rounded-lg bg-orange-600 text-white text-normal cursor-pointer">More Info...</p>
            </div>
        </div>
    )
}
export default ProjectItem;