import { ArrowUpRight, LinkedinIcon, MailIcon, Twitter } from 'lucide-react'
import MediumIcon from 'public/medium_icon'
import { Button } from '../ui/button'

export default function ContactSection() {
  return (
    <section id="contact" className="padding-global flex flex-col justify-center bg-white">
      <a href="mailto:nplongquan@gmail.com" className="mx-auto">
        <Button className="h-fit w-fit p-8 flex justify-start flex-col items-center">
          (contact)
          <p className="text-4xl md:text-9xl text-center">Quan Ng</p>
          {/* <ArrowUpRight className="h-24 w-24" /> */}
          <span className="sr-only">Contact Quan through email</span>
        </Button>
      </a>
    </section>
  )
}
