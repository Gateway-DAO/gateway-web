import { useRef, useState } from 'react';
import * as Styled from './styled';

const Tooltip = ({ position, text, children, background, styleMe = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isFocused;

    const handleClick = (e) => {
        e.preventDefault();
        if (targetRef.current) {
            targetRef.current.blur();
        }
    };

    return (
        <Styled.TooltipWrapper>
            <Styled.TooltipTarget
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={handleClick}
                ref={targetRef}
                styleMe={styleMe}
                showOnFocus={isFocused}
            >
                {children}
            </Styled.TooltipTarget>
            {showTooltip && (
                <Styled.CenterContainer position={position}>
                    <Styled.TooltipBox
                        background={background}
                        position={position}
                    >
                        {text}
                    </Styled.TooltipBox>
                </Styled.CenterContainer>
            )}
        </Styled.TooltipWrapper>
    );
};

export default Tooltip;
