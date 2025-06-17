import { buildASTSchema } from 'graphql'
import { expect } from 'expect';
import { it } from 'testing';
import gql from './mod.ts'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

it('Returns a valid document node', () => {
  expect(typeDefs.kind).toBe('Document')
})

it('Creates a valid schema from AST', () => {
  const schema = buildASTSchema(typeDefs)

  expect(typeof schema === 'object').toBe(true)
})