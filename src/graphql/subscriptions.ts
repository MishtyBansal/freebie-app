/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateFreebie = /* GraphQL */ `subscription OnCreateFreebie($filter: ModelSubscriptionFreebieFilterInput) {
  onCreateFreebie(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFreebieSubscriptionVariables,
  APITypes.OnCreateFreebieSubscription
>;
export const onUpdateFreebie = /* GraphQL */ `subscription OnUpdateFreebie($filter: ModelSubscriptionFreebieFilterInput) {
  onUpdateFreebie(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFreebieSubscriptionVariables,
  APITypes.OnUpdateFreebieSubscription
>;
export const onDeleteFreebie = /* GraphQL */ `subscription OnDeleteFreebie($filter: ModelSubscriptionFreebieFilterInput) {
  onDeleteFreebie(filter: $filter) {
    id
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFreebieSubscriptionVariables,
  APITypes.OnDeleteFreebieSubscription
>;
