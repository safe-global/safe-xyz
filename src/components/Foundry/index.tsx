import CenteredTextBlock from '@/components/common/CenteredTextBlock'
import Hero from '@/components/Foundry/Hero'
import POCs from '@/components/Foundry/POCs'
import Faq from '@/components/common/Faq'

const faqItems = [
  {
    title: 'Are these POCs ready to be integrated on my (d)app?',
    text: 'The listed POCs are experimental solutions aimed at addressing major UX challenges. They are not audited and are not designed for large-scale use but can serve as a starting point for further development.',
  },
  {
    title: 'How can I build with Safe?',
    text: `We required teams to fill the form. Safe will follow up depending on the company's priorities and bandwidth.`,
  },
]

const Foundry = () => (
  <div>
    <Hero />
    <POCs />
    <CenteredTextBlock
      title={
        <>
          Ready to build <b>the future</b> of cross chain?
        </>
      }
      text=""
      buttons={[{ text: 'Build with Safe', href: 'https://docs.safe.global/home/what-is-safe', variant: 'button' }]}
    />
    <Faq items={faqItems} />
  </div>
)

export default Foundry
