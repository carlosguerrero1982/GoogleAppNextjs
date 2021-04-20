

function HeaderOption({Icon,title,selected}) {
    return (
        <div className={`flex items-center pb-3 space-x-1 border b-4 border-transparent hover:text-blue-500  cursor-pointer ${selected && "text-blue-500 border-b-2 border-blue-600"}`}>
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption
