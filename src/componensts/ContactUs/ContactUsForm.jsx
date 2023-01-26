import React from 'react';

function ContactUsForm() {
      return (<div id="foodifyy_form" class="z-10 block p-6 rounded-lg shadow-lg bg-white w-[18rem] sm:w-[25rem] md:w-[28rem]  lg:w-[35rem] h-[29rem] lg:h-[30rem] ">
        <div className="flex justify-center mb-3">
          <h1 id="form_heading" className="text-[#00745B] font-bold text-2xl sm:text-3xl md:4xl lg:text-5xl">Contact Us!</h1>
        </div>
          <form id="main_form">
            <div  class="form-group mb-10">
              <input id="name_input" type="text" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-[#D9D9D9] bg-clip-padding
                border border-solid border-gray-300
                rounded-xl
                transition
                ease-in-out
                m-0
                placeholder:text-black
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp" placeholder="Name"/>
            </div>
            <div  class="form-group mb-10">
              <input id="email_input" type="email" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-[#D9D9D9] bg-clip-padding
                border border-solid border-gray-300
                rounded-xl
                transition
                ease-in-out
                placeholder:text-black
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email Address"/>
            </div>
            <div class="flex justify-center">
            <div  class="form-group mb-6 lg:mb-10 w-full">
            <textarea
                class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-[#D9D9D9] bg-clip-padding
                border border-solid border-gray-300
                rounded-xl
                transition
                ease-in-out
                placeholder:text-black
                m-0
                h-[10rem]
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="message_input"
              rows="3"
              placeholder="Additional Comments"
              ></textarea>
              </div>
        </div>
           <div className='flex justify-center'>
           <button id="form_btn" type="submit" class="
              px-7
              py-1.5
              bg-[#00745B]
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              transition
              duration-150
              ease-in-out">Submit</button>
           </div>
        </form>
    </div>
    )
}

export default ContactUsForm