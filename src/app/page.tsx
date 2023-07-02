"use client";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillYoutube, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import vikiAvatar from "../../public/virtual-profile.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"light"|"dark">("dark");
  const onModeChange = () => {
    console.log("Mode: " + mode)
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <h1 className="font-burtons text-xl">ARTSy Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                  onClick={onModeChange}
                  className="cursor-pointer text-xl" />
              </li>
              <li>
                <a href="#" className="bg-gradient-to-br from-cyan-500 to-teal-600
                text-white px-4 py-2 rounded-tl-xl rounded-br-xl ml-8">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 mt-40">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Vinay Kumar Giri</h2>
            <h3 className="text-2xl py-2 md:text-3xl">3D Artist, VFX Designer and Generalist</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-lg mx-auto">
              Freelancer providing graphical designs for videos with a passion for expressive visual effects 
              and a penchant for eye capturing 3D artistry
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-slate-500">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto mt-10 flex justify-center bg-gradient-to-b from-cyan-500 to-white rounded-full w-96 h-96 overflow-hidden">
            <Image src={vikiAvatar} style={{ objectFit: "cover", scale: "80%" }} fill alt="AlterEgo"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as VFX Designer at the Pixeloid institute, I have designed and developed for various 
              <span className="text-teal-500"> agencies</span> and consulted for <span className="text-teal-500">multimedia firms</span> and collaborated with talented people to 
              build mesmerizing 2D and 3D art.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center flex items-center flex-col shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} height={100} width={100} alt="" />
              <h3 className="text-xl font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-2">Photoshop</p>
              <p className="text-gray-800 py-2">Illustrator</p>
              <p className="text-gray-800 py-2">Figma</p>
            </div>
            <div className="text-center flex items-center flex-col  shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} height={100} width={100} alt="" />
              <h3 className="text-xl font-medium pt-8 pb-2">VFX Designs</h3>
              <p className="py-2">Creating elegant designs suited for your design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-2">Unreal Engine</p>
              <p className="text-gray-800 py-2">Maya</p>
              <p className="text-gray-800 py-2">Nuke</p>
            </div>
            <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} height={100} width={100} alt="" />
              <h3 className="text-xl font-medium pt-8 pb-2">Elegant Development</h3>
              <p className="py-2">Developing models and </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-2">Photoshop</p>
              <p className="text-gray-800 py-2">Illustrator</p>
              <p className="text-gray-800 py-2">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as VFX Designer at the Pixeloid institute, I have designed and developed for various
              <span className="text-teal-500">agencies</span> and consulted for <span className="text-teal-500">multimedia firms</span> and collaborated with talented people to 
              build mesmerizing 2D and 3D art.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image 
                src={web1}
                className="rounded-lg object-cover w-full h-full"
                alt="web1"
                sizes="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image 
                src={web2}
                className="rounded-lg object-cover w-full h-full"
                alt="web2"
                sizes="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image 
                src={web3}
                className="rounded-lg object-cover w-full h-full"
                sizes="responsive"
                alt="web3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image 
                src={web4}
                className="rounded-lg object-cover w-full h-full"
                alt="web4"
                sizes="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image 
                src={web5}
                className="rounded-lg object-cover w-full h-full"
                alt="web5"
                sizes="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image 
                src={web6}
                className="rounded-lg object-cover w-full h-full"
                alt="web6"
                sizes="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
    
  )
}
