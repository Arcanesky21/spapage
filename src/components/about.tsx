import avatar from "../assets/avat.svg"

export default function About(){

    return(
        <div className="flex p-5 font-bold items-center text-center flex-col space-y-3">
            <div>
                <img className="  h-20 w-20 " src={avatar} alt="placeholder"/>
            </div>
            <div>
                <h1 className="text-[#b0b0b0] text-3xl  font-bold">Front-End Developer</h1>
            </div>
            <div>
               <p className="text-[#888888]"> Hi, I'm Mikarlo, A passionate Front-end Developer based in Jamaica </p>
            </div>
        </div>
    )
}