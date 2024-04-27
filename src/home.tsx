import hamburger from "../src/assets/hamburger.svg";
import react from "../src/assets/react.svg"
import cs from "../src/assets/cs.svg"
import docker from "../src/assets/docker.svg"
import html from "../src/assets/html5.svg"
import css3 from "../src/assets/css3.svg"
import avat from "../src/assets/avat.svg"
import flutter from "../src/assets/flutter.svg"
import javascript from "../src/assets/javascript.svg"
import typescript from "../src/assets/typescript.svg"
import angular from "../src/assets/angular.svg"
import bitbucket from "../src/assets/bitbucket.svg"

function Home(){

    return(
        <div className="flex bg-slate-900 flex-col" >
            <nav className=" p-5 ">
                {/* <ul className="text-white flex justify-center space-x-4 ">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Tech Stack
                    </li>
                    <li>
                        Job History
                    </li>
                    <li>
                        Contact
                    </li>
                </ul> */}
                <ul className="flex justify-end">
                    <li>
                        <img className=" w-10 h-10" src={hamburger} alt="hamburger"/>
                    </li>
                </ul>
            </nav>
            <div className="">
                <section id="about" className="">
                    <div className="grid min-h-screen  grid-cols-8 p-6 items-center justify-items-center">
                        <div className=" col-span-4">

                            <p className="text-slate-400">Hi, my name is </p>
                            <p className="text-slate-200 text-4xl">Mikarlo Francis</p>
                            <p className="text-slate-400 text-2xl">A passionate front-end developer with over 2 years of
                                experience
                                in
                                developing front-end applications and occasionally back end</p>
                        </div>
                            <img className="w-1/2 col-span-4" src={avat} alt="avatar" />
                    </div>
                    <div>
                        <header className="text-slate-200 font-bold">About me</header>
                    </div>
                </section>
                <section id="techStack" className="flex flex-col content-center items-center">
                    <h1 className="text-4xl font-bold text-slate-200">Tech Stack</h1>
                    <div className="grid w-1/4 p-5 gap-3 justify-between grid-cols-4">
                    <img src={angular} alt="Angular Stack"/>
                        <img src={typescript} alt="Typescript"/>
                        <img src={html} alt="html 5"/>
                        <img src={css3} alt="CSS3"/>
                        <img src={javascript} alt="Javascript"/>
                        <img src={docker} alt="Docker"/>
                        <img src={react} alt="React"/>
                        <img src={bitbucket} alt="Bitbucket"/>
                        <img src={cs} alt="C#"/>
                        <img src={flutter} alt="Flutter"/>
                    </div>
                </section>
                <section id="jobs" className="p-5">
                    <h1 className="text-4xl font-bold text-slate-200">Experience</h1>
                    <div className="grid grid-cols-8">
                        <div className="col-span-2">
                            <p>2022 - Present</p>
                        </div>
                        <div className="col-span-6 justify-self-start">
                            <header><a href="#">Programmer Analyst/Front end Developer | Sagicor Group</a></header>
                            <p className="text-slate-400">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                            <ul className="flex gap-5">
                                <li>
                                    <p>Angular</p>
                                </li>
                                <li>
                                    <p>Html</p>
                                </li>
                                <li>
                                    <p>Css</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="space-y-3">
                    <header className="text-4xl text-slate-200 font-bold" id="contact">
                        Contact Me
                    </header>
                    <p className="text-slate-400">Please contact me at MikarloFrancis@gmail.com or through this form</p>
                        <input className="w-full" placeholder="Email Address"/>
                        <textarea className="w-full" placeholder="Message"/>
                </section>
            </div>
        </div>

    )
}

export default Home