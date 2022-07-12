import React from 'react';
import Project from './Project';
import './style.css' 

const projectData = [{
    name:"Play Game",
    description:"simple game is created using 10 buttons",
    skills:['HTML','CSS','React'],
    github:"https://github.com/YashilJogi/game",
    
},
{
    name:"Search API",
    description:"Created a search engine which finds info from api",
    skills:['HTML','CSS','React'],
    github:"https://github.com/YashilJogi/userapi",
    
},

];

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    )
}

export default ProjectContainer