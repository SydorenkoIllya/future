import { Link } from 'react-router-dom'
import SpaceXLogo from '../../../images/SpaceXL.png'
import { StyledImg } from './styles'

export default function LogoSpaceX() {
    return (
        <Link to='/'>
            <StyledImg alt='spaceXLogo' src={SpaceXLogo} />
        </Link>
    )
}