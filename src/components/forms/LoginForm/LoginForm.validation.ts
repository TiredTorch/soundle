import { TranslationsStructureType } from "@/types";
import { object, string } from "yup";

export const loginFormSchema = (TXT_FORMS: TranslationsStructureType["TXT_FORMS"]) => object().shape({
    login: string().required(TXT_FORMS.REQUIRED),
    password: string().required(TXT_FORMS.REQUIRED)
})