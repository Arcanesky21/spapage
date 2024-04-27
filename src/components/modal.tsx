
type modalProps = {
    home: string,
    tech: string,
    job: string,
    contact: string,
    handleClose: () => void,
}


export default function Modal({home,tech,job,contact,handleClose}: modalProps) {



    return(
        <div className="fixed z-40 left-0 top-0 w-1/4 py-5 h-full flex justify-center transition bg-teal-800 rounded-tr-lg">
            <ul className="space-y-5">
                <li onClick={handleClose}> <a href="#contact">{home}</a> </li>
                <li onClick={handleClose}><a  href="#contact">{tech}</a></li>
                <li onClick={handleClose}><a href="#contact">{job}</a></li>
                <li onClick={handleClose}><a  href="#contact">{contact}</a></li>
            </ul>
        </div>
    )
}