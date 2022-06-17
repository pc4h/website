export default function AboutUsLayout() {
    return (
        <div class="min-h-screen flex items-center justify-center">
            <div class="font-poppins">

                // About us
                <div class="col-span-full w-screen relative right-4">
                    <h1 class="text-xl font-semibold text-slate-800 dark:text-white mx-14 lg:text-black">
                        About Us
                    </h1>
                    <p class="mt-2 text-base leading-snug dark:text-gray-300 mx-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>


                // Mission
                <div class="col-span-full border-0 w-screen relative right-4 h-3/4 bg-gray-300">
                    <h1 class="text-xl font-semibold text-slate-800 dark:text-white mx-14 lg:text-black">
                        Our Mission
                    </h1>
                    <p class="mt-2 text-base leading-snug dark:text-gray-300 mx-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                // Officers
                <div class="grid mt-12 gap-y-10 py-auto relative right-0 gap-0 bottom-10 lg:grid-cols-2 lg:gap-x-10">
                    <div class="relative top-10 w-full h-3/5">
                        <h1 class="text-xl font-semibold text-slate-800 dark:text-white lg:text-black">
                            Youth Officers
                        </h1>
                        <p class="mt-2 text-base leading-snug dark:text-gray-300 w-6/12 relative">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <img
                            alt="No alt"
                            src=""
                            class="w-6/12 relative bottom-32 left-2/4 "
                        />
                    </div>
                    <div class="row-auto relative top-10 w-full h-3/5">
                        <h1 class="text-xl font-semibold text-slate-800 dark:text-white lg:text-black">
                            Youth Officers
                        </h1>
                        <p class="mt-2 text-base leading-snug dark:text-gray-300 left-44 w-2/4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                        <img
                            alt="No alt"
                            src=""
                            class="w-6/12 relative bottom-32 left-2/4 "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}