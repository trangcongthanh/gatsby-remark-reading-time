const readingTime = require("reading-time");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawMarkdownBody),
    });
  }
};
