import { FC, PropsWithChildren } from "react"

export const AuthFormWrapper: FC<PropsWithChildren> = ({
    children
}) => {
  return (
    <div
        className="min-w-max-view min-h-max-view flex flex-wrap"
    >
        <div
            className="min-h-max-view bg-snd-gray-500 w-1/3 min-w-[300px] p-6"
        >
            {children}
        </div>
        <div
            className="min-h-max-view w-1/5 bg-gradient-to-r from-snd-gray-500 to-transparent"
        />
    </div>
  )
}

export default AuthFormWrapper