import React from 'react'
import Spline from '@splinetool/react-spline';
import Glitch from 'components/Typography/Glitch'
import Link from 'next/link';
import { Howl} from 'howler';
import { useState, useEffect } from 'react';
import CrazyButton from 'components/Buttons/CrazyButton';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { AiOutlineMedium, AiOutlineMail } from 'react-icons/ai'
import Head from 'next/head'



const Home = () => {
  const Welcome = 'Welcome my Playground';
  const [sound, setSound] = useState(null);
  const soundUrl = '/Wellcum.mp3';

  useEffect(() => {
    setSound(new Howl({
      src: [soundUrl],
      loop: true,
    }));
  }, []);

  useEffect(() => {
    if (sound) {
      sound.play(); 
    }
  }, [sound]);

  return (
    <div className=' h-[1920px]'>
      <Head>
        <title>Zedit Playground</title>
        <meta name="description" content="Welcome to Zedit Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' h-screen w-full bg-[#00FF85]  max-sm:scale-125 fixed'>
        <Spline scene="https://prod.spline.design/zcSPwaiIs-kQzqrS/scene.splinecode" className=' scale-125  ' />
        <div className=' absolute w-full select-none text-center z-20 top-[35%] '> 
          <div className=' space-y-10'>
            <Glitch text={Welcome}/> 
            <Link href={'/Introduction'}>
              <CrazyButton/>            
            </Link>

          </div> 
        </div>
      </div>
      {/* Footer */}
      <div className=' fixed  bottom-0 w-full px-[2rem] pb-[1rem] '>
        <div className=' flex max-sm:flex-col max-sm:items-end justify-between mt-[1rem] select-none'>
            <Link className=' flex italic' href={'https://www.linkedin.com/in/yi%C4%9Fit-berhan-g%C3%BClabig%C3%BCl-607023244/'}>
                Yiğit Berhan Gülabigül
            </Link>
            <div className=" italic bg-cover bg-clip-text bg-center text-transparent text-sm font-extrabold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}>
              Frontend Developer
            </div>
            <div className='flex scale-150 max-sm:scale-100 gap-3'>
              <Link href={'https://twitter.com/Zedit42'}>
                <BsTwitter/>
              </Link>
              <Link href={'https://medium.com/@Zedit'}>
                <AiOutlineMedium/>              
              </Link>
              <Link href={'https://github.com/Zedit42'}>
                <BsGithub/>              
              </Link>
              <address>
                <a href='mailto:ygtglbgl@gmail.com'>
                  <AiOutlineMail/>                     
                </a>
              </address>

            </div>
        </div>
      </div>
    </div>

  )
}

export default Home