import * as Styled from './style';
import { useNavigate } from 'react-router-dom';

const DaosProfile = (props) => {
    const navigate = useNavigate();

    const traverse = (e) => {
        navigate(`/dao/${props.dao}`);
    };

    let imgURl = props.imgURL;

    return (
        <Styled.DaoPfpContainer
            src={props?.imgURL}
            dao={props.dao}
            onClick={traverse}
        />
    );
};

export default DaosProfile;
