import { useCallback, useMemo } from "react"
import { AppRoutes } from "@/routes"
import NavbarItem from "./NavbarItem/NavbarItem"
import dashboardIcon from "@/assets/icons/dashboardLinkIcon.png"
import profileIcon from "@/assets/icons/profileLinkIcon.png"
import friendsIcon from "@/assets/icons/friendsLinkIcon.png"
import libraryIcon from "@/assets/icons/libraryLinkIcon.png"
import workshopIcon from "@/assets/icons/workshopLinkIcon.png"
import settingsIcon from "@/assets/icons/settingsLinkIcon.png"
import logoutIcon from "@/assets/icons/logoutLinkIcon.png"
import { resetUser, useTypedDispatch } from "@/redux"

export const Navbar = () => {
  const dispatch = useTypedDispatch()

  const handleLogout = useCallback(
    () => {
      dispatch(resetUser())
    },
    [dispatch],
  )
  

  const navbarItem = useMemo(() => [
    {
      image: dashboardIcon,
      position: "top",
      link: AppRoutes.DASHBOARD
    },
    {
      image: profileIcon,
      position: "top",
      link: AppRoutes.PROFILE
    },
    {
      image: friendsIcon,
      position: "top",
      link: AppRoutes.FRIENDS
    },
    {
      image: libraryIcon,
      position: "top",
      link: AppRoutes.LIBRARY
    },
    {
      image: workshopIcon,
      position: "top",
      link: AppRoutes.WORKSHOP
    },
    {
      image: settingsIcon,
      position: "bottom",
      link: AppRoutes.SETTING
    },
    {
      image: logoutIcon,
      position: "bottom",
      onClick: handleLogout
    }
  ], [handleLogout])

  return (
    <nav
        className="absolute min-h-max-view min-w-[120px] bg-snd-gray-500 top-0 left-0 px-[30px] py-[20px] flex justify-between flex-col"
    >
      <div
        className="flex gap-[20px] flex-col"
      >
        {navbarItem.filter(item => item.position === "top").map((item, i) => <NavbarItem key={i} index={i} {...item}/>)}
      </div>
      <div
        className="flex gap-[20px] flex-col"
      >
        {navbarItem.filter(item => item.position === "bottom").map((item, i) => <NavbarItem key={i} index={i} {...item}/>)}
      </div>
    </nav>
  )
}

export default Navbar