import { useGetTranslation } from "@/hooks"
import { useFormik } from "formik"
import { TextArea } from "@/components"
import { publishSongFormSchema } from "./PublishSongForm.validation"

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
            className="flex flex-col gap-[50px]"
        >
            <div>
                <div>
                    {/* <input/> */}
                </div>
                <div>
                    <TextArea
                        name="authorName"
                        label={TXT_WORKSHOP_PAGE.AUTHOR_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.authorName}
                        error={formik.errors.authorName}
                    />
                    <TextArea
                        name="songName"
                        label={TXT_WORKSHOP_PAGE.SONG_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.songName}
                        error={formik.errors.songName}
                    />
                    <TextArea
                        name="albumName"
                        label={TXT_WORKSHOP_PAGE.ALBUM_NAME}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.albumName}
                        error={formik.errors.albumName}
                    />
                </div>
            </div>
            <button>
                {TXT_WORKSHOP_PAGE.PUBLISH_BUTTON}
            </button>
        </form>
    )
}

export default PublishSongForm