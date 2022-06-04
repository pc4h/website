export default function ContactUsLayout(){
    return(
    <div class = "min-h-screen flex pt-28 justify-center">
        <div class = "p-20 w-full h-full font-poppins">
            <contact>
                <div class = "text-3xl font-bold">Contact Us</div>
                <div class = "pl-8">
                    <div class = "pt-16 text-2xl font-semibold">Contact Info blah blah how to reach etc.</div>
                    <div class = "text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </contact>
            <apply>
                <div class = "pt-20 text-3xl font-bold">Apply to become a member!</div>
                <div class = "pl-8">
                    <div class = "pt-20 text-2xl font-semibold">Instructions here</div>
                    <div class = "text-xl">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</div>
                    <ol class = "list-decimal pl-16">
                        <li class="pl-8 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus luctus 
                        accumsan tortor posuere ac ut consequat semper.</li> 
                        <li class="pl-8 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus luctus 
                        accumsan tortor posuere ac ut consequat semper.</li> 
                    </ol>
                    <div class="text-2xl font-medium">Link:&nbsp;
                <a class="underline text-sky-400 hover:text-sky-600 font-normal" href="https://loremipsum.io">https://loremipsum.io</a></div>
                </div>
            </apply>
        </div>
    </div>
    )
} 