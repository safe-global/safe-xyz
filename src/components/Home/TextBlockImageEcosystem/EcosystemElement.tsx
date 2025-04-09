import { type BaseBlock } from '@/types/common'
import css from './styles.module.css'

const EcosystemElement = ({ image }: { image: BaseBlock['image'] }) => (
  <div className={css.imageWrapper}>
    <img src="/images/Home/manifesto-bg.png" alt="Particles background" className={css.bgImage} />

    {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
  </div>
)

export default EcosystemElement
