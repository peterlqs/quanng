import Link from 'next/link'
import ModeToggle from './ModeToggle'

export function Navbar() {
  // store link name and href in an array
  const links = [
    { name: 'Projects', href: '/#project' },
    { name: 'Blog', href: 'https://medium.com/@peterlq' },
    { name: 'Services', href: '/#service' },
    { name: 'About', href: '/#about' },
  ]
  return (
    <nav
      className="w-fit bg-background z-50 flex justify-center items-center fixed top-6 left-1/2 -translate-x-1/2 p-2 px-6 border-2 rounded-full"
      aria-label="Main Navigation"
    >
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
