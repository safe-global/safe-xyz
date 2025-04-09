import { Container, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import LinkButton from '@/components/common/LinkButton'
import { type BaseBlock } from '@/types/common'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import CategoryIcon from '@/public/images/category-icon.svg'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const BlogCard = ({ title, link, image, isBig = false }: Partial<BaseBlock> & { isBig?: boolean }) => (
  <div className={css.cardWrapper}>
    <div className={css.outline}>
      <div className={css.card}>
        <div className={`${css.cardHeader} ${isBig ? css.main : ''}`}>
          {image ? <img src={image.src} alt={image.alt} /> : undefined}
        </div>

        <div className={css.cardBody}>
          <div className={css.category}>
            <CategoryIcon />
            <Typography variant="caption" color="text.primary">
              Use case
            </Typography>
          </div>

          <Typography variant="h4" className={`${css.title} ${isBig ? css.main : ''}`}>
            {title}
          </Typography>
        </div>

        {link ? (
          <LinkButton underline={false} fullSize href={link.href}>
            {link.title}
          </LinkButton>
        ) : undefined}

        <ArrowIcon className={css.arrow} />
      </div>
    </div>
  </div>
)

type BlogUseCasesProps = BaseBlock & { mainCard: Partial<BaseBlock> }

const BlogUseCases = ({ caption, title, text, buttons, mainCard, items }: BlogUseCasesProps) => (
  <div className={css.bg}>
    <Container className={layoutCss.containerMedium} style={{ marginBottom: '50px' }}>
      {caption && (
        <Typography variant="caption" component="div">
          {caption}
        </Typography>
      )}
      <Grid container columnSpacing={2} rowGap="30px" justifyContent="space-between" mt="32px">
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={{ xs: 3, md: 4 }}
        >
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h5" className={css.textBlock}>
            {text}
          </Typography>

          <ButtonsWrapper buttons={buttons} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <BlogCard {...mainCard} isBig />
        </Grid>
      </Grid>

      <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
        {items?.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
)

export default BlogUseCases
