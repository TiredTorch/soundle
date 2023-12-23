'use client'

import Link from "next/link"
import Image from "next/image"
import { useFormik } from "formik"
import { AuthButton, TextArea, Typography } from "@/components"
import { useGetTranslation } from "@/hooks"
import { AppRoutes } from "@/routes"
import { loginFormSchema } from "./LoginForm.validation"
import googleIcon from "@/assets/icons/google.png"

export const LoginForm = () => {
  const {
    currentLanguage,
    translations: {
      TXT_FORMS,
      TXT_LOGIN_PAGE
    }
  } = useGetTranslation()

  const formik = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    validationSchema: loginFormSchema(TXT_FORMS),
    onSubmit: console.log
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-[80px]"
    >
      <TextArea
        name="login"
        label={TXT_LOGIN_PAGE.LOGIN_FIELD}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
        error={formik.errors.login}
      />
      <TextArea
        type="password"
        name="password"
        label={TXT_LOGIN_PAGE.PASSWORD_FIELD}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <div
        className="mt-[50px]"
      >
        <Link
          href={`/${currentLanguage}${AppRoutes.REGISTER}`}
          className="flex items-center justify-center"
        >
          <Typography
            className="text-[30px] italic font-thin hover:text-snd-gray-150 w-fit transition-colors"
          >
            {TXT_LOGIN_PAGE.NAVIGATE_TO_REGISTER}
          </Typography>
        </Link>
      </div>
      <div
        className="flex gap-[14px]"
      >
        <AuthButton>
          {TXT_LOGIN_PAGE.BUTTON}
        </AuthButton>
        <AuthButton
          type="button"
          className="flex-shrink-[3] p-[15px]"
        >
          <div
            className="w-full h-full relative"
          >
            <Image
              src={googleIcon}
              fill
              alt="googleIcon"
              />
          </div>
        </AuthButton>
      </div>
    </form>
  )
}

export default LoginForm