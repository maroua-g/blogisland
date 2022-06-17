import Markdoc from '@markdoc/markdoc';
import React from 'react';

export default function Markdownlink() {
    const doc = ` # Overview
    Blog Post 1
    `;

    const ast = Markdoc.parse(doc);
    const content = Markdoc.transform(ast);
    return Markdoc.renderers.react(content, React);
}
