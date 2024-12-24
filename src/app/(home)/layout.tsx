import React from 'react'
import DotPattern from "@/components/ui/dot-pattern";
import {cn} from "@/lib/utils";


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            {/* Header */}
            <header className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">Mueed Ahmad</p>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </header>

            {/* Main body */}
            <main>
                {children}
            </main>

            {/* Footer or Copyrights */}
            <footer>
                <p>Footer</p>
            </footer>
        </>
    )
}
export default Layout;
