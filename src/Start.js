import React from 'react';
import { ReactComponent as YourImage } from './YourImage.svg';
import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as DivImage1 } from './DivImage1.svg';
import { ReactComponent as DivImage2 } from './DivImage2.svg';
import { ReactComponent as DivImage3 } from './DivImage3.svg';
import { ReactComponent as Img } from './Img.svg';
import { ReactComponent as Img2 } from './Img2.svg';
import { ReactComponent as Img3 } from './Img3.svg';
import { ReactComponent as Img4 } from './Img4.svg';
import { ReactComponent as Img5 } from './Img5.svg';
import { ReactComponent as Img6 } from './Img6.svg';
import { ReactComponent as Img7 } from './Img7.svg';
import { ReactComponent as Img8 } from './Img8.svg';
import { ReactComponent as Img9 } from './Img9.svg';
import { ReactComponent as Last1 } from './Last1.svg';
import { ReactComponent as Last2 } from './Last2.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';
import { ReactComponent as Twitter } from './Twitter.svg';
import { ReactComponent as Insta } from './Insta.svg';
import { ReactComponent as Facebook } from './Facebook.svg';
function Start() {
  return (
    <>
      <div className="bg-purple-700">
        <header className="p-4 text-white">
          <div className="flex items-center">
            <Logo/>
            <div className="text-3xl font-bold text-yellow-300 tracking-widest ml-28">CAMPWOO</div>
            <div className="ml-96 hover:border-indigo-700">Text 1</div>
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
            <button className="ml-96 box-border w-28 rounded-lg border border-slate-300 hover:border-indigo-700">
              Button 1
            </button>
            <button className="ml-8 box-border w-28 text-indigo-700 rounded-lg bg-white shadow-lg shadow-indigo-500/50 hover:border-indigo-700">
              Button 2
            </button>
          </div>
         
          <div className="grid place-content-center mt-56">
            <div className="flex flex-row">
              <p className="text-xl border-2 border-rose-600 text-2xl">
                Birds are a group of warm-blooded vertebrates
                <br />
                constituting the class Aves, characterised by feathers, toothless beaked jaws
              </p>
              <YourImage />
            </div>
            <br />
            <div className="flex flex-row">
              <div className="basis-1/4">
                <button className="w-28 h-12 border border-slate-300">Kempwoo</button>
              </div>
              <div className="basis-1/4">
                <button className="w-56 h-12 border border-slate-300">Exasperation</button>
              </div>
            </div>

            <br />
          </div>
        </header>
      </div>
      <br></br>
      
      <div class="flex justify-center mt-16">
          <h3 className="text-3xl font-bold text-yellow-300 tracking-widest ml-28">CAMPWOO FEATURED PRODUCTS</h3>
      </div>
      <div class="flex justify-center">
        <h3 className="text-2xl text-[#737373]">Features of the Campwoo Company products are mentioned below.</h3>
      </div>
      
      <div class="flex justify-center mt-16">
        <DivImage1/>
        <DivImage2/>
        <DivImage3/>
      </div>

      <div className="flex justify-center mt-16">
        <h3 className="text-[#4c1d95] text-5xl font-strong">POPULAR FEATURES</h3>
      </div>

      <div className="flex justify-center">
        <h3 className="text-2xl text-[#737373]">Campwoo provides a distinguishable product features</h3>
      </div>
      
      <div className="mt-16 grid gap-4 grid-cols-3 grid-rows-3 md:place-content-center">
        <div class="flex items-center">
          <Img/>
          <div>
            <strong>Andrew Alfred</strong>
            <br></br>
            <span>Technical advisor</span>
          </div>
      </div>
      <div class="flex items-center">
        <Img2/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img3/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img4/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img5/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img6/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img7/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img8/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      <div class="flex items-center">
        <Img9/>
        <div>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>
      </div>
      

      <div className="flex justify-center mt-28">
        <h3 className="text-3xl font-bold">CAMPWOO DIAGRAM DISPLAY</h3>
      </div>

      <div class="flex justify-center gap-56">
  <div class="p-4">
    <Last1/>
    <div className='text-center'>
      <p class="text-lg font-semibold text-gray-800">Description 1</p>
      <p class="text-sm text-gray-600">Additional details for Image 1.</p>
      <button>Click On Me</button>
    </div>
  </div>

 
  <div class="p-4">
   <Last2/>
    <div className='text-center'>
      <p class="text-lg font-semibold text-gray-800">Description 2</p>
      <p class="text-sm text-gray-600">Additional details for Image 2.</p>
      <button>Click On Me</button>
    </div>
  </div>
</div>

<hr className="my-16 border-t-2 color-red" />

<div className='ml-28'>
  <h2 className='text-[#4c1d95] text-5xl font-bold tracking-widest'>CAMPWOO</h2>
  <br></br>

<div class="flex">
  <div class="w-1/4 p-4">
    <div class="text-left">
    <p>Camp Wood is on the Nueces River at the intersection of Farm Road 337 and State Highway 55, 
      just below Camp Wood Creek in far southwestern Real County. 
      The settlement was founded in 1920 by workers of the Uvalde Cedar 
      Company for the purpose of exploiting the abundant cedar in the area.</p>
    </div>
  </div>

</div>
<br></br>
<br></br>
<br></br>
  <div className='flex gap-16 '>
    <Linkedin/>
    <Twitter/>
    <Insta/>
    <Facebook/>
  </div>
</div>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br>
    </>
  );
}

export default Start;
