import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  type AccordionProps,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import PlusIcon from '@/public/images/plus-sign-icon.svg'
import MinusIcon from '@/public/images/minus-sign-icon.svg'
import { BaseBlock } from '@/types/common'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Faq = ({ items }: Pick<BaseBlock, 'items'>) => {
  // Tracks which accordion is open
  const [openMap, setOpenMap] = useState<Record<number, boolean>>()

  return (
    <Container className={layoutCss.container}>
      <Grid container className={css.gridContainer}>
        <div className={css.spot} />

        <Grid size={{ md: 5 }} width="100%">
          <Typography variant="h1">FAQ</Typography>
        </Grid>

        <Grid size={{ md: 7 }}>
          {items?.map((item, index) => {
            const { title, text } = item

            const handleChange: AccordionProps['onChange'] = (_, expanded) => {
              setOpenMap((prev) => ({
                ...prev,
                [index]: expanded,
              }))
            }
            const expanded = openMap?.[index] ?? false

            return (
              <Accordion
                className={css.accordion}
                expanded={expanded}
                onChange={handleChange}
                key={index}
                disableGutters
                square
              >
                <AccordionSummary expandIcon={expanded ? <MinusIcon /> : <PlusIcon />}>
                  <Typography variant="h5">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={css.details}>{text && <Typography>{text}</Typography>}</AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Faq
