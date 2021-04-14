import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-lg text-gray-700">

      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>


      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>


        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url='https://coaching.papareact.com/ai9' />
      </div>


      </header>

  
  <form className="flex flex-col items-center mt-44 flex-grow w-4/5">

    <Image 
      src='https://i1.wp.com/hipertextual.com/wp-content/uploads/2015/09/googles-new-logo-.gif?fit=881%2C400&ssl=1'
      height={100}
      width={300}

    />

    <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input className="flex-grow focus:outline-none" type="text"/>
      <MicrophoneIcon className="h-5" />
    </div>

    <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
      <button className="btn">Google Search</button>
      <button className="btn">I´m feeling lucky</button>
    </div>

  </form>
   

    <Footer />

  </div>
  
  )
}
