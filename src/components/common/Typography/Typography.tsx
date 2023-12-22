import { TypographyComponentProps } from "./Typography.types"

export const Typography: TypographyComponentProps = ({
    children,
    ...rest
}) => {
  return (
    <div
      {...rest}
    >
        {children}
    </div>
  )
}

export default Typography