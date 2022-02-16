import * as Styled from './style';
import SNAPSHOT_IMG from '../../../../assets/pluginsImage/snapshot.png';
import DISCORD_IMG from '../../../../assets/pluginsImage/discord.png';

const BoxContainer = (props) => (
    <Styled.PluginBox>
        <Styled.ImageContainer src={props.img} />
        <Styled.PluginName>{props.name}</Styled.PluginName>
        <Styled.ConnectButton>
            <Styled.ButtonText>CONNECT</Styled.ButtonText>
        </Styled.ConnectButton>
    </Styled.PluginBox>
);
//  for time period  : hard coded
const Plugins = (props) => {
    return (
        <Styled.Container>
            <BoxContainer name='Snapshot' img={SNAPSHOT_IMG} />
            <BoxContainer name='Discord' img={DISCORD_IMG} />
        </Styled.Container>
    );
};

export default Plugins;
