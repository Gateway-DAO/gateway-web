import React, { useEffect } from 'react';
import { SpaceBox } from '../../theme/style';
import styled from 'styled-components';

import space from '../../utils/canvas';

/* A type definition for the props of the component. */
interface IProps {
    height?: number;
    width?: number;
    children?: React.ReactNode;
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
`

const Children = styled.div`
    z-index: 2;
`

/**
 * It creates a canvas element and fills it with a gradient.
 * @param  - height - the height of the space
 * @returns A React component.
 */
const Space: React.FC<IProps> = ({
    height = window.innerHeight,
    width = window.innerWidth,
    children,
}) => {
    useEffect(() => space(height, width), [height, width]);

    return (
        <Container>
            <SpaceBox id='space-canvas' />
            <Children suppressContentEditableWarning={true}>
                {children}
            </Children>
        </Container>
    );
};

export default Space;
