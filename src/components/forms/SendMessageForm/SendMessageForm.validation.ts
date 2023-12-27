import { object, string } from "yup";

export const sendMessageFormSchema = () => object().shape({
    message: string().required()
})