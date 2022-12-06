import { jsx } from 'react/jsx-runtime';
import gql from 'graphql-tag';

export default function blah () {
  console.log(typeof gql);
  return jsx('h1', { children: 'I did the thing!' });
}

export function someOtherFunction() { }
