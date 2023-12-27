'use client'

import { useFormik } from "formik"
import { useGetTranslation } from "@/hooks"
import { sendMessageFormSchema } from "./SendMessageForm.validation"

export const SendMessageForm = () => {
  const {
    translations: {
      TXT_FRIENDS_PAGE
    }
  } = useGetTranslation()

  const formik = useFormik({
    initialValues: {
      message: ""
    },
    validationSchema: sendMessageFormSchema(),
    onSubmit: console.log
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-row w-full justify-between h-[65px] font-playfair"
    >
        <button
            className="bg-snd-gray-500 min-w-[65px]"
        >
            a
        </button>
        <input
            name="message"
            placeholder={TXT_FRIENDS_PAGE.SEND_MESSAGE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="bg-snd-gray-800 w-full outline-none shadow-none text-[26px] pl-[10px]"
        />
        <button
            className="bg-snd-gray-800 ml-[10px] min-w-[65px] rounded-full h-[65px]"
        >
            a
        </button>
      
    </form>
  )
}

export default SendMessageForm