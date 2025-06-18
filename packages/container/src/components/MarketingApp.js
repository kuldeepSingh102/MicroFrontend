import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { use } from 'react';

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        // Mount the marketing app
        mount(ref.current);
    });
    return (
        <div ref={ref}>
            <h1>Container App</h1>
        </div>
    );
}
