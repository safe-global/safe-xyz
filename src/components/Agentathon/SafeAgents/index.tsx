import ButtonsWrapper from '@/components/Agentathon/ButtonsWrapper'
import type { BaseBlock } from '@/types/common'
import css from './style.module.css'

const SafeAgents = ({ image, buttons }: BaseBlock) => (
  <section className={css.sectionContainer}>
    <div className={css.videoWrapper}>
      <video autoPlay muted playsInline loop className={css.video}>
        <source src="./videos/Agentathon/agents.mp4" type="video/mp4" />
      </video>

      {image && <img src={image.src} alt={image.alt} className={css.image} />}
    </div>

    <img src="/images/Agentathon/build-safe-agents.png" alt="Build Safe Agents" className={css.buildSafeAgents} />

    <ButtonsWrapper buttons={buttons} mobileDirection="row" />
  </section>
)

export default SafeAgents
