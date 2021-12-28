import * as Styled from './style'
import { useGetDAOByName } from '../../../../api/database/useGetDAO'
import { useEffect } from 'react'

const DaosProfile = (props) => {
    let imgURl = props.imgURL
    console.log(imgURl)

    return <Styled.DaoPfpContainer src={props?.imgURL} />
}

export default DaosProfile
