import React from 'react';
import { Flex, Link as BreadCrumbLink } from '../../primitives';
import type { IBreadCrumbProps } from './props';
import { extractInObject } from '../../../theme/tools';
import { getBreadCrumbSeparator } from './BreadCrumbSeparator';
import { useThemeProps } from '../../../hooks';
export { default as BreadCrumbItem } from './BreadCrumbItem';
export { BreadCrumbLink };

const BreadCrumb = ({
  style,
  children,
  separator,
  spacing,
  ...props
}: IBreadCrumbProps) => {
  const [textProps, remainingProps] = extractInObject(props, [
    'fontWeight',
    'fontFamily',
    'fontSize',
    'color',
    'textDecoration',
    'txtDecor',
    'wordBreak',
    'textOverflow',
    'textTransform',
    'whiteSpace',
    'overflowWrap',
    'bold',
    'italic',
    'underline',
    'strikeThrough',
    'isTruncated',
    'noOfLines',
  ]);

  let newProps = useThemeProps('BreadCrumb', remainingProps);
  return (
    <Flex {...newProps} style={style}>
      {children && !children.length
        ? children
        : getBreadCrumbSeparator(children, separator, textProps, spacing)}
    </Flex>
  );
};

export default React.memo(BreadCrumb);
export type { IBreadCrumbProps };