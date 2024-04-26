import NavBar from "../../components/navbar.tsx";
import About from "../../components/about.tsx";
import TechStack from "../../components/techstack.tsx";
import JobHistory from "../../components/jobhistory.tsx";

function Home(){

    return(
        <div className="text-center " >
            <NavBar />
            <About />
            <TechStack />
            <JobHistory />
        </div>

    )
}

export default Home