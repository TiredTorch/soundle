'use client'

import { useEffect } from "react"
import { redirect } from "next/navigation"
import { BottomMusicBar, Navbar } from "@/components"
import { useGetTranslation } from "@/hooks"
import { useTypedSelector } from "@/redux"
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
      if (!currentUser) {
        redirect(`/${currentLanguage}${AppRoutes.LOGIN}`)
      }
    }, [
      currentUser, 
      currentLanguage
    ])
    

    return (
        <div
          className="min-h-max-view max-h-max-view min-w-max-view max-w-max-view overflow-y-auto pl-[120px]"
        >
          {children}
          <BottomMusicBar/>
          <Navbar/>
        </div>
    )
}

export default PublicRouteLayout