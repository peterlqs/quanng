import { ArrowUpRight, LinkedinIcon, MailIcon, Twitter } from 'lucide-react'
import MediumIcon from 'public/medium_icon'
import { Button } from '../ui/button'

export default function ContactSection() {
  return (
    <section className="padding-global flex flex-col justify-center bg-white">
      <a href="mailto:nplongquan@gmail.com" className="mx-auto">
        <Button className="h-fit w-fit p-8 flex justify-start flex-col items-center">
          (contact)
          <p className="text-4xl md:text-9xl text-center">QUAN-NG</p>
          {/* <ArrowUpRight className="h-24 w-24" /> */}
        </Button>
      </a>

      <div className="w-fit mx-auto flex gap-2 items-center border rounded-lg mt-8 px-4 py-2">
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
    </section>
  )
}
