import style from './menu.module.css'
import youtubeImg from '../assets/images/youtube.png'
import instagramImg from '../assets/images/instagram.png'
import twiterImg from '../assets/images/twitter.png'
import discordImg from '../assets/images/discord.png'

export const Menu = (props) => {
    return(
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark navBar ${style.navBar}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href={'/'}>{props.option01}</a>
                            <a className="nav-link" href="#s2">{props.option02}</a>
                            <a className="nav-link" href={'/contact'}>{props.option03}</a>
                        </div>
                    </div>
                </div>
            </nav>

            <footer className={`fixed-bottom ${style.footer}`}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                    <img width="30px" src={instagramImg} alt="Instagram" className="mx-2" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                    <img width="30px" src={youtubeImg} alt="YouTube" className="mx-2" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://x.com/">
                    <img width="30px" src={twiterImg} alt="Twitter" className="mx-2" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://discord.com/">
                    <img width="30px" src={discordImg} alt="Discord" className="mx-2" /> 
                </a>
            </footer>
        </div>
    );
}