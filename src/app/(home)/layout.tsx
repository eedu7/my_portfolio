import React from 'react'


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            {/* Header */}
            <header>
                <p>Header</p>
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
