import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { NavbarItemProps } from "./NavbarItem.types"
import { useGetTranslation } from "@/hooks"

export const NavbarItem: FC<NavbarItemProps> = ({
    image,
    link,
    index,
    onClick
}) => {
    const {
        currentLanguage
    } = useGetTranslation()

  return (
    <>
        {link && (
            <Link
                href={`/${currentLanguage}${link}`}
                className="relative aspect-square"
                >
                <Image
                    priority
                    sizes="70"
                    fill
                    src={image}
                    alt={`link_${index}`}
                />
            </Link>
        )}
        {onClick && (
            <div
                onClick={onClick}
                className="relative aspect-square cursor-pointer"
                >
                <Image
                    priority
                    sizes="70"
                    fill
                    src={image}
                    alt={`link_${index}`}
                />
            </div>
        )}
    </>
  )
}

export default NavbarItem