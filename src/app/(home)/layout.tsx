import React from 'react';

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            {/* Main body */}
            <main className="max-w-screen-lg mx-auto">
                {children}
            </main>

            {/* Footer or Copyrights */}
            <footer className="max-w-screen-lg mx-auto">
                <p>Footer</p>
            </footer>
        </>
    )
}
export default Layout;
