'use client'

import { BottomMusicBar, Navbar } from "@/components"

const PublicRouteLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div
          className="min-h-max-view max-h-max-view min-w-max-view max-w-max-view overflow-y-auto p-[50px] pl-[170px] pb-[120px]"
        >
          {children}
          <BottomMusicBar/>
          <Navbar/>
        </div>
    )
}

export default PublicRouteLayout