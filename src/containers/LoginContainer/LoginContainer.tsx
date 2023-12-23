import { LoginForm, Typography } from "@/components"
import { useGetTranslation } from "@/hooks"

export const LoginContainer = () => {
    const {
        translations: {
            TXT_LOGIN_PAGE
        }
    } = useGetTranslation()

    return (
        <div>
            <Typography
                className="text-[56px] font-alfa mb-[160px]"
            >
                {TXT_LOGIN_PAGE.TITLE}
            </Typography>
            <LoginForm/>
        </div>
    )
}

export default LoginContainer