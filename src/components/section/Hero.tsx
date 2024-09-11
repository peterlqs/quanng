import { LinkedinIcon, MoveDownIcon, MoveDownLeft, MoveDownRightIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import MediumIcon from 'public/medium_icon'
import TimeWidget from '../TimeWidget'
import BlurFadeText from '../magicui/blur-fade-text'
import BlurFade from '../magicui/blur-fade'

export default function Hero() {
  //d
  return (
    <section>
      <div className="min-h-svh -z-30"></div>
      <div className="min-h-svh w-full flex items-center justify-center fixed top-0 z-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="content-center order-last md:order-first">
            <BlurFade>
              <div className="relative sm:w-[250px] w-full sm:h-[320px] h-52 border rounded-xl">
                <Image
                  src="/lowerres.png"
                  alt="Hero"
                  // width={250}
                  // height={320}
                  fill
                  priority
                  className="shadow-lg rounded-xl grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition duration-300 ease-in-out scale-x-[-1] opacity-90 mx-auto object-cover bottom"
                />
              </div>
              <div className="w-fit mx-auto flex gap-2 items-center border rounded-lg mt-6 px-4 py-2">
                {/* Green dot icon */}
                Open for work
                <div className="w-2 h-2 bg-green-500 border rounded-full"></div>
                {/* <a
                href="https://www.linkedin.com/in/quann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/quann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter/X</span>
              </a>

              <a
                href="https://medium.com/@quann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <MediumIcon />
                <span className="sr-only">Medium</span>
              </a> */}
              </div>
            </BlurFade>
          </div>

          <h1 className="flex flex-col gap-6">
            <span className="text-2xl md:text-4xl">
              <BlurFadeText text="Hi, I'm Quan." />
            </span>
            <span className="text-6xl md:text-9xl font-bold">
              {/* Designer &<br /> Developer */}
              <BlurFadeText text="Designer" />
              <BlurFadeText text="Developer" />
            </span>
            <p className="text-2xl md:text-4xl self-end">
              <BlurFadeText text="Based in Sydney" />
            </p>
          </h1>
        </div>
        <div className="dark:text-slate-200 text-slate-800 text-sm opacity-0 md:opacity-100">
          <div className="absolute right-0 bottom-0 text-end p-4">
            <BlurFade>
              {' '}
              {/* Sydney Coordinate */}
              -33.8688° S<br />
              151.2093° E<br />
            </BlurFade>
          </div>
          <div className="absolute bottom-0 left-0 text-start p-4">
            <BlurFade>
              AEST <br />
              <TimeWidget />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
