export const typeDefs = /* GraphQL */ `type AggregateApontamentos {
  count: Int!
}

type AggregatePonto {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Apontamentos {
  id: ID!
  data: DateTime!
  hini: String!
  hfim: String!
  hdesconto: String
  htranslado: String
  htotstr: String
  htot: Float
  cliente: String
  chamado: String
  obs: String
}

type ApontamentosConnection {
  pageInfo: PageInfo!
  edges: [ApontamentosEdge]!
  aggregate: AggregateApontamentos!
}

input ApontamentosCreateInput {
  data: DateTime!
  hini: String!
  hfim: String!
  hdesconto: String
  htranslado: String
  htotstr: String
  htot: Float
  cliente: String
  chamado: String
  obs: String
}

type ApontamentosEdge {
  node: Apontamentos!
  cursor: String!
}

enum ApontamentosOrderByInput {
  id_ASC
  id_DESC
  data_ASC
  data_DESC
  hini_ASC
  hini_DESC
  hfim_ASC
  hfim_DESC
  hdesconto_ASC
  hdesconto_DESC
  htranslado_ASC
  htranslado_DESC
  htotstr_ASC
  htotstr_DESC
  htot_ASC
  htot_DESC
  cliente_ASC
  cliente_DESC
  chamado_ASC
  chamado_DESC
  obs_ASC
  obs_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApontamentosPreviousValues {
  id: ID!
  data: DateTime!
  hini: String!
  hfim: String!
  hdesconto: String
  htranslado: String
  htotstr: String
  htot: Float
  cliente: String
  chamado: String
  obs: String
}

type ApontamentosSubscriptionPayload {
  mutation: MutationType!
  node: Apontamentos
  updatedFields: [String!]
  previousValues: ApontamentosPreviousValues
}

input ApontamentosSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApontamentosWhereInput
  AND: [ApontamentosSubscriptionWhereInput!]
  OR: [ApontamentosSubscriptionWhereInput!]
  NOT: [ApontamentosSubscriptionWhereInput!]
}

input ApontamentosUpdateInput {
  data: DateTime
  hini: String
  hfim: String
  hdesconto: String
  htranslado: String
  htotstr: String
  htot: Float
  cliente: String
  chamado: String
  obs: String
}

input ApontamentosWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  data: DateTime
  data_not: DateTime
  data_in: [DateTime!]
  data_not_in: [DateTime!]
  data_lt: DateTime
  data_lte: DateTime
  data_gt: DateTime
  data_gte: DateTime
  hini: String
  hini_not: String
  hini_in: [String!]
  hini_not_in: [String!]
  hini_lt: String
  hini_lte: String
  hini_gt: String
  hini_gte: String
  hini_contains: String
  hini_not_contains: String
  hini_starts_with: String
  hini_not_starts_with: String
  hini_ends_with: String
  hini_not_ends_with: String
  hfim: String
  hfim_not: String
  hfim_in: [String!]
  hfim_not_in: [String!]
  hfim_lt: String
  hfim_lte: String
  hfim_gt: String
  hfim_gte: String
  hfim_contains: String
  hfim_not_contains: String
  hfim_starts_with: String
  hfim_not_starts_with: String
  hfim_ends_with: String
  hfim_not_ends_with: String
  hdesconto: String
  hdesconto_not: String
  hdesconto_in: [String!]
  hdesconto_not_in: [String!]
  hdesconto_lt: String
  hdesconto_lte: String
  hdesconto_gt: String
  hdesconto_gte: String
  hdesconto_contains: String
  hdesconto_not_contains: String
  hdesconto_starts_with: String
  hdesconto_not_starts_with: String
  hdesconto_ends_with: String
  hdesconto_not_ends_with: String
  htranslado: String
  htranslado_not: String
  htranslado_in: [String!]
  htranslado_not_in: [String!]
  htranslado_lt: String
  htranslado_lte: String
  htranslado_gt: String
  htranslado_gte: String
  htranslado_contains: String
  htranslado_not_contains: String
  htranslado_starts_with: String
  htranslado_not_starts_with: String
  htranslado_ends_with: String
  htranslado_not_ends_with: String
  htotstr: String
  htotstr_not: String
  htotstr_in: [String!]
  htotstr_not_in: [String!]
  htotstr_lt: String
  htotstr_lte: String
  htotstr_gt: String
  htotstr_gte: String
  htotstr_contains: String
  htotstr_not_contains: String
  htotstr_starts_with: String
  htotstr_not_starts_with: String
  htotstr_ends_with: String
  htotstr_not_ends_with: String
  htot: Float
  htot_not: Float
  htot_in: [Float!]
  htot_not_in: [Float!]
  htot_lt: Float
  htot_lte: Float
  htot_gt: Float
  htot_gte: Float
  cliente: String
  cliente_not: String
  cliente_in: [String!]
  cliente_not_in: [String!]
  cliente_lt: String
  cliente_lte: String
  cliente_gt: String
  cliente_gte: String
  cliente_contains: String
  cliente_not_contains: String
  cliente_starts_with: String
  cliente_not_starts_with: String
  cliente_ends_with: String
  cliente_not_ends_with: String
  chamado: String
  chamado_not: String
  chamado_in: [String!]
  chamado_not_in: [String!]
  chamado_lt: String
  chamado_lte: String
  chamado_gt: String
  chamado_gte: String
  chamado_contains: String
  chamado_not_contains: String
  chamado_starts_with: String
  chamado_not_starts_with: String
  chamado_ends_with: String
  chamado_not_ends_with: String
  obs: String
  obs_not: String
  obs_in: [String!]
  obs_not_in: [String!]
  obs_lt: String
  obs_lte: String
  obs_gt: String
  obs_gte: String
  obs_contains: String
  obs_not_contains: String
  obs_starts_with: String
  obs_not_starts_with: String
  obs_ends_with: String
  obs_not_ends_with: String
  AND: [ApontamentosWhereInput!]
  OR: [ApontamentosWhereInput!]
  NOT: [ApontamentosWhereInput!]
}

input ApontamentosWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createApontamentos(data: ApontamentosCreateInput!): Apontamentos!
  updateApontamentos(data: ApontamentosUpdateInput!, where: ApontamentosWhereUniqueInput!): Apontamentos
  updateManyApontamentoses(data: ApontamentosUpdateInput!, where: ApontamentosWhereInput): BatchPayload!
  upsertApontamentos(where: ApontamentosWhereUniqueInput!, create: ApontamentosCreateInput!, update: ApontamentosUpdateInput!): Apontamentos!
  deleteApontamentos(where: ApontamentosWhereUniqueInput!): Apontamentos
  deleteManyApontamentoses(where: ApontamentosWhereInput): BatchPayload!
  createPonto(data: PontoCreateInput!): Ponto!
  updatePonto(data: PontoUpdateInput!, where: PontoWhereUniqueInput!): Ponto
  updateManyPontoes(data: PontoUpdateInput!, where: PontoWhereInput): BatchPayload!
  upsertPonto(where: PontoWhereUniqueInput!, create: PontoCreateInput!, update: PontoUpdateInput!): Ponto!
  deletePonto(where: PontoWhereUniqueInput!): Ponto
  deleteManyPontoes(where: PontoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Ponto {
  id: ID!
  data: DateTime!
  ent1: Float
  sai1: Float
  ent2: Float
  sai2: Float
  obs: String
}

type PontoConnection {
  pageInfo: PageInfo!
  edges: [PontoEdge]!
  aggregate: AggregatePonto!
}

input PontoCreateInput {
  data: DateTime!
  ent1: Float
  sai1: Float
  ent2: Float
  sai2: Float
  obs: String
}

type PontoEdge {
  node: Ponto!
  cursor: String!
}

enum PontoOrderByInput {
  id_ASC
  id_DESC
  data_ASC
  data_DESC
  ent1_ASC
  ent1_DESC
  sai1_ASC
  sai1_DESC
  ent2_ASC
  ent2_DESC
  sai2_ASC
  sai2_DESC
  obs_ASC
  obs_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PontoPreviousValues {
  id: ID!
  data: DateTime!
  ent1: Float
  sai1: Float
  ent2: Float
  sai2: Float
  obs: String
}

type PontoSubscriptionPayload {
  mutation: MutationType!
  node: Ponto
  updatedFields: [String!]
  previousValues: PontoPreviousValues
}

input PontoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PontoWhereInput
  AND: [PontoSubscriptionWhereInput!]
  OR: [PontoSubscriptionWhereInput!]
  NOT: [PontoSubscriptionWhereInput!]
}

input PontoUpdateInput {
  data: DateTime
  ent1: Float
  sai1: Float
  ent2: Float
  sai2: Float
  obs: String
}

input PontoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  data: DateTime
  data_not: DateTime
  data_in: [DateTime!]
  data_not_in: [DateTime!]
  data_lt: DateTime
  data_lte: DateTime
  data_gt: DateTime
  data_gte: DateTime
  ent1: Float
  ent1_not: Float
  ent1_in: [Float!]
  ent1_not_in: [Float!]
  ent1_lt: Float
  ent1_lte: Float
  ent1_gt: Float
  ent1_gte: Float
  sai1: Float
  sai1_not: Float
  sai1_in: [Float!]
  sai1_not_in: [Float!]
  sai1_lt: Float
  sai1_lte: Float
  sai1_gt: Float
  sai1_gte: Float
  ent2: Float
  ent2_not: Float
  ent2_in: [Float!]
  ent2_not_in: [Float!]
  ent2_lt: Float
  ent2_lte: Float
  ent2_gt: Float
  ent2_gte: Float
  sai2: Float
  sai2_not: Float
  sai2_in: [Float!]
  sai2_not_in: [Float!]
  sai2_lt: Float
  sai2_lte: Float
  sai2_gt: Float
  sai2_gte: Float
  obs: String
  obs_not: String
  obs_in: [String!]
  obs_not_in: [String!]
  obs_lt: String
  obs_lte: String
  obs_gt: String
  obs_gte: String
  obs_contains: String
  obs_not_contains: String
  obs_starts_with: String
  obs_not_starts_with: String
  obs_ends_with: String
  obs_not_ends_with: String
  AND: [PontoWhereInput!]
  OR: [PontoWhereInput!]
  NOT: [PontoWhereInput!]
}

input PontoWhereUniqueInput {
  id: ID
  data: DateTime
}

type Query {
  apontamentos(where: ApontamentosWhereUniqueInput!): Apontamentos
  apontamentoses(where: ApontamentosWhereInput, orderBy: ApontamentosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Apontamentos]!
  apontamentosesConnection(where: ApontamentosWhereInput, orderBy: ApontamentosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApontamentosConnection!
  ponto(where: PontoWhereUniqueInput!): Ponto
  pontoes(where: PontoWhereInput, orderBy: PontoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ponto]!
  pontoesConnection(where: PontoWhereInput, orderBy: PontoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PontoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  apontamentos(where: ApontamentosSubscriptionWhereInput): ApontamentosSubscriptionPayload
  ponto(where: PontoSubscriptionWhereInput): PontoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
  email: String
}
`