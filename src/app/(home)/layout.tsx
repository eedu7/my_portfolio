import React from 'react';

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
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
