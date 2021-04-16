import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'

function Header() {

    const router = useRouter()
    const searchInputRef = useRef(null)

   const search = (e) =>{

    e.preventDefault()
    const term = searchInputRef.current.value;

    if(!term) return

    router.push(`/search?term=${term}`)

   }
    
    
    return (

<header className="sticky top-0 bg-white">

    <div className="flex items-center w-full p-6">

        <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            width={120}
            height={40}
            onClick={()=>router.push('/')}
            className="cursor-pointer"
             />

             <form className="flex items-center flex-grow max-w-3xl py-3 ml-3 border border-gray-200 rounded-full shadow-lg px-7" action="">

                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none"  type="text"/>

                <XIcon onClick={()=>{searchInputRef.current.value=""}} className="text-gray-500 transition duration-100 transform cursor-pointer sm:mr-3 h-7 hover:scale-125" />

                <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 sm:inline-flex border-gray-300s" />

                <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
                <button hidden type="submit" onClick={search}>Search</button>
                
             </form>
     </div>
           
</header>

    )
}

export default Header
