import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";



import {


   SearchIcon,
} from "@heroicons/react/outline";

const Header = () => {
   const router = useRouter();
   const [searchTerm, setSearchTerm] = useState("");

   const handleSubmit = e => {
      e.preventDefault();

      setSearchTerm("");
      router.push({
         pathname: '/search',
         query: {
            term: searchTerm
         }
      });
   };

   return (
      <>
         <header>
            <div className="container mx-auto px-6 py-3">
               <div className="flex items-center justify-between">
                  <div className="w-full text-green-500 text-2xl font-semibold cursor-pointer">
                     <Link href="/">
                        <a>CardRank</a>
                     </Link>
                  </div>
               </div>
               
               
               <div className="relative mt-6 max-w-lg mx-auto">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                     <SearchIcon className="h-5 w-5" />
                  </span>
                  <form onSubmit={handleSubmit}>
                     <input
                        className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                     />
                  </form>
               </div>
            </div>
         </header>

      </>
   );
};

export default Header;
