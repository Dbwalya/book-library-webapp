import { Dot } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col">
      
        <div className="flex w-4/5 mx-auto py-10 justify-evenly font-semibold text-gray-600">
           <div className="flex flex-col items-center cursor-pointer">
            Home
            <Dot className="text-sky-600 font-bold h-10 w-10 mt-[-10px]"/>
           </div>
           <div className="flex flex-col items-center h-10 cursor-pointer">
            Bestseller
            <Dot />
           </div>
           <div className="flex items-center self-start cursor-pointer">
            Category
            <ChevronDown className="h-5"/>
           </div>
           <div className="flex flex-col items-center h-10 cursor-pointer">
            Find a store
            <Dot />
           </div>
           <div className="flex flex-col items-center  h-10">
            Blog
            <Dot />
           </div>
        </div>
    </div>
  )
}

export default Header