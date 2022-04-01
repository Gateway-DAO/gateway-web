import * as Styled from './style';
import Wallet from '../WalletHeader';
import logo from '../../assets/Gateway.svg';

const NotAuthorizedHeader = (props) => {

	return (
		<Styled.HeaderDiv>
			<Styled.LogoBox>
				<Styled.Logo to='/'>
					<img src={logo} alt='Gateway Logo' />
					{/* {!xs || <Styled.LogoText>GATEWAY</Styled.LogoText>} */}
				</Styled.Logo>
				{/* {!xs || <a href="https://readymag.com/u13829565/499896/" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">What are DAOs?</Styled.Text></a>}
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>} */}
			</Styled.LogoBox>
			<Styled.WalletBox>
				<Styled.Close>Close</Styled.Close>
			</Styled.WalletBox>
		</Styled.HeaderDiv>
	);
};

export default NotAuthorizedHeader;
