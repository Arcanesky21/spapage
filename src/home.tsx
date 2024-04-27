import hamburger from "../src/assets/hamburger.svg";
import allImages from "./model/model.ts";
import  { useState} from "react";
import Modal from "./components/modal.tsx";

function Home(){

    const [modalOpen, setModalOpen] = useState(false);


    const textAreaRows:number = 6;

    function openModal(){
        console.log(modalOpen);
        setModalOpen(!modalOpen);
    }


    return (
        <div className="flex bg-slate-900 flex-col" >
            {modalOpen ? <Modal home="Home"  job={"Experience"} contact={"contact"} tech={"tech"} handleClose={openModal} />: undefined}
            <nav className=" space-y-5 p-6 lg:fixed lg:w-full">
                <ul className="flex justify-between">
                    <li>
                        <header className="text-slate-200 text-2xl">
                            Mikarlo Francis
                        </header>
                    </li>
                    <div className="flex gap-3">
                        <li>
                            <img className=" w-10 h-10 cursor-pointer" onClick={openModal} src={hamburger} alt="hamburger"/>
                        </li>
                    </div>
                </ul>
            </nav>
                <section id="about" className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:items-center mb-16 p-6 lg:min-h-screen ">
                        <div className=" space-y-5 font-bold md:order-1 lg:justify-self-center col-span-4">
                            <h2 className="text-4xl text-slate-200 font-bold">Mikarlo Francis</h2>
                            <h2 className="text-2xl text-slate-400">Frontend Developer</h2>
                            <p className="text-2xl text-slate-400 leading-9">I build and maintain several applications while also working on backend and databases</p>
                            <ul className="flex text-slate-400 gap-3">
                                <li className="">github</li>
                                <li className="">linkedIn</li>
                                <li className="">instagram</li>

                            </ul>
                        </div>
                    </div>
                    <div className="p-5 space-y-5">
                        <div>
                            <header className="text-4xl font-bold text-slate-200">About me</header>
                        </div>
                        <div className="space-y-5 text-slate-400">
                            <p>Enim facilisis gravida neque convallis a cras semper. Feugiat in fermentum posuere urna nec tincidunt praesent. Tincidunt ornare massa eget egestas purus viverra. Morbi quis commodo odio aenean sed adipiscing diam donec. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Ornare arcu dui vivamus arcu felis bibendum ut tristique. In est ante in nibh mauris cursus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Enim nec dui nunc mattis enim. Nulla at volutpat diam ut venenatis tellus in metus vulputate. At consectetur lorem donec massa sapien. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Mollis aliquam ut porttitor leo a.
                            </p>
                            <p>Faucibus interdum posuere lorem ipsum dolor sit. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Euismod nisi porta lorem mollis aliquam. Nulla pharetra diam sit amet nisl suscipit. Pellentesque habitant morbi tristique senectus et. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tristique sollicitudin nibh sit amet commodo. Sit amet nisl purus in.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="techStack" className="flex flex-col space-y-5 mb-16 p-5">
                    <h1 className="text-4xl font-bold text-slate-200">Tech Stack</h1>
                    <div className="grid w-[22rem] gap-3 justify-between grid-cols-4 transition ease-in">
                    {/*<img src={angular} className="transition-opacity ease-in duration-700 " alt="Angular Stack"/>*/}
                    {/*    <img src={typescript} alt="Typescript"/>*/}
                    {/*    <img src={html} alt="html 5"/>*/}
                    {/*    <img src={css3} alt="CSS3"/>*/}
                    {/*    <img src={javascript} alt="Javascript"/>*/}
                    {/*    <img src={docker} alt="Docker"/>*/}
                    {/*    <img src={react} alt="React"/>*/}
                    {/*    <img src={bitbucket} alt="Bitbucket"/>*/}
                    {/*    <img src={cs} alt="C#"/>*/}
                    {/*    <img src={flutter} alt="Flutter"/>*/}
                        <ul className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:w-[96rem] mt-8 md:w-[48rem] gap-3 w-[22rem] ">
                            {
                                allImages.map((image, i) => (
                                    <li className="animate-bounce" key={i}> <img  src={image} alt={image.slice(12)}/> </li>
                                ))
                            }
                        </ul>

                    </div>
                </section>
                <section id="jobs" className="p-5 space-y-5 mb-16">
                    <h1 className="text-4xl font-bold text-slate-200">Experience</h1>
                    <div className="grid grid-cols-1 space-y-3">
                        <div className="col-span-2 text-slate-400">
                            <p>2022 - Present</p>
                        </div>
                        <div className="col-span-6 space-y-3">
                            <header className="text-slate-200"><a href="#">Programmer Analyst/Front end Developer | Sagicor Group</a></header>
                            <p className="text-slate-400 leading-6">Build and maintain critical components used to construct ’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                            <ul className="flex gap-5 text-teal-300 flex-wrap">
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>Angular</p>
                                </li>
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>Html</p>
                                </li>
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>Css</p>
                                </li>
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>Javascript</p>
                                </li>
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>Typescript</p>
                                </li>
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>C#</p>
                                </li >
                                <li className="bg-teal-400/10 px-3 py-1 rounded-full">
                                    <p>SQL</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            <section className="p-5 space-y-3">
                    <header className="text-4xl text-slate-200 font-bold" id="contact">
                        Contact Me
                    </header>
                    <p className="text-slate-400 ">Please contact me at MikarloFrancis@gmail.com or through this form</p>
                <div className=" space-y-3">
                    <input className="w-full rounded-md bg-teal-800 pl-2 pt-2 pb-2" placeholder="Email Address"/>
                    <textarea className="w-full rounded-md pl-2 pr-2 bg-teal-800 " rows={textAreaRows} placeholder="Message"/>
                </div>
            </section>
        </div>

    )
}

export default Home