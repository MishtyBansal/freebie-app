/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createFreebie = /* GraphQL */ `mutation CreateFreebie(
  $input: CreateFreebieInput!
  $condition: ModelFreebieConditionInput
) {
  createFreebie(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFreebieMutationVariables,
  APITypes.CreateFreebieMutation
>;
export const updateFreebie = /* GraphQL */ `mutation UpdateFreebie(
  $input: UpdateFreebieInput!
  $condition: ModelFreebieConditionInput
) {
  updateFreebie(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFreebieMutationVariables,
  APITypes.UpdateFreebieMutation
>;
export const deleteFreebie = /* GraphQL */ `mutation DeleteFreebie(
  $input: DeleteFreebieInput!
  $condition: ModelFreebieConditionInput
) {
  deleteFreebie(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFreebieMutationVariables,
  APITypes.DeleteFreebieMutation
>;
