import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../../../../../../../components/Form';

const MeetingCode = (props) => {
    const [warnInfo, setWarnInfo] = useState(false);
    const [meetingCode, setMeetingCode] = useState('');
    const ref = useRef(null);

    useClickAway(ref, () => {
        setWarnInfo(false);
    });

    const onChange = (value) => {
        setMeetingCode(value);
        props.setInfo(value);
    };

    return (
        <Styled.Container ref={ref}>
            <FormStyled.Label color='black'>Meeting Code</FormStyled.Label>
            {warnInfo && (
                <Styled.WarningInfo>
                    *meeting code is case sensitive
                </Styled.WarningInfo>
            )}
            <FormStyled.Input
                white
                width='25%'
                value={meetingCode}
                onClick={(e) => setWarnInfo(!warnInfo)}
                onChange={(e) => onChange(e.target.value)}
            />
        </Styled.Container>
    );
};

export default React.memo(MeetingCode);
