import React from 'react'

function HeaderSocials() {
  return (
   <div className="home__socials">
    <a href="https://github.com/bngoon" className="home__social-link" rel='noopener'>
        <i className='icon-social-github'></i>
    </a>

    <a href="https://www.linkedin.com/in/booker-ngoon/" className="home__social-link" rel='noopener'>
        <i className='icon-social-linkedin'></i>
    </a>

    <a href="mailto:bookerngoon@gmail.com" className="home__social-link" rel='noopener'>
        <i className='icon-envelope'></i>
    </a>

    {/* <a href="" className="home__social-link" target='_blank'>
        <i className=''></i>
    </a> */}


    {/* <a href="" className="home__social-link" target='_blank'>
        <i className=''></i>
    </a> */}
   </div>
  )
}

export default HeaderSocials
