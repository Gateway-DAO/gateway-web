import styled from 'styled-components';

export const Container = styled.main`
    margin: auto 15%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
		margin-top: 52px;
		border-radius: 20px;
		background: #ffffff;
`;
export const MainBox = styled.section`
    position: absolute;
    display: flex;
    height: calc(100vh - 90px);
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 0px;
    z-index: -1;
    left: 0;
    width: 100%;
`;
export const Text = styled.span`
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const PurpleText = styled(Text)`
    color: #ff00b8;
    font-weight: 700;
`;

export const NFT = styled.img`
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		height: 350px;
		width: 350px;
		object-fit: cover;
`;

export const SmallTextContainer = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-top: 38px;
    color: #ffffff;
`;

export const DaoIcon = styled.img`
		justify-content: center;
		height: 20px;
		border-radius: 100%;
		width: 20px;
		object-fit: cover;
`
export const BadgeBottomText = styled.div`
		padding: 20px 15px;
`
export const BadgeText = styled.span`
		font-family: 'Be Vietnam';
		font-style: normal;
		font-weight: 400;
		line-height: 17px;
		font-size: 12px;
		letter-spacing: 0.05em;
		color: #170627;
		display: block;
		padding: 2px 0;
`
export const BadgeName = styled.span`
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 17px;
		letter-spacing: -0.015em;
		background: linear-gradient(95.57deg, #EE787B 8.89%, #E153F2 34.15%, #495BE0 67.09%, #6A39F3 95.52%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		display: block;
		padding: 2px 0;
`
export const Buttons = styled.div`
		display: flex;
		margin-top: 35px;
		z-index: 10;
`
export const CheckProfileBtn = styled.a`
		color: #fff;
		border: solid 1px #A5A5A5;
		padding: 10px 15px;
		border-radius: 20px;
		font-size: 13px;
		font-family: 'Poppins';
		font-weight: 700;
		text-transform: uppercase;
		margin-right: 10px;
    cursor: pointer;
		&:hover {
			color: #fff;
			box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
			background: linear-gradient(#170627,#170627) padding-box,linear-gradient(90deg,#e153f2,#6a39f3,#495be0);
			border-image: linear-gradient(to right, #e153f2,#6a39f3,#495be0) 1;
		}
`
export const CloseBtn = styled.a`
		color: #fff;
		border: solid 1px #A5A5A5;
		padding: 10px 50px;
		border-radius: 20px;
		font-size: 13px;
		font-family: 'Poppins';
		font-weight: 700;
		text-transform: uppercase;
    cursor: pointer;
		&:hover {
			color: #fff;
			box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
			background: linear-gradient(#170627,#170627) padding-box,linear-gradient(90deg,#e153f2,#6a39f3,#495be0);
			border-image: linear-gradient(to right, #e153f2,#6a39f3,#495be0) 1;
		}
`
