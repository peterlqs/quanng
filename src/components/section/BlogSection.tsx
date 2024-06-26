import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image, { StaticImageData } from 'next/image'
import { Media } from 'payload-types'
import { Badge } from '../Badge'
import { Button } from '../ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default async function BlogSection() {
  const payload = await getPayloadHMR({ config })
  const data = await payload.find({
    collection: 'blogs',
  })
  return (
    <section>
      <div className="padding-global">
        <h2 className=" mb-12 md:mb-20 text-start">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.docs.map((blog, index) => (
            <div
              key={blog.title + index}
              className="bg-background rounded border-b w-full flex flex-col gap-10 pt-4 pb-8 px-4 border"
            >
              {typeof blog.image === 'object' &&
                (() => {
                  const { image } = blog
                  const filename = image.filename as string
                  // console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}${image.url}`)
                  // const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`
                  const url = `/media/${filename}`

                  // const url = image.url || ''

                  return (
                    <Link href={blog.Link} className="">
                      <div className="relative w-full">
                        <AspectRatio ratio={4 / 3}>
                          <Image
                            src={url}
                            alt={blog.image.alt || blog.title}
                            fill={true}
                            sizes="100%"
                            objectFit="cover"
                            className="rounded border"
                          />
                        </AspectRatio>
                      </div>
                    </Link>
                  )
                })()}

              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <Link href={blog.Link} className="hover:text-slate-400">
                      <h3 className="mb-2">{blog.title}</h3>
                    </Link>
                  </div>
                  <p className="text-xl mt-4 mb-4 max-w-xl">{blog.shortDescription}</p>
                </div>
                <div className="flex flex-row gap-2 flex-wrap mt-4 mb-8 ">
                  {blog.blogCategory?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category
                      const categoryTitle = titleFromCategory || 'Untitled category'
                      return (
                        <p key={index} className="px-2 py-1 bg-secondary rounded w-fit">
                          {categoryTitle}
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
