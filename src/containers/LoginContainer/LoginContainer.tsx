import { AuthButton, TextArea, Typography } from "@/components"
import { useGetTranslation } from "@/hooks"

export const LoginContainer = () => {
    const {
        translations: {
            TXT_LOGINPAGE
        }
    } = useGetTranslation()

    return (
        <div>
            <Typography
                className="text-[56px] font-alfa"
            >
                {TXT_LOGINPAGE.TITLE}
            </Typography>
            <TextArea />
            <AuthButton>
                Log in
            </AuthButton>
        </div>
    )
}

export default LoginContainer