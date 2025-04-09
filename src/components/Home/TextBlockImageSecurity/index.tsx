import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'
import SecurityElement from '@/components/Home/TextBlockImageSecurity/SecurityElement'

const TextBlockImageSecurity = (props: TextBlockImageProps) => (
  <TextBlockImage {...props}>
    <SecurityElement image={props.image} />
  </TextBlockImage>
)

export default TextBlockImageSecurity
