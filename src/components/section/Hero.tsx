import { LinkedinIcon, MoveDownIcon, MoveDownLeft, MoveDownRightIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import MediumIcon from 'public/medium_icon'
import TimeWidget from '../TimeWidget'

export default function Hero() {
  //d
  return (
    <section>
      <div className="min-h-svh -z-30"></div>
      <div className="min-h-svh w-full flex items-center justify-center fixed top-0 z-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="content-center order-last md:order-first">
            <div className="border rounded-xl">
              <Image
                src="/notion_pfp.png"
                alt="Hero"
                width={250}
                height={550}
                className="rounded-xl dark:invert opacity-90 mx-auto"
              />
            </div>
            <div className="w-fit mx-auto flex gap-2 items-center border rounded-lg mt-4 px-4 py-2">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/quann" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/quann" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </a>
              {/* Medium */}
              <a href="https://medium.com/@quann" target="_blank" rel="noopener noreferrer">
                <MediumIcon />
              </a>
            </div>
          </div>
          <h1 className="flex flex-col gap-6">
            <span className="text-2xl md:text-4xl ">👋 I am Quan</span>
            <span className="text-6xl md:text-9xl font-bold">
              Designer &<br /> Developer
            </span>
            <p className="text-2xl md:text-4xl self-end">based in Sydney</p>
          </h1>
        </div>
        <div className="dark:text-slate-200 text-slate-800 text-sm">
          <div className="absolute right-0 bottom-0 text-end p-4">
            {' '}
            {/* Sydney Coordinate */}
            -33.8688° S<br />
            151.2093° E<br />
            <TimeWidget />
          </div>
          <div className="absolute bottom-0 left-0 text-start p-4 items-center flex gap-2">
            <p>
              Available for <br />
              freelancing
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-end p-4 items-center flex gap-2">
            <p>scroll down</p>
            {/* <MoveDownIcon className="h-6 w-6 " /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
