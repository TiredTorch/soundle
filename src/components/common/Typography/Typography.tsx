import { TypographyComponentProps } from "./Typography.types"

export const Typography: TypographyComponentProps = ({
    children,
    className,
    ...rest
}) => {
  return (
    <div
      {...rest}
      className={`font-playfair ${className}`}
    >
        {children}
    </div>
  )
}

export default Typography