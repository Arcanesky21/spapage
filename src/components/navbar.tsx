// import Button from "./button.tsx";
import hamburger from "../assets/hamburger.svg"
import {useState} from "react";

export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false);
    // let menuOption;

    function openMenu(){
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    //
    // if(isOpen){
    //      menuOption =
    //         <ul className="flex">
    //             <Button title="Home"/>
    //             <Button title="Tech Stack"/>
    //             <Button title="Job History"/>
    //             <Button title="Contact"/>
    //         </ul>
    //
    // }else {
    //      menuOption = <img onClick={openMenu} src={hamburger} className="h-7 w-7 float-end" alt="hamburger menu"/>
    // }


    return (
        <>
            <nav className="p-5 bg-gradient-to-r from-[#3d3d3d] via-[#6d6d6d] to-[#3d3d3d] w-full">
                <div className="flex justify-between">
                    <p className="content-center text-[#b0b0b0] font-bold ">Mikarlo Francis</p>
                    <img onClick={openMenu} src={hamburger} className="h-7 w-7 float-end" alt="hamburger menu"/>
                </div>

            </nav>
        </>
    )
}