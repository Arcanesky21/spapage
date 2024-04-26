import avatar from "../assets/avat.svg"

export default function About() {

    return (
        <section className="flex p-5 font-bold items-center text-center flex-col min-h-screen space-y-3">
            <img className="h-20 w-20" src={avatar} alt="placeholder"/>
            <h1 className="text-[#b0b0b0] text-3xl  font-bold">Front-End Developer</h1>
            <div className="space-y-3">
                <p className="text-[#888888] mt-5"> Hi, my name is </p>
                <h1 className="text-[#b0b0b0] text-3xl  font-bold">Mikarlo Francis</h1>
                <p className="text-[#888888]">A passionate front-end developer with over 2 years of experience in
                    developing front-end applications and occasionally back end</p>
            </div>
        </section>
    )
}