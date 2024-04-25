function Button({title}: {title: string}) {

    return(
        <>
            <li className="hover:text-[#3d3d3d] text-[#b0b0b0] font-bold"><a href="#">{title}</a></li>
        </>
    )
}

export default Button