import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image, { StaticImageData } from 'next/image'
import { Media } from 'payload-types'
import { Badge } from '../Badge'
import { Button } from '../ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectSection() {
  const payload = await getPayloadHMR({ config })
  const data = await payload.find({
    collection: 'projects',
  })

  return (
    <section id="project">
      <div className="padding-global">
        <h2 className="mb-12 md:mb-20 text-start">Selected Work</h2>
        {/* Projects */}
        {/* <div className="flex flex-col gap-4 "> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {data.docs.map((project, index) => (
            <div
              key={project.title + index}
              className="bg-background rounded border-b w-full flex flex-col gap-10 py-4"
            >
              {typeof project.gallery![0].image === 'object' &&
                (() => {
                  const { image } = project.gallery![0]
                  const filename = image.filename as string
                  // console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}${image.url}`)
                  // const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`
                  const url = `/media/${filename}`
                  // const url = image.url || ''

                  return (
                    <div className="relative w-full">
                      <AspectRatio ratio={4 / 3}>
                        <Image
                          src={url}
                          // src="http://localhost:3000/media/blog_datafest.jpg"
                          alt={project.gallery![0].image.alt || project.title}
                          fill={true}
                          sizes="100%"
                          objectFit="cover"
                          className="rounded border"
                        />
                      </AspectRatio>
                    </div>
                  )
                })()}

              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="mb-2">{project.title}</h3>
                  <Link href={project.link} target="_blank">
                    <Button variant={'outline'} size={'default'}>
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">Link to the project website</span>
                    </Button>
                  </Link>
                </div>
                <p className="text-xl mt-4 mb-4 max-w-xl">{project.shortDescription}</p>
                <div className="flex flex-row gap-2 flex-wrap mt-4 mb-8">
                  {project.projectCategory?.map((category, index) => {
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
