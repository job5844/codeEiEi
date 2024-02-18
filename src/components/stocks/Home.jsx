import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.clear()

            setTimeout(() => {
                window.location.reload()
            }, 300);
    }

    return (
        <div></div>
        
    )
}

export default Home