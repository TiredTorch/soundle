'use client'

import Link from "next/link"
import { useFormik } from "formik"
import { AuthButton, TextArea, Typography } from "@/components"
import { useGetTranslation } from "@/hooks"
import { AppRoutes } from "@/routes"
import { registerFormSchema } from "./RegisterForm.validation"

export const RegisterForm = () => {
  const {
    currentLanguage,
    translations: {
      TXT_FORMS,
      TXT_REGISTER_PAGE
    }
  } = useGetTranslation()

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: registerFormSchema(TXT_FORMS),
    onSubmit: console.log
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-[50px]"
    >
      <TextArea
        name="username"
        label={TXT_REGISTER_PAGE.USERNAME_FIELD}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextArea
        name="email"
        label={TXT_REGISTER_PAGE.EMAIL_FIELD}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextArea
        type="password"
        name="password"
        label={TXT_REGISTER_PAGE.PASSWORD_FIELD}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <div
        className="mt-[20px]"
      >
        <Link
          href={`/${currentLanguage}${AppRoutes.LOGIN}`}
          className="flex items-center justify-center"
        >
          <Typography
            className="text-[30px] italic font-thin hover:text-snd-gray-150 w-fit transition-colors"
          >
            {TXT_REGISTER_PAGE.NAVIGATE_TO_LOGIN}
          </Typography>
        </Link>
      </div>
      <AuthButton>
        {TXT_REGISTER_PAGE.BUTTON}
      </AuthButton>
    </form>
  )
}

export default RegisterForm