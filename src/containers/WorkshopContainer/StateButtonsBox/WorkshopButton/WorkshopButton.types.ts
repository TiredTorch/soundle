import { StaticImageData } from "next/image";

export type WorkshopButtonProps = {
    title: string;
    icon: StaticImageData;
    background: StaticImageData;
    handleSetState: VoidFunction;
}