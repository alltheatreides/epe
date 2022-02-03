import AssetCategories from '../components/AssetCategories'
import HeroSection from '../components/HeroSection'
import StatisticsArticle from '../components/StatisticsArticle'

export default function Home() {
  return (
    <section className=' my-4'>      
      <HeroSection></HeroSection>
      <AssetCategories></AssetCategories>
      <StatisticsArticle></StatisticsArticle>
    </section>
  )
}
