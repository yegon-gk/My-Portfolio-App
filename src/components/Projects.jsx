import React from "react";
import ProjectItem from "./ProjectItem";
import compImg from "../assets/comp.jpg"
import gitlabImg from "../assets/gitlab.jpg"
import standupImg from "../assets/standup.png"
import Comp2Img from "../assets/comp2.png"


const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text text-orange-600 text-center">Projects</h1>
            <p className="text-center py-8">
                The following are some of my projects in software development. These structured endeavors encompass planning, execution, testing, and deployment, providing hands-on experience that reinforces theoretical concepts and contributes significantly to my growth as a skilled software engineer.
                </p>
                <div className="grid sm:grid-cols-2 gap-12">
                    <ProjectItem img={gitlabImg} title="Gitlab" />
                    <ProjectItem img={standupImg} title="StandUp"  />
                    <ProjectItem img={compImg} title="Computer"  />
                    <ProjectItem img={Comp2Img} title="Programming"  />

                </div>

        </div>
    )
}
export default Projects;