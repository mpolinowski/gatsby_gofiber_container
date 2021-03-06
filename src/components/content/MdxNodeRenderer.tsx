import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { MdxNode } from '../../data/MdxContent';
import styled from 'styled-components';
import { Table, Image } from 'react-bootstrap';

interface Props {
  mdxNode: MdxNode;
}

export const MdxNodeRenderer = (props: Props): JSX.Element => {
  const [rerendered, setRerendered] = React.useState(false);

  React.useEffect(() => {
    setRerendered(true);
  }, [rerendered]);

  // You can define your own components if you'd like. See: https://mdxjs.com/getting-started#mdxprovider
  const components = {
    // p: (props: any) => <p>{props.children}</p>, //	Paragraph
    // h1: (props: any) => <h1>{props.children}</h1>, //	Heading 1	#
    // h2: (props: any) => <h2>{props.children}</h2>, //	Heading 2	##
    // h3: (props: any) => <h3>{props.children}</h3>, //	Heading 3	###
    // h4: (props: any) => <h4>{props.children}</h4>, //	Heading 4	####
    // h5: (props: any) => <h5>{props.children}</h5>, //	Heading 5	#####
    // h6: (props: any) => <h6>{props.children}</h6>, //	Heading 6	######
    blockquote: (props: any) => <StyledBlockquote>{props.children}</StyledBlockquote>, //	Blockquote	>
    // ul: (props: any) => <ul>{props.children}</ul>, //	List	-
    // ol: (props: any) => <ol>{props.children}</ol>, //	Ordered list	1.
    // li: (props: any) => <li>{props.children}</li>, //	List item
    table: (props: any) => (
      <Table striped bordered responsive>
        {props.children}
      </Table>
    ), //	Table
    // thead: (props: any) => <thead>{props.children}</thead>, //	Table head
    // tbody: (props: any) => <tbody>{props.children}</tbody>, //	Table body
    // tr: (props: any) => <tr>{props.children}</tr>, //	Table row
    // td: (props: any) => <td>{props.children}</td>, //	Table cell
    // th: (props: any) => <th>{props.children}</th>, //	Table header
    // code: (props: any) => <code>{props.children}</code>, //	Code	```code```
    // inlineCode: (props: any) => <code>{props.children}</code>, //	InlineCode	`inlineCode`
    // pre: (props: any) => <pre>{props.children}</pre>, //	Code	```code```
    // em: (props: any) => <em>{props.children}</em>, //	Emphasis	_emphasis_
    // strong: (props: any) => <strong>{props.children}</strong>, //	Strong	**strong**
    // del: (props: any) => <del>{props.children}</del>, //	Delete	~~strikethrough~~
    // hr: (props: any) => <hr>{props.children}</hr>, //	Thematic break	--- or ***
    // a: (props: any) => <a>{props.children}</a>, //	Link	<https://mdxjs.com> or [MDX](https://mdxjs.com)
    img: (props: any) => <Image {...props} fluid rounded />, //	Image	![alt](https://mdx-logo.now.sh)
  };

  return (
    <MDXProvider components={components}>
      <RenderContainer>
        <MDXRenderer>{props.mdxNode.body}</MDXRenderer>
      </RenderContainer>
    </MDXProvider>
  );
};

const RenderContainer = styled.div`
  // Break code within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box
  .language-text {
    overflow-wrap: break-word !important;
  }
`;

const StyledBlockquote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  p {
    display: inline;
  }
`;
