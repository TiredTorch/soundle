import { mixed, object, string } from "yup";
import { TranslationsStructureType } from "@/types";

export const publishSongFormSchema = (TXT_FORMS: TranslationsStructureType["TXT_FORMS"]) => object().shape({
    authorName: string().required(TXT_FORMS.REQUIRED),
    songName: string().required(TXT_FORMS.REQUIRED),
    albumName: string(),
    song: mixed().required(TXT_FORMS.REQUIRED),
    image: mixed()
})