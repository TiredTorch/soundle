import { useParams } from "next/navigation"
import en from "@/i18n/en.json"
import ru from "@/i18n/ru.json"

const translations = { 
    en,
    // ru
}

export const useGetTranslation = () => {
    
    const data = {
        translations: translations["en"],
        currentLanguage: "en"
    }
    
    const params = useParams()

    const currentLanguage = params?.["lang"] as string | undefined

    if (currentLanguage && currentLanguage in translations) {
        data.currentLanguage = currentLanguage
        data.translations = translations?.[currentLanguage as keyof typeof translations]
    } 

    return data
}