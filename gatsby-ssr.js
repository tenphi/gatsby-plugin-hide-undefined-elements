import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    if (process.env.BUILD_STAGE === `build-html`) {
        const css = '*:not(:defined) { visibility: hidden; }';

        setHeadComponents([<style>{css}</style>]);
    }
}
