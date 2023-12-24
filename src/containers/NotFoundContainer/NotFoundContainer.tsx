'use client'

import Image from "next/image"
import Link from "next/link"
import { Typography } from "@/components"
import { AppRoutes } from "@/routes"
import notFoundBackground from "../../assets/images/404-background.png"

export const NotFoundContainer = () => {
    
    return (
        <section
            className="min-w-max-view min-h-max-view flex justify-center items-center"
        >
            {/* <div
                className="min-h-full min-w-full absolute top-0 right-0 z-[-1]"
            >
                <Image
                    fill
                    alt="404-bg"
                    src={notFoundBackground}
                    style={{
                        zIndex: -1
                    }}
                />
            </div>
            <div
                className="bg-snd-gray-300/[.83] w-max-view max-w-[1640px] h-max-view max-h-[900px]"
            >
                <Typography>404</Typography>
                <Typography>Page not found</Typography>
                <Link
                    as={"/en"}
                    href={AppRoutes.DASHBOARD}
                    replace
                >
                    <Typography>
                        Return to the website
                    </Typography>
                </Link>
            </div> */}
        </section>
    )
}

export default NotFoundContainer