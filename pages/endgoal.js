export function Markdown({ mongoDBpath }) {
    doc = getsMarkdownFromMongoDB(mongoDBpath);
    const ast = Markdoc.parse(doc);
    const content = Markdoc.transform(ast);
    return Markdoc.renderers.react(content, React);
}