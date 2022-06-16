import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

function Footer() {
     const accountUrls = {
        github: 'https://github.com/u31999',
        linkedin: 'https://www.linkedin.com/in/ahmed-hassan-elzain/'
    }

    const handleClickInFooter = (targetSocial) => {
        if(targetSocial === 'github') window.open(accountUrls.github, '_blank');
        if(targetSocial === 'linkedin') window.open(accountUrls.linkedin, '_blank');
    }
  return (
    <div className='footer-container'>
        <div>CopyRight &copy; Ahmed Hassan</div>
        <div>
            <button onClick={() => handleClickInFooter('github')}>
                <FaGithub />
            </button>
            <button onClick={() => handleClickInFooter('linkedin')}>
                <FaLinkedinIn />
            </button>
        </div>
    </div>
  )
}

export default Footer
