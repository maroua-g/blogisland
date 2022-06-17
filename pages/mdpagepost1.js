import Markdoc from '@markdoc/markdoc';
import React from 'react';

export default function Markdownpage() {
    const doc = ` **Post 3**
    `;

    const ast = Markdoc.parse(doc);
    const content = Markdoc.transform(ast);
    return Markdoc.renderers.react(content, React);
}
