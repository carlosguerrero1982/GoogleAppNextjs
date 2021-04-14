function Avatar({url}) {
    return (
        <div>
            <img  loading="lazy" className="rounded-full h-10 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={url} alt=""/>
        </div>
    )
}

export default Avatar
