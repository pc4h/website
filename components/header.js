export const Header = () => {
  return (
    // <nav className="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full z-10 top-0 drop-shadow-lg">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6 ">
    //     <img src= "/home/chaiwey/nextsite/images/4HLOGOOFFICIAL.png"></img>
    //     <a className="text-slate-900 font-poppins font-semibold no-underline hover:text-blue-400 hover:no-underline" href="#">
    //       <span className="text-2xl pl-2">Potomac 4H</span>
    //     </a>
    //   </div>

    //   <div className="block lg:hidden">
    //     <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
    //       <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    //     </button>
    //   </div>

    //   <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 " id="nav-content">
    //     <ul className="list-reset lg:flex justify-end flex-1 items-center">
    //       <li className="mr-3">
    //         <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to= "/home">Home</a>
    //       </li>
    //       <li className="mr-3">
    //         <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to= "/aboutus" >About Us</a>
    //       </li>
    //       <li className="mr-3">
    //         <button id="dropdownNavbar" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-poppins text-gray-600 
    //         border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-00 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white 
    //         dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Projects <svg className="ml-1 w-4 h-4" fill="currentColor" 
    //         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
    //         clip-rule="evenodd"></path></svg></button>
    //         <div id="dropdownNavbar" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    //           <ul className="py-1" aria-labelledby="dropdownLargeButton">
    //             <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to="/ongoingprojects">Ongoing Projects</a>
    //             <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to="/pastprojects">Past Projects</a>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className="mr-3">
    //         <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to= "/gallery" >Gallery</a>
    //       </li>
    //       <li className="mr-3">
    //         <a className="inline-block text-gray-600 no-underline font-poppins hover:text-blue-400 hover:text-underline py-2 px-4" to= "/contactus" >Contact Us</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full z-10 top-0 drop-shadow-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src="/4HLOGOOFFICIAL.png" alt="Potomac 4H Logo" width="70" height="70"></img>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Potomac 4H</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 font-poppins md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="mr-3">
              <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            <li className="mr-3">
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About Us</a>
            </li>
            <li className="mr-3">
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Our Projects<svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              <div id="dropdownNavbar" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Ongoing Projects</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Past Projects</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mr-3">
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li className="mr-3">
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}