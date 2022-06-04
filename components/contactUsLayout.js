export default function ContactUsLayout(){
    return(
    <div class = "min-h-screen flex pt-28 justify-center">
        <div class = "p-20 w-full h-full font-poppins">
            <contact>
                <div class = "text-3xl">Contact Us</div>
                <div class = "pl-8">
                    <div class = "pt-16 text-2xl">Contact Info blah blah how to reach etc.</div>
                    <div class = "text-lg">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</div>
                </div>
            </contact>
            <apply>
                <div class = "pt-20 text-3xl">Apply to become a member!</div>
                <div class = "pl-8">
                    <div class = "pt-20 text-2xl">Instructions here</div>
                    <div class = "text-lg">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</div>
                    <ol class = "list-decimal pl-16">
                        <li class="pl-8">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</li> 
                        <li class="pl-8">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</li> 
                    </ol>
                    <div class="text-2xl">Link:&nbsp;
                <a class="underline text-sky-400 hover:text-sky-600" href="https://loremipsum.io">https://loremipsum.io</a></div>
                </div>
            </apply>
        </div>
    </div>
    )
} 