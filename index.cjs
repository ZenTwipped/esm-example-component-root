const { jsx } = require('react/jsx-runtime');
const gql = require('graphql-tag');

function blah() {
  console.log(typeof gql);
  return jsx('h1', { children: 'I did the thing!' });
}

function someOtherFunction() { }

module.exports = {
  __esModule: true,
  default: blah,
  someOtherFunction
}
