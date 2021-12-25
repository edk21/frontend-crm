import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <div className='text-center copy__right'>
            &copy; CRM all right reserved - {date.getFullYear()}
        </div>
    )
}

export default Footer
