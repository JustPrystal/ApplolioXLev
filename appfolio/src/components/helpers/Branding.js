import { Stack } from '@mui/material';
import levLogo from '../../assets/Logo.svg';
import appfolioLogo from '../../assets/appfolio-logo.svg';

export default function Branding ({justifyContent}){
    return(
        <Stack flexDirection="row" justifyContent={justifyContent} className="logos" >
            <img src={levLogo} alt="" className="lev-logo" />
            <span>x</span>
            <img src={appfolioLogo} alt="" className="appfolio-logo" />
        </Stack>
    )
}