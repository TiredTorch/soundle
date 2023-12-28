import { useGetTranslation } from "@/hooks"
import Image from "next/image"
import { useFormik } from "formik"
import { FileInput, TextArea } from "@/components"
import { publishSongFormSchema } from "./PublishSongForm.validation"
import plusSign from "@/assets/icons/add-workshop.png"

export const PublishSongForm = () => {
    const {
        translations: {
          TXT_FORMS,
          TXT_WORKSHOP_PAGE
        }
      } = useGetTranslation()
    
      const formik = useFormik({
        initialValues: {
            authorName: "",
            songName: "",
            albumName: "",
            song: undefined,
            image: undefined
        },
        validationSchema: publishSongFormSchema(TXT_FORMS),
        onSubmit: console.log
      }) 
    
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-[50px] justify-between p-[50px] min-h-max-view pb-[150px]"
        >
            <div
                className="flex justify-between gap-[40px] h-3/5"
            >
                <div
                    className="min-w-[500px] min-h-[500px]"
                >
                    <FileInput
                        accept="image/*"
                    >
                        <div
                            className="w-[250px] h-[250px] relative"
                        >
                            <Image
                                fill
                                src={plusSign}
                                alt="plusSign"
                            />
                        </div>
                    </FileInput>
                </div>
                <div
                    className="bg-snd-gray-300 bg-opacity-40 w-full flex flex-col justify-between"
                >
                    <TextArea
                        inputClassname="placeholder:text-snd-gray-800 pl-[10px]"
                        errorClassname="pl-[10px]"
                        name="authorName"
                        placeholder={TXT_WORKSHOP_PAGE.AUTHOR_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.authorName}
                        error={formik.errors.authorName}
                    />
                    <TextArea
                        inputClassname="placeholder:text-snd-gray-800 pl-[10px]"
                        errorClassname="pl-[10px]"
                        name="songName"
                        placeholder={TXT_WORKSHOP_PAGE.SONG_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.songName}
                        error={formik.errors.songName}
                    />
                    <TextArea
                        inputClassname="placeholder:text-snd-gray-800 pl-[10px]"
                        errorClassname="pl-[10px]"
                        name="albumName"
                        placeholder={TXT_WORKSHOP_PAGE.ALBUM_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.albumName}
                        error={formik.errors.albumName}
                    />
                    <div>
                        <FileInput
                            accept="audio/*"
                        >
                            <div
                                className="p-5 text-[30px] font-playfair"
                            >
                                {TXT_WORKSHOP_PAGE.SELECT_SONG}
                            </div>
                        </FileInput>
                    </div>
                </div>
            </div>
            <button
                className="h-2/5 text-[42px] bg-snd-gray-300 font-playfair py-[10px] font-bold hover:bg-snd-gray-500 transition-colors"
            >
                {TXT_WORKSHOP_PAGE.PUBLISH_BUTTON}
            </button>
        </form>
    )
}

export default PublishSongForm