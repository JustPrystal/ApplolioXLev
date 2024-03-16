import Branding from "./helpers/Branding";

function Header ({data}) {
    const { asset , user } = data;
    return(
        
        <header className="header" >
            <div className="inner">
                <Branding />
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