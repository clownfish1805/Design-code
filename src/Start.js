import React from 'react';
import { ReactComponent as YourImage } from './components/YourImage.svg';
import { ReactComponent as Logo } from './components/Logo.svg';
import { ReactComponent as DivImage1 } from './components/DivImage1.svg';
import { ReactComponent as DivImage2 } from './components/DivImage2.svg';
import { ReactComponent as DivImage3 } from './components/DivImage3.svg';
import { ReactComponent as Img } from './components/Img.svg';
import { ReactComponent as Img2 } from './components/Img2.svg';
import { ReactComponent as Img3 } from './components/Img3.svg';
import { ReactComponent as Img4 } from './components/Img4.svg';
import { ReactComponent as Img5 } from './components/Img5.svg';
import { ReactComponent as Img6 } from './components/Img6.svg';
import { ReactComponent as Img7 } from './components/Img7.svg';
import { ReactComponent as Img8 } from './components/Img8.svg';
import { ReactComponent as Img9 } from './components/Img9.svg';
import { ReactComponent as Last1 } from './components/Last1.svg';
import { ReactComponent as Last2 } from './components/Last2.svg';
import { ReactComponent as Linkedin } from './components/Linkedin.svg';
import { ReactComponent as Twitter } from './components/Twitter.svg';
import { ReactComponent as Insta } from './components/Insta.svg';
import { ReactComponent as Facebook } from './components/Facebook.svg';
import { ReactComponent as Lastlogo } from './components/Lastlogo.svg';

function Start() {
  return (
    <>
    
      <div className="bg-[#5b21b6]">
        <header className="p-4 text-white">
          <div className="flex items-center">
            <div className='ml-16'> <Logo/></div>
            <div className="text-4xl font-bold text-yellow-300 tracking-widest ml-4">CAMPWOO</div>
            <div className="ml-80 hover:border-indigo-700">No dropdown</div>
            <div className="ml-8">Dropdown 1</div>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            <span className="ml-8 mr-1">Dropdown 2</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            <button className="p-2 ml-96 box-border w-28 rounded-lg border border-slate-300 hover:border-4 hover:border-[#7e22ce]">
              Button 1
            </button>
            <button className="p-2 ml-8 box-border w-28 text-indigo-700 rounded-lg bg-white shadow-lg shadow-indigo-500/50 hover:border-4 hover:border-[#7e22ce]">
              Button 2
            </button>
          </div>
          </header>


          <div className="grid place-content-center text-white">
            <div className="flex flex-row">
              <div className="text-xl mt-52 text-2xl">
              <div className="text-3xl ml-4"><span className="font-bold text-yellow-300">CAMPWOO </span> 
               is on the Nueces River at the intersection <br></br>of Farm Road 337 and
           State Highway 55,<br></br> just below Camp Wood Creek  <br></br>
           </div>
              <br></br>
              <br></br>
              <div className="flex flex-row ml-2 gap-4">
              <div className="basis-1/4">
                <button className="h-12 w-56 bg-[#4c1d95] hover:border-4 hover:border-[#7e22ce] border-transparent border rounded-md">Kampa Katil</button>
              </div>
              <div className="basis-1/4">
                <button className="w-56 h-12 border border-slate-300 text-[#5b21b6] bg-white hover:border-4 hover:border-[#7e22ce] border rounded-md">Button 2</button>
              </div>
              </div>
            </div>
            <div className='mt-44 ml-2'><YourImage /></div>
            </div>
            <br />
            <br />
        </div>
      </div>


<br></br>
      <div class="flex justify-center mt-28">
          <h3 className="text-4xl font-semibold"><span className=" text-yellow-300">CAMPWOO</span><span className='text-[#5b21b6]'> FEATURED PRODUCTS</span></h3>
      </div>
      <div className="flex justify-center">
        <h3 className="text-2xl text-[#737373]">Campwoo provides a distinguishable product features for the company.</h3>
      </div>
      <br></br>

      <div class="flex justify-center mt-16">
        <DivImage1/>
        <DivImage2/>
        <DivImage3/>
      </div>
<br></br>
<br></br>
<br></br>

      <div className="flex justify-center mt-28">
        <h3 className="text-[#4c1d95] text-4xl font-semibold">POPULAR FEATURES</h3>
      </div>
      
      <div className="flex justify-between">
        <h3 className="text-2xl text-[#737373] text-center flex-grow ml-56">Campwoo provides a distinguishable product features</h3>
        <span className="text-xl text-[#5b21b6] flex items-center mr-16 font-semibold">Daha Fazla Bak
        <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
       </span>
      </div>

      <div className="mt-16 grid place-content-center gap-4 grid-cols-3 grid-rows-3 ml-56">
        <div class="flex items-center">
          <Img/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>1 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img2/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>2 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img3/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>3 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img4/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>4 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img5/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>5 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img6/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>6 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img7/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>7 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img8/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>8 Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center">
          <Img9/>
          <div className='ml-4'>
            <strong className='text-[#5b21b6] text-2xl'>Andrew Alfred</strong>
            <br></br>
            <span className='text-xl text-[#737373]'>9 Technical advisor</span>
          </div>
        </div>
      
      </div>
    <br></br>
    <br></br>
    <br></br>
      

      <div class="flex justify-center mt-28">
          <h3 className="text-4xl font-semibold"><span className=" text-yellow-300">CAMPWOO</span><span className='text-[#5b21b6]'> FEATURED PRODUCTS</span></h3>
      </div>
      <br></br>
      <br></br>
      <div class="flex justify-center gap-56">
  <div class="p-4">
    <Last1/>
    <br></br>
    <div className='text-center'>
    <p class="text-xl text-gray-600">Additional details for Image 1.</p>
      <p class="text-xl text-gray-600">It is displayed in the above image and <br></br> it can be taken from the below link</p>
      <br></br>
      <button  className=' h-12 w-56 bg-[#5b21b6] text-white font-semibold border rounded-md' >Click On Me</button>
    </div>
  </div>

 
  <div class="p-4">
   <Last2/>
   <br></br>
    <div className='text-center'>
      {/* <p class="text-lg font-semibold text-gray-800">Description 2</p> */}
      <p class="text-xl text-gray-600">Additional details for Image 2.</p>
      <p class="text-xl text-gray-600">It is displayed in the above image and <br></br> it can be taken from the below link</p>
      <br></br>
      <button className=' h-12 w-56 bg-[#fcd34d] font-semibold border rounded-md'>Click On Me</button>
    </div>
  </div>
</div>
<br></br>
    <br></br>
    <br></br>
<hr className=" my-16 border-t-2 color-red" />

<div className="ml-44 mt-28">
  <div className='flex items-center'>
    <div > <Lastlogo/></div>
    <h2 className="text-5xl font-bold text-[#5b21b6] tracking-widest ml-4">CAMPWOO</h2>
  </div>
  <br></br>
  <div class="flex ">
    <div class="w-2/4 p-4">
      <div class="text-left text-l">
        <p >Camp Wood is on the Nueces River at the intersection of Farm Road 337 and<br></br>
           State Highway 55, just below Camp Wood Creek in far southwestern Real County. <br></br>
      The settlement was founded in 1920 by workers of the Uvalde Cedar Company </p>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex text-[#5b21b6] ">
        <div className='w-60 h-12'>Campwoo </div>
        <div className='w-60 h-12'>Solution </div>
        <div className='w-60 h-12'>Contacts </div>
      </div>
      <div className="flex">
        <div className="w-60 h-8">Template</div>
        <div className="w-60 h-8">Builder</div>
        <div className="w-60 h-8">Design</div>
      </div>

      <div className="flex">
        <div className="w-60 h-8">Store</div>
        <div className="w-60 h-8">Website</div>
        <div className="w-60 h-8">Tools</div>
      </div>

      <div className="flex">
        <div className="w-60 h-8">Investor</div>
        <div className="w-60 h-8">Press</div>
        <div className="w-60 h-8">Map </div>
      </div>
    </div>

  </div>
<br></br>


  <div className='flex gap-6 ml-4'>
    <Linkedin/>
    <Twitter/>
    <Insta/>
    <Facebook/>
  </div>
</div>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    </>
  );
}

export default Start;
