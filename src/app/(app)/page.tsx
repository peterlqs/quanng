import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'
import AlertBox from '@/components/AlertBox'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import payload from 'payload'
import { Card, CardContent } from '@/components/ui/card'
import Hero from '@/components/section/Hero'
import ProjectSection from '@/components/section/ProjectSection'
import ServiceSection from '@/components/section/ServiceSection'
import MissionSection from '@/components/section/MissionSection'
import BlogSection from '@/components/section/BlogSection'
import AboutSection from '@/components/section/AboutSection'
import ContactSection from '@/components/section/ContactSection'

export default async function Page() {
  // const payload = await getPayloadHMR({ config })
  // const data = await payload.find({
  //   collection: 'blogs',
  // })
  return (
    <>
      <main>
        <Hero />
        <div className="z-20 relative">
          <div className="bg-background rounded-xl md:rounded-3xl dark mx-auto max-w-[1920px] text-primary pb-4">
            <MissionSection />
            <ProjectSection />
            <ServiceSection />
            <BlogSection />
            <AboutSection />
          </div>
          <ContactSection />
        </div>
      </main>
    </>
  )
}
