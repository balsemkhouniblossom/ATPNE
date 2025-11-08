import Hero from '@/components/home/Hero'
import NewsSection from '@/components/home/NewsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <NewsSection />
      <ProjectsSection />
      <CallToAction />
    </div>
  )
}
