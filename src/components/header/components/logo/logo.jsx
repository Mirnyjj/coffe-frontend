import { styled } from "styled-components"
import { NavLink } from "react-router-dom";

const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 63px;
    margin-top: 5px;
    
`;

const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const LogoContainer = ({className}) => (
    <NavLink className={className} to="/">
        <img className="logo" src="src/img/LABEL2.png"/>
        <div>
            <LargeText>ELITE 2.0</LargeText>
            <SmallText>lounge cafe</SmallText>
        </div>
    </NavLink>
)

export const Logo = styled(LogoContainer)`
    display: flex;
    margin-top: -10px;
    .logo {
        width: 100px;
        height: 100px;
        margin: 0 5px 0 0;
        &:hover {
            cursor: pointer; 
        }
    }
`