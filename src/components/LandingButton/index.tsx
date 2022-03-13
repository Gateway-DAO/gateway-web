import React from 'react';
import * as Styled from './style';

interface Props {
    title: string;
    onClick: () => void;
    variant?: string;
}

export default function LandingButton({
    title,
    onClick,
    variant = 'outline',
}: Props) {
    return (
        <Styled.ButtonContainer onClick={onClick} variant={variant}>
            <Styled.ButtonText>{title}</Styled.ButtonText>
        </Styled.ButtonContainer>
    );
}
