import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local"

import { cn } from "@/lib/utils" 

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
})

export const Logo = () => {
    return (
        <Link href="/">
            <div className={cn(
                "hover:opacity-75 transition items-center gap-x-2 hidden md:flex",
                headingFont.className,
            )}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                ></Image>
            </div>
        </Link>
    )
}