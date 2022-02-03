import Image from 'next/image'
import AssetsSection from '../components/AssetsSection'
import HeroSection from '../components/HeroSection'
import StatisticsSection from '../components/StatisticsSection'

export default function Home() {
  return (
    <div className='my-4'>
      <HeroSection></HeroSection>
      <AssetsSection></AssetsSection>
      <StatisticsSection></StatisticsSection>
    </div>
  )
}
