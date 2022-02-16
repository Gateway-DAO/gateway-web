import React from 'react';
import * as Styled from './styles';
import { formatDistance } from 'date-fns';

const Snapshot = (props) => {
    let body = props.data.body;
    let description = body.replace(/#/gi, '').slice(0, 200).concat('...');
    let endDate = new Date(props.data.end * 1000);

    let timeLeft = formatDistance(new Date(), endDate);

    let link = `https://snapshot.org/#/${props.id}/proposal/${props.data.id}/`;

    return (
        <Styled.Card href={link} target='_blank'>
            <Styled.Body>
                <Styled.Title>{props.data.title}</Styled.Title>
                <Styled.Description>{description}</Styled.Description>
                <Styled.Date>expires in {timeLeft}</Styled.Date>
            </Styled.Body>
        </Styled.Card>
    );
};

export default Snapshot;
