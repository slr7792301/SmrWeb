import React, { useRef } from 'react';

export default function IconWithTooltipAndCopy() {
    const Email = 'slr7792301@gmail.com';
    const ref = useRef(null);

    const handleClick = () => {
        navigator.clipboard.writeText(Email);
        alert('文字已複製');
    };

    return (
        <svg className="icon icon-mail4" onClick={handleClick} ref={ref}>
            <title>{Email}</title>
            <use xlinkHref="#icon-mail4"></use>
        </svg>
    );
}