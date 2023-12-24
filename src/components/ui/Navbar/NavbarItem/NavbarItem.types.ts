import { StaticImageData } from "next/image"

export type NavbarItemProps = {
    image: StaticImageData;
    link?: string;
    onClick?: VoidFunction;
    index: number
}