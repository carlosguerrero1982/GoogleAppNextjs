import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import {useRef} from 'react'
import {useRouter} from 'next/router'

export default function Home() {

  const router = useRouter()
  const searchInputRef = useRef(null)

  const search =(e)=>{

    e.preventDefault()
    const term = searchInputRef.current.value;
    console.log(term);

    if(!term) return;

    router.push(`/search?term=${term}`);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between w-full p-5 text-lg text-gray-700">

      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>


      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>


        <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

        <Avatar url='https://coaching.papareact.com/ai9' />
      </div>


      </header>

  
  <form className="flex flex-col items-center flex-grow w-4/5 mt-44">

    <Image 
      src='https://i1.wp.com/hipertextual.com/wp-content/uploads/2015/09/googles-new-logo-.gif?fit=881%2C400&ssl=1'
      height={100}
      width={300}

    />

    <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text"/>
      <MicrophoneIcon className="h-5" />
    </div>

    <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
      <button onClick={search} className="btn">Google Search</button>
      <button onClick={search} className="btn">I´m feeling lucky</button>
    </div>

  </form>
   

    <Footer />

  </div>
  
  )
}
