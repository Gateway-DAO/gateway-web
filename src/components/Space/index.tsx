import React, { useEffect } from 'react';
import { SpaceBox } from '../../theme/style';

import space from '../../utils/canvas';

/* A type definition for the props of the component. */
interface IProps {
    height?: number;
    width?: number;
    children?: React.ReactNode;
}

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
        <>
            <SpaceBox id='space-canvas' />
            {children}
        </>
    );
};

export default Space;
