import * as Styled from './style'
import { useHistory } from 'react-router-dom'

const DaosProfile = (props) => {
    const history = useHistory()

    const navigate = (e) => {
        history.push(`/dao/${props.dao}`)
    }

    let imgURl = props.imgURL
    console.log(imgURl)

    return (
        <Styled.DaoPfpContainer
            src={props?.imgURL}
            dao={props.dao}
            onClick={navigate}
        />
    )
}

export default DaosProfile
