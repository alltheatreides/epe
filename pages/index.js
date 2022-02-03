import Image from 'next/image'
import AssetsSection from '../components/AssetsSection'
import HeroSection from '../components/HeroSection'
import StatisticsSection from '../components/StatisticsSection'

export default function Home() {
  return (
    <div className='home-wrapper'>
      <HeroSection></HeroSection>
      <AssetsSection id="homepage-image-bg" padding={"py-16"}></AssetsSection>
      <StatisticsSection></StatisticsSection>
    </div>
  )
}
