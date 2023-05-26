import React from 'react'

const MenuListHeading = () => {
  return (
    <>
           <div className=" flex justify-between items-center px-2 lg:px-0">
            <h1 className='font-bold text-xl lg:text-2xl text-orange-600'>Food Items</h1>
            <span className="">
              <div className="flex">
                <input
                  type="text"
                  className="block w-48  text-base px-2 py-1 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-white bg-orange-600 rounded-3xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

              </div>
            </span>
          </div>
    </>
  )
}

export default MenuListHeading