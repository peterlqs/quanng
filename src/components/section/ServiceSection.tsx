import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import { Separator } from '../ui/separator'

export default function ServiceSection() {
  return (
    <section className="rounded-3xl text-primary">
      <div className="padding-global">
        <h2 className=" mb-12 md:mb-20 text-start">Services</h2>
        {/* <StickyScroll content={content} /> */}
        {/* <div className="flex flex-col gap-8 justify-around"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 py-4">
          {content.map((item, index) => (
            <div key={index} className="flex flex-col gap-16 border-l p-4 justify-between">
              <div className="flex flex-col gap-4">
                <h3>{item.title}</h3>
                <div className="text-xl text-slate-200">{item.description}</div>
              </div>
              <div className="self-end text-end">
                {item.categories.map((category, index) => (
                  <p key={category + index} className="text-xl">
                    {category}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const content = [
  {
    title: 'Web Design',
    description:
      'Responsive, accessible, and aesthetically pleasing websites that align with your brand',
    categories: ['UI/UX Design', 'Responsive', 'Accessiblity'],
  },
  {
    title: 'Web Development',
    description:
      'Custom web solutions using the latest technologies, ensuring high performance and seamless functionality',
    categories: ['Analytics', 'Animation', 'CMS Integration'],
  },
  {
    title: 'SEO',
    description: 'Improve your website visibility and search engine rankings',
    categories: ['Technical SEO', 'Page Speed', 'Mobile Optimization'],
  },
]
