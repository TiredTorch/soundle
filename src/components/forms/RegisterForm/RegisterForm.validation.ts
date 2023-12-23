import { TranslationsStructureType } from "@/types";
import { object, string } from "yup";

export const registerFormSchema = (TXT_FORMS: TranslationsStructureType["TXT_FORMS"]) => object().shape({
    username: string().required(TXT_FORMS.REQUIRED),
    email: string().required(TXT_FORMS.REQUIRED).email(TXT_FORMS.EMAIL),
    password: string().required(TXT_FORMS.REQUIRED)
})