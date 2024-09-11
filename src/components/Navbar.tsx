import Link from 'next/link'
import ModeToggle from './ModeToggle'
import { Icons } from './icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'
import { Dock, DockIcon } from './magicui/dock'
import { Separator } from './ui/separator'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import MediumIcon from 'public/medium_icon'

export function Navbar() {
  // store link name and href in an array
  // const links = [
  //   { name: 'Projects', href: '/#project' },
  //   { name: 'Blog', href: 'https://medium.com/@peterlq' },
  //   { name: 'Services', href: '/#service' },
  //   { name: 'About', href: '/#about' },
  // ]
  const data = {
    navbar: [
      { href: '/#', icon: HomeIcon, label: 'Home' },
      // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    ],
    contact: {
      email: 'hello@example.com',
      tel: '+123456789',
      social: {
        GitHub: {
          name: 'GitHub',
          url: 'https://github.com/peterlqs',
          icon: Icons.github,

          navbar: true,
        },
        LinkedIn: {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/quann',
          icon: Icons.linkedin,

          navbar: true,
        },
        X: {
          name: 'X',
          url: 'https://twitter.com/quann',
          icon: Icons.x,

          navbar: true,
        },
        // Youtube: {
        //   name: 'Youtube',
        //   url: 'https://dub.sh/dillion-youtube',
        //   icon: Icons.youtube,
        //   navbar: true,
        // },
        // email: {
        //   name: 'Send Email',
        //   url: 'mailto:nplongquan@gmail.com',
        //   icon: Icons.email,

        //   navbar: true,
        // },
        medium: {
          name: 'Medium',
          url: 'https://medium.com/@quann',
          icon: MediumIcon,
          navbar: true,
        },
      },
    },
  }

  // return (
  //   <nav
  //     className="w-fit bg-background z-50 flex justify-center items-center fixed top-6 left-1/2 -translate-x-1/2 p-2 px-6 border-2 rounded-full"
  //     aria-label="Main Navigation"
  //   >
  //     <ul className="flex items-center gap-4">
  //       {links.map((link) => (
  //         <li key={link.name}>
  //           <Link
  //             href={link.href}
  //             className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
  //             aria-label={link.name}
  //           >
  //             {link.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // )
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {data.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12')}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(data.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12')}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        {/* <Separator orientation="vertical" className="h-full py-2" /> */}
        {/* <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon> */}
      </Dock>
    </div>
  )
}
