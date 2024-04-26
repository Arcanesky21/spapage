import angular from "../assets/angular.svg"
import bitbucket from "../assets/bitbucket.svg"
import css3 from "../assets/css3.svg"
import docker from "../assets/docker.svg"
import html5 from "../assets/html5.svg"
import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import react from "../assets/react.svg"
import cs from "../assets/cs.svg"


export default function TechStack(){

    return(
        <section className="min-h-screen ">
            <h1 className="text-[#b0b0b0] text-3xl font-bold">Tech Stack</h1>
            <div className="grid grid-cols-3 justify-items-center gap-5 mt-5">
                <img className="h-16 w-16" src={html5} alt="html5"/>
                <img className="h-16 w-16" src={css3} alt="css"/>
                <img className="h-16 w-16" src={javascript} alt="javascript"/>
                <img className="h-16 w-16" src={typescript} alt="typescript"/>
                <img className="h-16 w-16" src={angular} alt="angular"/>
                <img className="h-16 w-16" src={react} alt="react"/>
                <img className="h-16 w-16" src={cs} alt="cs"/>
                <img className="h-16 w-16" src={bitbucket} alt="bitbucket"/>
                <img className="h-16 w-16" src={docker} alt="docker"/>
            </div>
        </section>
    )
}