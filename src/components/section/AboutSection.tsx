import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section>
      <div className="padding-global">
        <h2 className=" mb-12 md:mb-20 text-start">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-xl md:text-4xl">
            My name is Long Quân, also known as Peter. I am currently studying IT at Macquarie
            University. <br />
            <br /> I enjoy a variety of things, like web design, development, data science, and
            keeping up with the latest from OpenAI.
            <br />
            <br /> You will find me binging on Netflix, scrolling through YouTube, listening to
            music, strumming my guitar 🎸.
          </div>
          <div className="relative w-[200px] md:w-[400px] mx-auto md:mx-0 md:ml-auto order-first md:order-last">
            <AspectRatio ratio={4 / 5}>
              <Image
                src={'/quan.JPEG'}
                alt={'Picture of Quan'}
                fill={true}
                sizes="100%"
                objectFit="cover"
                className="rounded border grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
