import levLogo from '../assets/Logo.svg';
import appfolioLogo from '../assets/appfolio-logo.png.svg';

function Header ({data}) {
    const { asset , user } = data;
    return(
        
        <header className="header" >
            <div className="inner">
                <div className="logos">
                    <img src={levLogo} alt="" className="lev-logo" />
                    <span>x</span>
                    <img src={appfolioLogo} alt="" className="appfolio-logo" />
                </div>
                <div className="user-data">
                    <div className="name-step2">{`${user.firstName} ${user.lastName}`}</div>
                    <div className="address">
                        <div className="line1">{asset.streetAddress}</div>
                        <div className="line2">{`${asset.city}, ${asset.state}, ${asset.zip}`}</div>
                    </div>
                    <div className="creds">
                        <div className="name">{`${user.firstName} ${user.lastName}`}</div>
                        <div className="email">{user.email}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;