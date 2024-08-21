import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({trending}) => {
  return (
    <div className='w-full overflow-hidden overflow-y-auto flex flex-wrap gap-4 items-center justify-center'>
      {trending.map((items, index) => <Link key={index} className='flex flex-wrap w-52 h-60 overflow-hidden' >
      <div className="w-full h-[70%] rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${items.backdrop_path} `}
          alt=""
        />
      </div>
    <div className="flex flex-col  h-[30%]">
    <div className="flex">
          <h1 className="font-semibold text-red-500 text-xs py-2 whitespace-nowrap">
            {items.title ||
              items.name ||
              items.original_title ||
              items.original_name}
          </h1>
          <h1 className="text-sm ml-[2px] font-medium mt-[5px] leading-none text-zinc-400">
            {items.adult === false ? `13+` : `18+`}
          </h1>
        
        </div>
        <p className="text-zinc-300 w-full text-xs font-medium leading-[1.1]">
          {items.overview.slice(0, 37)}
          <span className=" opacity-75 ml-1">...more</span>
        </p>
    </div>
      </Link>)}
    </div>
  )
}

export default Cards
