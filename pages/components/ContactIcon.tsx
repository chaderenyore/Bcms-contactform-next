import {LiaEnvelope} from 'react-icons/lia'

export default function ContactIcon() {
  return <div className="w-56 h-56 lg:w-96 lg:h-96  rounded-full flex items-center justify-center bg-gradient-to-r from-[#555F40] from-10%  via-30% to-[#bbd686] to-90%" >
    <div className="text-center text-white  font-medium font-['Inter'] leading-tight flex flex-col items-center justify-center">
        <LiaEnvelope className='text-4xl lg:text-6xl'/>
        <p className=' text-base lg:text-xl'>
        Insightfulink@mail.com
        </p>
        </div>
  </div>
}

// 555F40 BBD833