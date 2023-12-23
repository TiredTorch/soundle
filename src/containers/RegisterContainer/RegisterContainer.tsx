import { RegisterForm, Typography } from "@/components"
import { useGetTranslation } from "@/hooks"

export const RegisterContainer = () => {
    const {
        translations: {
            TXT_REGISTER_PAGE
        }
    } = useGetTranslation()

    return (
        <div>
            <Typography
                className="text-[56px] font-alfa mb-[80px]"
            >
                {TXT_REGISTER_PAGE.TITLE}
            </Typography>
            <RegisterForm/>
        </div>
    )
}

export default RegisterContainer