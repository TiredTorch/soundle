'use client'

import Image from "next/image"
import { AuthFormWrapper } from "@/components"
import authBackground from "@/assets/images/auth-background.png"
import { useGetTranslation } from "@/hooks"
import { useTypedSelector } from "@/redux"
import { useEffect } from "react"
import { redirect } from "next/navigation"
import { AppRoutes } from "@/routes"

const PublicRouteLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const {
      currentLanguage
    } = useGetTranslation()

    const currentUser = useTypedSelector(store => store.authSlice.currentUser)

    useEffect(() => {
      if (currentUser) {
        redirect(`/${currentLanguage}${AppRoutes.DASHBOARD}`)
      }
    }, [
      currentUser, 
      currentLanguage
    ])

    return (
        <div
          className="min-h-max-view max-h-max-view min-w-max-view max-w-max-view"
        >
          <AuthFormWrapper>
            {children}
          </AuthFormWrapper>
          <div
                className="min-h-full min-w-[1300px] absolute top-0 right-0 z-[-1]"
            >
              <Image
                  priority
                  fill
                  alt="auth-bg"
                  src={authBackground}
                  style={{
                      zIndex: -1
                  }}
              />
            </div>
        </div>
    )
}

export default PublicRouteLayout