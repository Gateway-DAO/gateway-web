import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _json: any;
  _key_information: any;
  _text: any;
  badge_scalar: any;
  gate_state: any;
  gate_status: any;
  json: any;
  jsonb: any;
  key_status: any;
  nft_type: any;
  permission_types: any;
  task_type: any;
  timestamp: any;
  uuid: any;
};

export type AlgoliaPaginationInput = {
  hitsPerPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type AlgoliaSearchResults = {
  __typename?: 'AlgoliaSearchResults';
  hits: Scalars['jsonb'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type VerifyInput = {
  info?: InputMaybe<Scalars['json']>;
  key_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

export type VerifyOutput = {
  __typename?: 'VerifyOutput';
  completed_gate: Scalars['Boolean'];
  task_info: Scalars['json'];
};

/** Boolean expression to compare columns of type "_json". All fields are combined with logical 'AND'. */
export type _Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_json']>;
  _gt?: InputMaybe<Scalars['_json']>;
  _gte?: InputMaybe<Scalars['_json']>;
  _in?: InputMaybe<Array<Scalars['_json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_json']>;
  _lte?: InputMaybe<Scalars['_json']>;
  _neq?: InputMaybe<Scalars['_json']>;
  _nin?: InputMaybe<Array<Scalars['_json']>>;
};

/** Boolean expression to compare columns of type "_key_information". All fields are combined with logical 'AND'. */
export type _Key_Information_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_key_information']>;
  _gt?: InputMaybe<Scalars['_key_information']>;
  _gte?: InputMaybe<Scalars['_key_information']>;
  _in?: InputMaybe<Array<Scalars['_key_information']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_key_information']>;
  _lte?: InputMaybe<Scalars['_key_information']>;
  _neq?: InputMaybe<Scalars['_key_information']>;
  _nin?: InputMaybe<Array<Scalars['_key_information']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** Boolean expression to compare columns of type "badge_scalar". All fields are combined with logical 'AND'. */
export type Badge_Scalar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['badge_scalar']>;
  _gt?: InputMaybe<Scalars['badge_scalar']>;
  _gte?: InputMaybe<Scalars['badge_scalar']>;
  _in?: InputMaybe<Array<Scalars['badge_scalar']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['badge_scalar']>;
  _lte?: InputMaybe<Scalars['badge_scalar']>;
  _neq?: InputMaybe<Scalars['badge_scalar']>;
  _nin?: InputMaybe<Array<Scalars['badge_scalar']>>;
};

/** columns and relationships of "bounties" */
export type Bounties = {
  __typename?: 'bounties';
  categories: Scalars['_text'];
  dao_id: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  end_date: Scalars['timestamp'];
  headline: Scalars['String'];
  id: Scalars['uuid'];
  level: Scalars['String'];
  links: Scalars['_text'];
  post_date: Scalars['timestamp'];
  reward: Scalars['String'];
};

/** aggregated selection of "bounties" */
export type Bounties_Aggregate = {
  __typename?: 'bounties_aggregate';
  aggregate?: Maybe<Bounties_Aggregate_Fields>;
  nodes: Array<Bounties>;
};

/** aggregate fields of "bounties" */
export type Bounties_Aggregate_Fields = {
  __typename?: 'bounties_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bounties_Max_Fields>;
  min?: Maybe<Bounties_Min_Fields>;
};


/** aggregate fields of "bounties" */
export type Bounties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bounties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bounties" */
export type Bounties_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bounties_Max_Order_By>;
  min?: InputMaybe<Bounties_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bounties" */
export type Bounties_Arr_Rel_Insert_Input = {
  data: Array<Bounties_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bounties_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bounties". All fields are combined with a logical 'AND'. */
export type Bounties_Bool_Exp = {
  _and?: InputMaybe<Array<Bounties_Bool_Exp>>;
  _not?: InputMaybe<Bounties_Bool_Exp>;
  _or?: InputMaybe<Array<Bounties_Bool_Exp>>;
  categories?: InputMaybe<_Text_Comparison_Exp>;
  dao_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  directions?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Timestamp_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<_Text_Comparison_Exp>;
  post_date?: InputMaybe<Timestamp_Comparison_Exp>;
  reward?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bounties" */
export enum Bounties_Constraint {
  /** unique or primary key constraint */
  BountiesIdUindex = 'bounties_id_uindex',
  /** unique or primary key constraint */
  BountiesPk = 'bounties_pk'
}

/** input type for inserting data into table "bounties" */
export type Bounties_Insert_Input = {
  categories?: InputMaybe<Scalars['_text']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamp']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['_text']>;
  post_date?: InputMaybe<Scalars['timestamp']>;
  reward?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Bounties_Max_Fields = {
  __typename?: 'bounties_max_fields';
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamp']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['String']>;
  post_date?: Maybe<Scalars['timestamp']>;
  reward?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bounties" */
export type Bounties_Max_Order_By = {
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  directions?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  post_date?: InputMaybe<Order_By>;
  reward?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bounties_Min_Fields = {
  __typename?: 'bounties_min_fields';
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamp']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['String']>;
  post_date?: Maybe<Scalars['timestamp']>;
  reward?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bounties" */
export type Bounties_Min_Order_By = {
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  directions?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  post_date?: InputMaybe<Order_By>;
  reward?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bounties" */
export type Bounties_Mutation_Response = {
  __typename?: 'bounties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bounties>;
};

/** on_conflict condition type for table "bounties" */
export type Bounties_On_Conflict = {
  constraint: Bounties_Constraint;
  update_columns?: Array<Bounties_Update_Column>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};

/** Ordering options when selecting data from "bounties". */
export type Bounties_Order_By = {
  categories?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  directions?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  links?: InputMaybe<Order_By>;
  post_date?: InputMaybe<Order_By>;
  reward?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bounties */
export type Bounties_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bounties" */
export enum Bounties_Select_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Directions = 'directions',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Links = 'links',
  /** column name */
  PostDate = 'post_date',
  /** column name */
  Reward = 'reward'
}

/** input type for updating data in table "bounties" */
export type Bounties_Set_Input = {
  categories?: InputMaybe<Scalars['_text']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamp']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['_text']>;
  post_date?: InputMaybe<Scalars['timestamp']>;
  reward?: InputMaybe<Scalars['String']>;
};

/** update columns of table "bounties" */
export enum Bounties_Update_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Directions = 'directions',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Links = 'links',
  /** column name */
  PostDate = 'post_date',
  /** column name */
  Reward = 'reward'
}

/** columns and relationships of "credentials" */
export type Credentials = {
  __typename?: 'credentials';
  attitudes?: Maybe<Scalars['_text']>;
  ceramic: Scalars['String'];
  created_at: Scalars['timestamp'];
  /** An object relationship */
  dao: Daos;
  dao_id: Scalars['uuid'];
  description: Scalars['String'];
  gate: Scalars['json'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  issuer_id: Scalars['uuid'];
  knowledges?: Maybe<Scalars['_text']>;
  name: Scalars['String'];
  pow?: Maybe<Scalars['_json']>;
  skills?: Maybe<Scalars['_text']>;
  target_id: Scalars['uuid'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByTargetId: Users;
};


/** columns and relationships of "credentials" */
export type CredentialsGateArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "credentials" */
export type Credentials_Aggregate = {
  __typename?: 'credentials_aggregate';
  aggregate?: Maybe<Credentials_Aggregate_Fields>;
  nodes: Array<Credentials>;
};

/** aggregate fields of "credentials" */
export type Credentials_Aggregate_Fields = {
  __typename?: 'credentials_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Credentials_Max_Fields>;
  min?: Maybe<Credentials_Min_Fields>;
};


/** aggregate fields of "credentials" */
export type Credentials_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Credentials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "credentials" */
export type Credentials_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credentials_Max_Order_By>;
  min?: InputMaybe<Credentials_Min_Order_By>;
};

/** input type for inserting array relation for remote table "credentials" */
export type Credentials_Arr_Rel_Insert_Input = {
  data: Array<Credentials_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Credentials_On_Conflict>;
};

/** Boolean expression to filter rows from the table "credentials". All fields are combined with a logical 'AND'. */
export type Credentials_Bool_Exp = {
  _and?: InputMaybe<Array<Credentials_Bool_Exp>>;
  _not?: InputMaybe<Credentials_Bool_Exp>;
  _or?: InputMaybe<Array<Credentials_Bool_Exp>>;
  attitudes?: InputMaybe<_Text_Comparison_Exp>;
  ceramic?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dao?: InputMaybe<Daos_Bool_Exp>;
  dao_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  gate?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  issuer_id?: InputMaybe<Uuid_Comparison_Exp>;
  knowledges?: InputMaybe<_Text_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pow?: InputMaybe<_Json_Comparison_Exp>;
  skills?: InputMaybe<_Text_Comparison_Exp>;
  target_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByTargetId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "credentials" */
export enum Credentials_Constraint {
  /** unique or primary key constraint */
  CredentialsIdUindex = 'credentials_id_uindex',
  /** unique or primary key constraint */
  CredentialsPk = 'credentials_pk'
}

/** input type for inserting data into table "credentials" */
export type Credentials_Insert_Input = {
  attitudes?: InputMaybe<Scalars['_text']>;
  ceramic?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao?: InputMaybe<Daos_Obj_Rel_Insert_Input>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  issuer_id?: InputMaybe<Scalars['uuid']>;
  knowledges?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  pow?: InputMaybe<Scalars['_json']>;
  skills?: InputMaybe<Scalars['_text']>;
  target_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByTargetId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Credentials_Max_Fields = {
  __typename?: 'credentials_max_fields';
  ceramic?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  issuer_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "credentials" */
export type Credentials_Max_Order_By = {
  ceramic?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  target_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Credentials_Min_Fields = {
  __typename?: 'credentials_min_fields';
  ceramic?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  issuer_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "credentials" */
export type Credentials_Min_Order_By = {
  ceramic?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  target_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "credentials" */
export type Credentials_Mutation_Response = {
  __typename?: 'credentials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Credentials>;
};

/** on_conflict condition type for table "credentials" */
export type Credentials_On_Conflict = {
  constraint: Credentials_Constraint;
  update_columns?: Array<Credentials_Update_Column>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};

/** Ordering options when selecting data from "credentials". */
export type Credentials_Order_By = {
  attitudes?: InputMaybe<Order_By>;
  ceramic?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao?: InputMaybe<Daos_Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  gate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  knowledges?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pow?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
  target_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByTargetId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: credentials */
export type Credentials_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "credentials" */
export enum Credentials_Select_Column {
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Ceramic = 'ceramic',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Gate = 'gate',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  Knowledges = 'knowledges',
  /** column name */
  Name = 'name',
  /** column name */
  Pow = 'pow',
  /** column name */
  Skills = 'skills',
  /** column name */
  TargetId = 'target_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "credentials" */
export type Credentials_Set_Input = {
  attitudes?: InputMaybe<Scalars['_text']>;
  ceramic?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  issuer_id?: InputMaybe<Scalars['uuid']>;
  knowledges?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  pow?: InputMaybe<Scalars['_json']>;
  skills?: InputMaybe<Scalars['_text']>;
  target_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "credentials" */
export enum Credentials_Update_Column {
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Ceramic = 'ceramic',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Gate = 'gate',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  Knowledges = 'knowledges',
  /** column name */
  Name = 'name',
  /** column name */
  Pow = 'pow',
  /** column name */
  Skills = 'skills',
  /** column name */
  TargetId = 'target_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "daos" */
export type Daos = {
  __typename?: 'daos';
  accomplishments?: Maybe<Scalars['String']>;
  background_url: Scalars['String'];
  blacklisted_flags: Scalars['_text'];
  /** An array relationship */
  bounties: Array<Bounties>;
  /** An aggregate relationship */
  bounties_aggregate: Bounties_Aggregate;
  categories?: Maybe<Scalars['_text']>;
  created_at: Scalars['timestamp'];
  description: Scalars['String'];
  ens?: Maybe<Scalars['String']>;
  faq?: Maybe<Scalars['_json']>;
  hangouts?: Maybe<Scalars['_text']>;
  how_to_join?: Maybe<Scalars['_text']>;
  id: Scalars['uuid'];
  logo_url: Scalars['String'];
  mv?: Maybe<Scalars['_text']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  /** An array relationship */
  token_benefits: Array<Token_Benefits>;
  /** An aggregate relationship */
  token_benefits_aggregate: Token_Benefits_Aggregate;
  updated_at: Scalars['timestamp'];
  wdwd?: Maybe<Scalars['String']>;
  whitelisted_flags: Scalars['_text'];
  youtube_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "daos" */
export type DaosBountiesArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


/** columns and relationships of "daos" */
export type DaosBounties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


/** columns and relationships of "daos" */
export type DaosToken_BenefitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};


/** columns and relationships of "daos" */
export type DaosToken_Benefits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};

/** aggregated selection of "daos" */
export type Daos_Aggregate = {
  __typename?: 'daos_aggregate';
  aggregate?: Maybe<Daos_Aggregate_Fields>;
  nodes: Array<Daos>;
};

/** aggregate fields of "daos" */
export type Daos_Aggregate_Fields = {
  __typename?: 'daos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Daos_Max_Fields>;
  min?: Maybe<Daos_Min_Fields>;
};


/** aggregate fields of "daos" */
export type Daos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Daos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "daos". All fields are combined with a logical 'AND'. */
export type Daos_Bool_Exp = {
  _and?: InputMaybe<Array<Daos_Bool_Exp>>;
  _not?: InputMaybe<Daos_Bool_Exp>;
  _or?: InputMaybe<Array<Daos_Bool_Exp>>;
  accomplishments?: InputMaybe<String_Comparison_Exp>;
  background_url?: InputMaybe<String_Comparison_Exp>;
  blacklisted_flags?: InputMaybe<_Text_Comparison_Exp>;
  bounties?: InputMaybe<Bounties_Bool_Exp>;
  categories?: InputMaybe<_Text_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  ens?: InputMaybe<String_Comparison_Exp>;
  faq?: InputMaybe<_Json_Comparison_Exp>;
  hangouts?: InputMaybe<_Text_Comparison_Exp>;
  how_to_join?: InputMaybe<_Text_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_url?: InputMaybe<String_Comparison_Exp>;
  mv?: InputMaybe<_Text_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  token_benefits?: InputMaybe<Token_Benefits_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  wdwd?: InputMaybe<String_Comparison_Exp>;
  whitelisted_flags?: InputMaybe<_Text_Comparison_Exp>;
  youtube_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "daos" */
export enum Daos_Constraint {
  /** unique or primary key constraint */
  DaosEnsUindex = 'daos_ens_uindex',
  /** unique or primary key constraint */
  DaosIdUindex = 'daos_id_uindex',
  /** unique or primary key constraint */
  DaosPk = 'daos_pk',
  /** unique or primary key constraint */
  DaosSlugUindex = 'daos_slug_uindex'
}

/** input type for inserting data into table "daos" */
export type Daos_Insert_Input = {
  accomplishments?: InputMaybe<Scalars['String']>;
  background_url?: InputMaybe<Scalars['String']>;
  blacklisted_flags?: InputMaybe<Scalars['_text']>;
  bounties?: InputMaybe<Bounties_Arr_Rel_Insert_Input>;
  categories?: InputMaybe<Scalars['_text']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  ens?: InputMaybe<Scalars['String']>;
  faq?: InputMaybe<Scalars['_json']>;
  hangouts?: InputMaybe<Scalars['_text']>;
  how_to_join?: InputMaybe<Scalars['_text']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  mv?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_benefits?: InputMaybe<Token_Benefits_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  wdwd?: InputMaybe<Scalars['String']>;
  whitelisted_flags?: InputMaybe<Scalars['_text']>;
  youtube_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Daos_Max_Fields = {
  __typename?: 'daos_max_fields';
  accomplishments?: Maybe<Scalars['String']>;
  background_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  ens?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  wdwd?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Daos_Min_Fields = {
  __typename?: 'daos_min_fields';
  accomplishments?: Maybe<Scalars['String']>;
  background_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  ens?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  wdwd?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "daos" */
export type Daos_Mutation_Response = {
  __typename?: 'daos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Daos>;
};

/** input type for inserting object relation for remote table "daos" */
export type Daos_Obj_Rel_Insert_Input = {
  data: Daos_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Daos_On_Conflict>;
};

/** on_conflict condition type for table "daos" */
export type Daos_On_Conflict = {
  constraint: Daos_Constraint;
  update_columns?: Array<Daos_Update_Column>;
  where?: InputMaybe<Daos_Bool_Exp>;
};

/** Ordering options when selecting data from "daos". */
export type Daos_Order_By = {
  accomplishments?: InputMaybe<Order_By>;
  background_url?: InputMaybe<Order_By>;
  blacklisted_flags?: InputMaybe<Order_By>;
  bounties_aggregate?: InputMaybe<Bounties_Aggregate_Order_By>;
  categories?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  faq?: InputMaybe<Order_By>;
  hangouts?: InputMaybe<Order_By>;
  how_to_join?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_url?: InputMaybe<Order_By>;
  mv?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  token_benefits_aggregate?: InputMaybe<Token_Benefits_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wdwd?: InputMaybe<Order_By>;
  whitelisted_flags?: InputMaybe<Order_By>;
  youtube_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: daos */
export type Daos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "daos" */
export enum Daos_Select_Column {
  /** column name */
  Accomplishments = 'accomplishments',
  /** column name */
  BackgroundUrl = 'background_url',
  /** column name */
  BlacklistedFlags = 'blacklisted_flags',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Ens = 'ens',
  /** column name */
  Faq = 'faq',
  /** column name */
  Hangouts = 'hangouts',
  /** column name */
  HowToJoin = 'how_to_join',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Mv = 'mv',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Wdwd = 'wdwd',
  /** column name */
  WhitelistedFlags = 'whitelisted_flags',
  /** column name */
  YoutubeUrl = 'youtube_url'
}

/** input type for updating data in table "daos" */
export type Daos_Set_Input = {
  accomplishments?: InputMaybe<Scalars['String']>;
  background_url?: InputMaybe<Scalars['String']>;
  blacklisted_flags?: InputMaybe<Scalars['_text']>;
  categories?: InputMaybe<Scalars['_text']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  ens?: InputMaybe<Scalars['String']>;
  faq?: InputMaybe<Scalars['_json']>;
  hangouts?: InputMaybe<Scalars['_text']>;
  how_to_join?: InputMaybe<Scalars['_text']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  mv?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  wdwd?: InputMaybe<Scalars['String']>;
  whitelisted_flags?: InputMaybe<Scalars['_text']>;
  youtube_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "daos" */
export enum Daos_Update_Column {
  /** column name */
  Accomplishments = 'accomplishments',
  /** column name */
  BackgroundUrl = 'background_url',
  /** column name */
  BlacklistedFlags = 'blacklisted_flags',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Ens = 'ens',
  /** column name */
  Faq = 'faq',
  /** column name */
  Hangouts = 'hangouts',
  /** column name */
  HowToJoin = 'how_to_join',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Mv = 'mv',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Wdwd = 'wdwd',
  /** column name */
  WhitelistedFlags = 'whitelisted_flags',
  /** column name */
  YoutubeUrl = 'youtube_url'
}

/** columns and relationships of "earners" */
export type Earners = {
  __typename?: 'earners';
  /** An object relationship */
  gate: Gates;
  gate_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "earners" */
export type Earners_Aggregate = {
  __typename?: 'earners_aggregate';
  aggregate?: Maybe<Earners_Aggregate_Fields>;
  nodes: Array<Earners>;
};

/** aggregate fields of "earners" */
export type Earners_Aggregate_Fields = {
  __typename?: 'earners_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Earners_Max_Fields>;
  min?: Maybe<Earners_Min_Fields>;
};


/** aggregate fields of "earners" */
export type Earners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Earners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "earners" */
export type Earners_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Earners_Max_Order_By>;
  min?: InputMaybe<Earners_Min_Order_By>;
};

/** input type for inserting array relation for remote table "earners" */
export type Earners_Arr_Rel_Insert_Input = {
  data: Array<Earners_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Earners_On_Conflict>;
};

/** Boolean expression to filter rows from the table "earners". All fields are combined with a logical 'AND'. */
export type Earners_Bool_Exp = {
  _and?: InputMaybe<Array<Earners_Bool_Exp>>;
  _not?: InputMaybe<Earners_Bool_Exp>;
  _or?: InputMaybe<Array<Earners_Bool_Exp>>;
  gate?: InputMaybe<Gates_Bool_Exp>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "earners" */
export enum Earners_Constraint {
  /** unique or primary key constraint */
  EarnersIdUindex = 'earners_id_uindex',
  /** unique or primary key constraint */
  EarnersPk = 'earners_pk'
}

/** input type for inserting data into table "earners" */
export type Earners_Insert_Input = {
  gate?: InputMaybe<Gates_Obj_Rel_Insert_Input>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Earners_Max_Fields = {
  __typename?: 'earners_max_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "earners" */
export type Earners_Max_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Earners_Min_Fields = {
  __typename?: 'earners_min_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "earners" */
export type Earners_Min_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "earners" */
export type Earners_Mutation_Response = {
  __typename?: 'earners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Earners>;
};

/** on_conflict condition type for table "earners" */
export type Earners_On_Conflict = {
  constraint: Earners_Constraint;
  update_columns?: Array<Earners_Update_Column>;
  where?: InputMaybe<Earners_Bool_Exp>;
};

/** Ordering options when selecting data from "earners". */
export type Earners_Order_By = {
  gate?: InputMaybe<Gates_Order_By>;
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: earners */
export type Earners_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "earners" */
export enum Earners_Select_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "earners" */
export type Earners_Set_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "earners" */
export enum Earners_Update_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "gate_progress" */
export type Gate_Progress = {
  __typename?: 'gate_progress';
  created_at: Scalars['timestamp'];
  gate_id: Scalars['uuid'];
  id: Scalars['uuid'];
  status: Scalars['gate_status'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "gate_progress" */
export type Gate_Progress_Aggregate = {
  __typename?: 'gate_progress_aggregate';
  aggregate?: Maybe<Gate_Progress_Aggregate_Fields>;
  nodes: Array<Gate_Progress>;
};

/** aggregate fields of "gate_progress" */
export type Gate_Progress_Aggregate_Fields = {
  __typename?: 'gate_progress_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gate_Progress_Max_Fields>;
  min?: Maybe<Gate_Progress_Min_Fields>;
};


/** aggregate fields of "gate_progress" */
export type Gate_Progress_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gate_progress" */
export type Gate_Progress_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gate_Progress_Max_Order_By>;
  min?: InputMaybe<Gate_Progress_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gate_progress" */
export type Gate_Progress_Arr_Rel_Insert_Input = {
  data: Array<Gate_Progress_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Gate_Progress_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gate_progress". All fields are combined with a logical 'AND'. */
export type Gate_Progress_Bool_Exp = {
  _and?: InputMaybe<Array<Gate_Progress_Bool_Exp>>;
  _not?: InputMaybe<Gate_Progress_Bool_Exp>;
  _or?: InputMaybe<Array<Gate_Progress_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Gate_Status_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gate_progress" */
export enum Gate_Progress_Constraint {
  /** unique or primary key constraint */
  GateProgressIdUindex = 'gate_progress_id_uindex',
  /** unique or primary key constraint */
  GateProgressPk = 'gate_progress_pk'
}

/** input type for inserting data into table "gate_progress" */
export type Gate_Progress_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['gate_status']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gate_Progress_Max_Fields = {
  __typename?: 'gate_progress_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['gate_status']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gate_progress" */
export type Gate_Progress_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gate_Progress_Min_Fields = {
  __typename?: 'gate_progress_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['gate_status']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gate_progress" */
export type Gate_Progress_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gate_progress" */
export type Gate_Progress_Mutation_Response = {
  __typename?: 'gate_progress_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gate_Progress>;
};

/** on_conflict condition type for table "gate_progress" */
export type Gate_Progress_On_Conflict = {
  constraint: Gate_Progress_Constraint;
  update_columns?: Array<Gate_Progress_Update_Column>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};

/** Ordering options when selecting data from "gate_progress". */
export type Gate_Progress_Order_By = {
  created_at?: InputMaybe<Order_By>;
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gate_progress */
export type Gate_Progress_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gate_progress" */
export enum Gate_Progress_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "gate_progress" */
export type Gate_Progress_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['gate_status']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "gate_progress" */
export enum Gate_Progress_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "gate_state". All fields are combined with logical 'AND'. */
export type Gate_State_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['gate_state']>;
  _gt?: InputMaybe<Scalars['gate_state']>;
  _gte?: InputMaybe<Scalars['gate_state']>;
  _in?: InputMaybe<Array<Scalars['gate_state']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['gate_state']>;
  _lte?: InputMaybe<Scalars['gate_state']>;
  _neq?: InputMaybe<Scalars['gate_state']>;
  _nin?: InputMaybe<Array<Scalars['gate_state']>>;
};

/** Boolean expression to compare columns of type "gate_status". All fields are combined with logical 'AND'. */
export type Gate_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['gate_status']>;
  _gt?: InputMaybe<Scalars['gate_status']>;
  _gte?: InputMaybe<Scalars['gate_status']>;
  _in?: InputMaybe<Array<Scalars['gate_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['gate_status']>;
  _lte?: InputMaybe<Scalars['gate_status']>;
  _neq?: InputMaybe<Scalars['gate_status']>;
  _nin?: InputMaybe<Array<Scalars['gate_status']>>;
};

/** columns and relationships of "gates" */
export type Gates = {
  __typename?: 'gates';
  attitudes?: Maybe<Scalars['_text']>;
  badge: Scalars['badge_scalar'];
  categories: Scalars['_text'];
  /** An object relationship */
  dao: Daos;
  dao_id: Scalars['uuid'];
  description: Scalars['String'];
  /** An array relationship */
  earners: Array<Earners>;
  /** An aggregate relationship */
  earners_aggregate: Earners_Aggregate;
  gate_name: Scalars['String'];
  id: Scalars['uuid'];
  keys?: Maybe<Scalars['Int']>;
  /** An array relationship */
  keysByGateId: Array<Keys>;
  /** An aggregate relationship */
  keysByGateId_aggregate: Keys_Aggregate;
  knowledge?: Maybe<Scalars['_text']>;
  links: Scalars['_json'];
  nft_type: Scalars['nft_type'];
  published: Scalars['gate_state'];
  skills?: Maybe<Scalars['_text']>;
};


/** columns and relationships of "gates" */
export type GatesEarnersArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


/** columns and relationships of "gates" */
export type GatesEarners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


/** columns and relationships of "gates" */
export type GatesKeysByGateIdArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};


/** columns and relationships of "gates" */
export type GatesKeysByGateId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};

/** aggregated selection of "gates" */
export type Gates_Aggregate = {
  __typename?: 'gates_aggregate';
  aggregate?: Maybe<Gates_Aggregate_Fields>;
  nodes: Array<Gates>;
};

/** aggregate fields of "gates" */
export type Gates_Aggregate_Fields = {
  __typename?: 'gates_aggregate_fields';
  avg?: Maybe<Gates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gates_Max_Fields>;
  min?: Maybe<Gates_Min_Fields>;
  stddev?: Maybe<Gates_Stddev_Fields>;
  stddev_pop?: Maybe<Gates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gates_Stddev_Samp_Fields>;
  sum?: Maybe<Gates_Sum_Fields>;
  var_pop?: Maybe<Gates_Var_Pop_Fields>;
  var_samp?: Maybe<Gates_Var_Samp_Fields>;
  variance?: Maybe<Gates_Variance_Fields>;
};


/** aggregate fields of "gates" */
export type Gates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Gates_Avg_Fields = {
  __typename?: 'gates_avg_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gates". All fields are combined with a logical 'AND'. */
export type Gates_Bool_Exp = {
  _and?: InputMaybe<Array<Gates_Bool_Exp>>;
  _not?: InputMaybe<Gates_Bool_Exp>;
  _or?: InputMaybe<Array<Gates_Bool_Exp>>;
  attitudes?: InputMaybe<_Text_Comparison_Exp>;
  badge?: InputMaybe<Badge_Scalar_Comparison_Exp>;
  categories?: InputMaybe<_Text_Comparison_Exp>;
  dao?: InputMaybe<Daos_Bool_Exp>;
  dao_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  earners?: InputMaybe<Earners_Bool_Exp>;
  gate_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  keys?: InputMaybe<Int_Comparison_Exp>;
  keysByGateId?: InputMaybe<Keys_Bool_Exp>;
  knowledge?: InputMaybe<_Text_Comparison_Exp>;
  links?: InputMaybe<_Json_Comparison_Exp>;
  nft_type?: InputMaybe<Nft_Type_Comparison_Exp>;
  published?: InputMaybe<Gate_State_Comparison_Exp>;
  skills?: InputMaybe<_Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "gates" */
export enum Gates_Constraint {
  /** unique or primary key constraint */
  GatesIdUindex = 'gates_id_uindex',
  /** unique or primary key constraint */
  GatesPk = 'gates_pk'
}

/** input type for incrementing numeric columns in table "gates" */
export type Gates_Inc_Input = {
  keys?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gates" */
export type Gates_Insert_Input = {
  attitudes?: InputMaybe<Scalars['_text']>;
  badge?: InputMaybe<Scalars['badge_scalar']>;
  categories?: InputMaybe<Scalars['_text']>;
  dao?: InputMaybe<Daos_Obj_Rel_Insert_Input>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  earners?: InputMaybe<Earners_Arr_Rel_Insert_Input>;
  gate_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  keys?: InputMaybe<Scalars['Int']>;
  keysByGateId?: InputMaybe<Keys_Arr_Rel_Insert_Input>;
  knowledge?: InputMaybe<Scalars['_text']>;
  links?: InputMaybe<Scalars['_json']>;
  nft_type?: InputMaybe<Scalars['nft_type']>;
  published?: InputMaybe<Scalars['gate_state']>;
  skills?: InputMaybe<Scalars['_text']>;
};

/** aggregate max on columns */
export type Gates_Max_Fields = {
  __typename?: 'gates_max_fields';
  badge?: Maybe<Scalars['badge_scalar']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  gate_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  keys?: Maybe<Scalars['Int']>;
  nft_type?: Maybe<Scalars['nft_type']>;
  published?: Maybe<Scalars['gate_state']>;
};

/** aggregate min on columns */
export type Gates_Min_Fields = {
  __typename?: 'gates_min_fields';
  badge?: Maybe<Scalars['badge_scalar']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  gate_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  keys?: Maybe<Scalars['Int']>;
  nft_type?: Maybe<Scalars['nft_type']>;
  published?: Maybe<Scalars['gate_state']>;
};

/** response of any mutation on the table "gates" */
export type Gates_Mutation_Response = {
  __typename?: 'gates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gates>;
};

/** input type for inserting object relation for remote table "gates" */
export type Gates_Obj_Rel_Insert_Input = {
  data: Gates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Gates_On_Conflict>;
};

/** on_conflict condition type for table "gates" */
export type Gates_On_Conflict = {
  constraint: Gates_Constraint;
  update_columns?: Array<Gates_Update_Column>;
  where?: InputMaybe<Gates_Bool_Exp>;
};

/** Ordering options when selecting data from "gates". */
export type Gates_Order_By = {
  attitudes?: InputMaybe<Order_By>;
  badge?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  dao?: InputMaybe<Daos_Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  earners_aggregate?: InputMaybe<Earners_Aggregate_Order_By>;
  gate_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keys?: InputMaybe<Order_By>;
  keysByGateId_aggregate?: InputMaybe<Keys_Aggregate_Order_By>;
  knowledge?: InputMaybe<Order_By>;
  links?: InputMaybe<Order_By>;
  nft_type?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gates */
export type Gates_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gates" */
export enum Gates_Select_Column {
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Badge = 'badge',
  /** column name */
  Categories = 'categories',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  GateName = 'gate_name',
  /** column name */
  Id = 'id',
  /** column name */
  Keys = 'keys',
  /** column name */
  Knowledge = 'knowledge',
  /** column name */
  Links = 'links',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  Published = 'published',
  /** column name */
  Skills = 'skills'
}

/** input type for updating data in table "gates" */
export type Gates_Set_Input = {
  attitudes?: InputMaybe<Scalars['_text']>;
  badge?: InputMaybe<Scalars['badge_scalar']>;
  categories?: InputMaybe<Scalars['_text']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  gate_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  keys?: InputMaybe<Scalars['Int']>;
  knowledge?: InputMaybe<Scalars['_text']>;
  links?: InputMaybe<Scalars['_json']>;
  nft_type?: InputMaybe<Scalars['nft_type']>;
  published?: InputMaybe<Scalars['gate_state']>;
  skills?: InputMaybe<Scalars['_text']>;
};

/** aggregate stddev on columns */
export type Gates_Stddev_Fields = {
  __typename?: 'gates_stddev_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gates_Stddev_Pop_Fields = {
  __typename?: 'gates_stddev_pop_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gates_Stddev_Samp_Fields = {
  __typename?: 'gates_stddev_samp_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Gates_Sum_Fields = {
  __typename?: 'gates_sum_fields';
  keys?: Maybe<Scalars['Int']>;
};

/** update columns of table "gates" */
export enum Gates_Update_Column {
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Badge = 'badge',
  /** column name */
  Categories = 'categories',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  GateName = 'gate_name',
  /** column name */
  Id = 'id',
  /** column name */
  Keys = 'keys',
  /** column name */
  Knowledge = 'knowledge',
  /** column name */
  Links = 'links',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  Published = 'published',
  /** column name */
  Skills = 'skills'
}

/** aggregate var_pop on columns */
export type Gates_Var_Pop_Fields = {
  __typename?: 'gates_var_pop_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gates_Var_Samp_Fields = {
  __typename?: 'gates_var_samp_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gates_Variance_Fields = {
  __typename?: 'gates_variance_fields';
  keys?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** columns and relationships of "key_progress" */
export type Key_Progress = {
  __typename?: 'key_progress';
  completed: Scalars['key_status'];
  created_at: Scalars['timestamp'];
  gate_id: Scalars['uuid'];
  id: Scalars['uuid'];
  key_id: Scalars['uuid'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "key_progress" */
export type Key_Progress_Aggregate = {
  __typename?: 'key_progress_aggregate';
  aggregate?: Maybe<Key_Progress_Aggregate_Fields>;
  nodes: Array<Key_Progress>;
};

/** aggregate fields of "key_progress" */
export type Key_Progress_Aggregate_Fields = {
  __typename?: 'key_progress_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Key_Progress_Max_Fields>;
  min?: Maybe<Key_Progress_Min_Fields>;
};


/** aggregate fields of "key_progress" */
export type Key_Progress_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Key_Progress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "key_progress". All fields are combined with a logical 'AND'. */
export type Key_Progress_Bool_Exp = {
  _and?: InputMaybe<Array<Key_Progress_Bool_Exp>>;
  _not?: InputMaybe<Key_Progress_Bool_Exp>;
  _or?: InputMaybe<Array<Key_Progress_Bool_Exp>>;
  completed?: InputMaybe<Key_Status_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "key_progress" */
export enum Key_Progress_Constraint {
  /** unique or primary key constraint */
  KeyProgressIdUindex = 'key_progress_id_uindex',
  /** unique or primary key constraint */
  KeyProgressPk = 'key_progress_pk'
}

/** input type for inserting data into table "key_progress" */
export type Key_Progress_Insert_Input = {
  completed?: InputMaybe<Scalars['key_status']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  key_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Key_Progress_Max_Fields = {
  __typename?: 'key_progress_max_fields';
  completed?: Maybe<Scalars['key_status']>;
  created_at?: Maybe<Scalars['timestamp']>;
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  key_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Key_Progress_Min_Fields = {
  __typename?: 'key_progress_min_fields';
  completed?: Maybe<Scalars['key_status']>;
  created_at?: Maybe<Scalars['timestamp']>;
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  key_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "key_progress" */
export type Key_Progress_Mutation_Response = {
  __typename?: 'key_progress_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Key_Progress>;
};

/** on_conflict condition type for table "key_progress" */
export type Key_Progress_On_Conflict = {
  constraint: Key_Progress_Constraint;
  update_columns?: Array<Key_Progress_Update_Column>;
  where?: InputMaybe<Key_Progress_Bool_Exp>;
};

/** Ordering options when selecting data from "key_progress". */
export type Key_Progress_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: key_progress */
export type Key_Progress_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "key_progress" */
export enum Key_Progress_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  KeyId = 'key_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "key_progress" */
export type Key_Progress_Set_Input = {
  completed?: InputMaybe<Scalars['key_status']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  key_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "key_progress" */
export enum Key_Progress_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  KeyId = 'key_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "key_status". All fields are combined with logical 'AND'. */
export type Key_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['key_status']>;
  _gt?: InputMaybe<Scalars['key_status']>;
  _gte?: InputMaybe<Scalars['key_status']>;
  _in?: InputMaybe<Array<Scalars['key_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['key_status']>;
  _lte?: InputMaybe<Scalars['key_status']>;
  _neq?: InputMaybe<Scalars['key_status']>;
  _nin?: InputMaybe<Array<Scalars['key_status']>>;
};

/** columns and relationships of "keys" */
export type Keys = {
  __typename?: 'keys';
  gate_id: Scalars['uuid'];
  id: Scalars['uuid'];
  information: Scalars['_key_information'];
  keys: Scalars['Int'];
  people_limit: Scalars['Int'];
  task: Scalars['json'];
  task_type: Scalars['task_type'];
  unlimited: Scalars['Boolean'];
};


/** columns and relationships of "keys" */
export type KeysTaskArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "keys" */
export type Keys_Aggregate = {
  __typename?: 'keys_aggregate';
  aggregate?: Maybe<Keys_Aggregate_Fields>;
  nodes: Array<Keys>;
};

/** aggregate fields of "keys" */
export type Keys_Aggregate_Fields = {
  __typename?: 'keys_aggregate_fields';
  avg?: Maybe<Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Keys_Max_Fields>;
  min?: Maybe<Keys_Min_Fields>;
  stddev?: Maybe<Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Keys_Sum_Fields>;
  var_pop?: Maybe<Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Keys_Var_Samp_Fields>;
  variance?: Maybe<Keys_Variance_Fields>;
};


/** aggregate fields of "keys" */
export type Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "keys" */
export type Keys_Aggregate_Order_By = {
  avg?: InputMaybe<Keys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Keys_Max_Order_By>;
  min?: InputMaybe<Keys_Min_Order_By>;
  stddev?: InputMaybe<Keys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Keys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Keys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Keys_Sum_Order_By>;
  var_pop?: InputMaybe<Keys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Keys_Var_Samp_Order_By>;
  variance?: InputMaybe<Keys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "keys" */
export type Keys_Arr_Rel_Insert_Input = {
  data: Array<Keys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Keys_On_Conflict>;
};

/** aggregate avg on columns */
export type Keys_Avg_Fields = {
  __typename?: 'keys_avg_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "keys" */
export type Keys_Avg_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "keys". All fields are combined with a logical 'AND'. */
export type Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Keys_Bool_Exp>>;
  _not?: InputMaybe<Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Keys_Bool_Exp>>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  information?: InputMaybe<_Key_Information_Comparison_Exp>;
  keys?: InputMaybe<Int_Comparison_Exp>;
  people_limit?: InputMaybe<Int_Comparison_Exp>;
  task?: InputMaybe<Json_Comparison_Exp>;
  task_type?: InputMaybe<Task_Type_Comparison_Exp>;
  unlimited?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "keys" */
export enum Keys_Constraint {
  /** unique or primary key constraint */
  KeysIdUindex = 'keys_id_uindex',
  /** unique or primary key constraint */
  KeysPk = 'keys_pk'
}

/** input type for incrementing numeric columns in table "keys" */
export type Keys_Inc_Input = {
  keys?: InputMaybe<Scalars['Int']>;
  people_limit?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "keys" */
export type Keys_Insert_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  information?: InputMaybe<Scalars['_key_information']>;
  keys?: InputMaybe<Scalars['Int']>;
  people_limit?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['json']>;
  task_type?: InputMaybe<Scalars['task_type']>;
  unlimited?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Keys_Max_Fields = {
  __typename?: 'keys_max_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  keys?: Maybe<Scalars['Int']>;
  people_limit?: Maybe<Scalars['Int']>;
  task_type?: Maybe<Scalars['task_type']>;
};

/** order by max() on columns of table "keys" */
export type Keys_Max_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
  task_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Keys_Min_Fields = {
  __typename?: 'keys_min_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  keys?: Maybe<Scalars['Int']>;
  people_limit?: Maybe<Scalars['Int']>;
  task_type?: Maybe<Scalars['task_type']>;
};

/** order by min() on columns of table "keys" */
export type Keys_Min_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
  task_type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "keys" */
export type Keys_Mutation_Response = {
  __typename?: 'keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Keys>;
};

/** on_conflict condition type for table "keys" */
export type Keys_On_Conflict = {
  constraint: Keys_Constraint;
  update_columns?: Array<Keys_Update_Column>;
  where?: InputMaybe<Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "keys". */
export type Keys_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  information?: InputMaybe<Order_By>;
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
  task_type?: InputMaybe<Order_By>;
  unlimited?: InputMaybe<Order_By>;
};

/** primary key columns input for table: keys */
export type Keys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "keys" */
export enum Keys_Select_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Information = 'information',
  /** column name */
  Keys = 'keys',
  /** column name */
  PeopleLimit = 'people_limit',
  /** column name */
  Task = 'task',
  /** column name */
  TaskType = 'task_type',
  /** column name */
  Unlimited = 'unlimited'
}

/** input type for updating data in table "keys" */
export type Keys_Set_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  information?: InputMaybe<Scalars['_key_information']>;
  keys?: InputMaybe<Scalars['Int']>;
  people_limit?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['json']>;
  task_type?: InputMaybe<Scalars['task_type']>;
  unlimited?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Keys_Stddev_Fields = {
  __typename?: 'keys_stddev_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "keys" */
export type Keys_Stddev_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Keys_Stddev_Pop_Fields = {
  __typename?: 'keys_stddev_pop_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "keys" */
export type Keys_Stddev_Pop_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Keys_Stddev_Samp_Fields = {
  __typename?: 'keys_stddev_samp_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "keys" */
export type Keys_Stddev_Samp_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Keys_Sum_Fields = {
  __typename?: 'keys_sum_fields';
  keys?: Maybe<Scalars['Int']>;
  people_limit?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "keys" */
export type Keys_Sum_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** update columns of table "keys" */
export enum Keys_Update_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Information = 'information',
  /** column name */
  Keys = 'keys',
  /** column name */
  PeopleLimit = 'people_limit',
  /** column name */
  Task = 'task',
  /** column name */
  TaskType = 'task_type',
  /** column name */
  Unlimited = 'unlimited'
}

/** aggregate var_pop on columns */
export type Keys_Var_Pop_Fields = {
  __typename?: 'keys_var_pop_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "keys" */
export type Keys_Var_Pop_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Keys_Var_Samp_Fields = {
  __typename?: 'keys_var_samp_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "keys" */
export type Keys_Var_Samp_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Keys_Variance_Fields = {
  __typename?: 'keys_variance_fields';
  keys?: Maybe<Scalars['Float']>;
  people_limit?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "keys" */
export type Keys_Variance_Order_By = {
  keys?: InputMaybe<Order_By>;
  people_limit?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bounties" */
  delete_bounties?: Maybe<Bounties_Mutation_Response>;
  /** delete single row from the table: "bounties" */
  delete_bounties_by_pk?: Maybe<Bounties>;
  /** delete data from the table: "credentials" */
  delete_credentials?: Maybe<Credentials_Mutation_Response>;
  /** delete single row from the table: "credentials" */
  delete_credentials_by_pk?: Maybe<Credentials>;
  /** delete data from the table: "daos" */
  delete_daos?: Maybe<Daos_Mutation_Response>;
  /** delete single row from the table: "daos" */
  delete_daos_by_pk?: Maybe<Daos>;
  /** delete data from the table: "earners" */
  delete_earners?: Maybe<Earners_Mutation_Response>;
  /** delete single row from the table: "earners" */
  delete_earners_by_pk?: Maybe<Earners>;
  /** delete data from the table: "gate_progress" */
  delete_gate_progress?: Maybe<Gate_Progress_Mutation_Response>;
  /** delete single row from the table: "gate_progress" */
  delete_gate_progress_by_pk?: Maybe<Gate_Progress>;
  /** delete data from the table: "gates" */
  delete_gates?: Maybe<Gates_Mutation_Response>;
  /** delete single row from the table: "gates" */
  delete_gates_by_pk?: Maybe<Gates>;
  /** delete data from the table: "key_progress" */
  delete_key_progress?: Maybe<Key_Progress_Mutation_Response>;
  /** delete single row from the table: "key_progress" */
  delete_key_progress_by_pk?: Maybe<Key_Progress>;
  /** delete data from the table: "keys" */
  delete_keys?: Maybe<Keys_Mutation_Response>;
  /** delete single row from the table: "keys" */
  delete_keys_by_pk?: Maybe<Keys>;
  /** delete data from the table: "permissions" */
  delete_permissions?: Maybe<Permissions_Mutation_Response>;
  /** delete data from the table: "token_benefits" */
  delete_token_benefits?: Maybe<Token_Benefits_Mutation_Response>;
  /** delete single row from the table: "token_benefits" */
  delete_token_benefits_by_pk?: Maybe<Token_Benefits>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "bounties" */
  insert_bounties?: Maybe<Bounties_Mutation_Response>;
  /** insert a single row into the table: "bounties" */
  insert_bounties_one?: Maybe<Bounties>;
  /** insert data into the table: "credentials" */
  insert_credentials?: Maybe<Credentials_Mutation_Response>;
  /** insert a single row into the table: "credentials" */
  insert_credentials_one?: Maybe<Credentials>;
  /** insert data into the table: "daos" */
  insert_daos?: Maybe<Daos_Mutation_Response>;
  /** insert a single row into the table: "daos" */
  insert_daos_one?: Maybe<Daos>;
  /** insert data into the table: "earners" */
  insert_earners?: Maybe<Earners_Mutation_Response>;
  /** insert a single row into the table: "earners" */
  insert_earners_one?: Maybe<Earners>;
  /** insert data into the table: "gate_progress" */
  insert_gate_progress?: Maybe<Gate_Progress_Mutation_Response>;
  /** insert a single row into the table: "gate_progress" */
  insert_gate_progress_one?: Maybe<Gate_Progress>;
  /** insert data into the table: "gates" */
  insert_gates?: Maybe<Gates_Mutation_Response>;
  /** insert a single row into the table: "gates" */
  insert_gates_one?: Maybe<Gates>;
  /** insert data into the table: "key_progress" */
  insert_key_progress?: Maybe<Key_Progress_Mutation_Response>;
  /** insert a single row into the table: "key_progress" */
  insert_key_progress_one?: Maybe<Key_Progress>;
  /** insert data into the table: "keys" */
  insert_keys?: Maybe<Keys_Mutation_Response>;
  /** insert a single row into the table: "keys" */
  insert_keys_one?: Maybe<Keys>;
  /** insert data into the table: "permissions" */
  insert_permissions?: Maybe<Permissions_Mutation_Response>;
  /** insert a single row into the table: "permissions" */
  insert_permissions_one?: Maybe<Permissions>;
  /** insert data into the table: "token_benefits" */
  insert_token_benefits?: Maybe<Token_Benefits_Mutation_Response>;
  /** insert a single row into the table: "token_benefits" */
  insert_token_benefits_one?: Maybe<Token_Benefits>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** updateUser with enrichment */
  updateUser?: Maybe<UserBodyOutput>;
  /** update data of the table: "bounties" */
  update_bounties?: Maybe<Bounties_Mutation_Response>;
  /** update single row of the table: "bounties" */
  update_bounties_by_pk?: Maybe<Bounties>;
  /** update data of the table: "credentials" */
  update_credentials?: Maybe<Credentials_Mutation_Response>;
  /** update single row of the table: "credentials" */
  update_credentials_by_pk?: Maybe<Credentials>;
  /** update data of the table: "daos" */
  update_daos?: Maybe<Daos_Mutation_Response>;
  /** update single row of the table: "daos" */
  update_daos_by_pk?: Maybe<Daos>;
  /** update data of the table: "earners" */
  update_earners?: Maybe<Earners_Mutation_Response>;
  /** update single row of the table: "earners" */
  update_earners_by_pk?: Maybe<Earners>;
  /** update data of the table: "gate_progress" */
  update_gate_progress?: Maybe<Gate_Progress_Mutation_Response>;
  /** update single row of the table: "gate_progress" */
  update_gate_progress_by_pk?: Maybe<Gate_Progress>;
  /** update data of the table: "gates" */
  update_gates?: Maybe<Gates_Mutation_Response>;
  /** update single row of the table: "gates" */
  update_gates_by_pk?: Maybe<Gates>;
  /** update data of the table: "key_progress" */
  update_key_progress?: Maybe<Key_Progress_Mutation_Response>;
  /** update single row of the table: "key_progress" */
  update_key_progress_by_pk?: Maybe<Key_Progress>;
  /** update data of the table: "keys" */
  update_keys?: Maybe<Keys_Mutation_Response>;
  /** update single row of the table: "keys" */
  update_keys_by_pk?: Maybe<Keys>;
  /** update data of the table: "permissions" */
  update_permissions?: Maybe<Permissions_Mutation_Response>;
  /** update data of the table: "token_benefits" */
  update_token_benefits?: Maybe<Token_Benefits_Mutation_Response>;
  /** update single row of the table: "token_benefits" */
  update_token_benefits_by_pk?: Maybe<Token_Benefits>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** verify_key */
  verify_key?: Maybe<VerifyOutput>;
};


/** mutation root */
export type Mutation_RootDelete_BountiesArgs = {
  where: Bounties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bounties_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CredentialsArgs = {
  where: Credentials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Credentials_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DaosArgs = {
  where: Daos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Daos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EarnersArgs = {
  where: Earners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Earners_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Gate_ProgressArgs = {
  where: Gate_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gate_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GatesArgs = {
  where: Gates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gates_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Key_ProgressArgs = {
  where: Key_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Key_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_KeysArgs = {
  where: Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Keys_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionsArgs = {
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_BenefitsArgs = {
  where: Token_Benefits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Benefits_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BountiesArgs = {
  objects: Array<Bounties_Insert_Input>;
  on_conflict?: InputMaybe<Bounties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bounties_OneArgs = {
  object: Bounties_Insert_Input;
  on_conflict?: InputMaybe<Bounties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CredentialsArgs = {
  objects: Array<Credentials_Insert_Input>;
  on_conflict?: InputMaybe<Credentials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credentials_OneArgs = {
  object: Credentials_Insert_Input;
  on_conflict?: InputMaybe<Credentials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DaosArgs = {
  objects: Array<Daos_Insert_Input>;
  on_conflict?: InputMaybe<Daos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Daos_OneArgs = {
  object: Daos_Insert_Input;
  on_conflict?: InputMaybe<Daos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EarnersArgs = {
  objects: Array<Earners_Insert_Input>;
  on_conflict?: InputMaybe<Earners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Earners_OneArgs = {
  object: Earners_Insert_Input;
  on_conflict?: InputMaybe<Earners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gate_ProgressArgs = {
  objects: Array<Gate_Progress_Insert_Input>;
  on_conflict?: InputMaybe<Gate_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gate_Progress_OneArgs = {
  object: Gate_Progress_Insert_Input;
  on_conflict?: InputMaybe<Gate_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GatesArgs = {
  objects: Array<Gates_Insert_Input>;
  on_conflict?: InputMaybe<Gates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gates_OneArgs = {
  object: Gates_Insert_Input;
  on_conflict?: InputMaybe<Gates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_ProgressArgs = {
  objects: Array<Key_Progress_Insert_Input>;
  on_conflict?: InputMaybe<Key_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_Progress_OneArgs = {
  object: Key_Progress_Insert_Input;
  on_conflict?: InputMaybe<Key_Progress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KeysArgs = {
  objects: Array<Keys_Insert_Input>;
  on_conflict?: InputMaybe<Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Keys_OneArgs = {
  object: Keys_Insert_Input;
  on_conflict?: InputMaybe<Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionsArgs = {
  objects: Array<Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permissions_OneArgs = {
  object: Permissions_Insert_Input;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_BenefitsArgs = {
  objects: Array<Token_Benefits_Insert_Input>;
  on_conflict?: InputMaybe<Token_Benefits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Benefits_OneArgs = {
  object: Token_Benefits_Insert_Input;
  on_conflict?: InputMaybe<Token_Benefits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  userBody: UserBodyInput;
};


/** mutation root */
export type Mutation_RootUpdate_BountiesArgs = {
  _set?: InputMaybe<Bounties_Set_Input>;
  where: Bounties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bounties_By_PkArgs = {
  _set?: InputMaybe<Bounties_Set_Input>;
  pk_columns: Bounties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CredentialsArgs = {
  _set?: InputMaybe<Credentials_Set_Input>;
  where: Credentials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Credentials_By_PkArgs = {
  _set?: InputMaybe<Credentials_Set_Input>;
  pk_columns: Credentials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DaosArgs = {
  _set?: InputMaybe<Daos_Set_Input>;
  where: Daos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Daos_By_PkArgs = {
  _set?: InputMaybe<Daos_Set_Input>;
  pk_columns: Daos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EarnersArgs = {
  _set?: InputMaybe<Earners_Set_Input>;
  where: Earners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Earners_By_PkArgs = {
  _set?: InputMaybe<Earners_Set_Input>;
  pk_columns: Earners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gate_ProgressArgs = {
  _set?: InputMaybe<Gate_Progress_Set_Input>;
  where: Gate_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gate_Progress_By_PkArgs = {
  _set?: InputMaybe<Gate_Progress_Set_Input>;
  pk_columns: Gate_Progress_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GatesArgs = {
  _inc?: InputMaybe<Gates_Inc_Input>;
  _set?: InputMaybe<Gates_Set_Input>;
  where: Gates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gates_By_PkArgs = {
  _inc?: InputMaybe<Gates_Inc_Input>;
  _set?: InputMaybe<Gates_Set_Input>;
  pk_columns: Gates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Key_ProgressArgs = {
  _set?: InputMaybe<Key_Progress_Set_Input>;
  where: Key_Progress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Key_Progress_By_PkArgs = {
  _set?: InputMaybe<Key_Progress_Set_Input>;
  pk_columns: Key_Progress_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_KeysArgs = {
  _inc?: InputMaybe<Keys_Inc_Input>;
  _set?: InputMaybe<Keys_Set_Input>;
  where: Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Keys_By_PkArgs = {
  _inc?: InputMaybe<Keys_Inc_Input>;
  _set?: InputMaybe<Keys_Set_Input>;
  pk_columns: Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionsArgs = {
  _set?: InputMaybe<Permissions_Set_Input>;
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_BenefitsArgs = {
  _set?: InputMaybe<Token_Benefits_Set_Input>;
  where: Token_Benefits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Benefits_By_PkArgs = {
  _set?: InputMaybe<Token_Benefits_Set_Input>;
  pk_columns: Token_Benefits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootVerify_KeyArgs = {
  input?: InputMaybe<VerifyInput>;
};

/** Boolean expression to compare columns of type "nft_type". All fields are combined with logical 'AND'. */
export type Nft_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['nft_type']>;
  _gt?: InputMaybe<Scalars['nft_type']>;
  _gte?: InputMaybe<Scalars['nft_type']>;
  _in?: InputMaybe<Array<Scalars['nft_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['nft_type']>;
  _lte?: InputMaybe<Scalars['nft_type']>;
  _neq?: InputMaybe<Scalars['nft_type']>;
  _nin?: InputMaybe<Array<Scalars['nft_type']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to compare columns of type "permission_types". All fields are combined with logical 'AND'. */
export type Permission_Types_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['permission_types']>;
  _gt?: InputMaybe<Scalars['permission_types']>;
  _gte?: InputMaybe<Scalars['permission_types']>;
  _in?: InputMaybe<Array<Scalars['permission_types']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['permission_types']>;
  _lte?: InputMaybe<Scalars['permission_types']>;
  _neq?: InputMaybe<Scalars['permission_types']>;
  _nin?: InputMaybe<Array<Scalars['permission_types']>>;
};

/** columns and relationships of "permissions" */
export type Permissions = {
  __typename?: 'permissions';
  created_at: Scalars['timestamp'];
  /** An object relationship */
  dao?: Maybe<Daos>;
  dao_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  gate?: Maybe<Gates>;
  gate_id?: Maybe<Scalars['uuid']>;
  permission?: Maybe<Scalars['permission_types']>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "permissions" */
export type Permissions_Aggregate = {
  __typename?: 'permissions_aggregate';
  aggregate?: Maybe<Permissions_Aggregate_Fields>;
  nodes: Array<Permissions>;
};

/** aggregate fields of "permissions" */
export type Permissions_Aggregate_Fields = {
  __typename?: 'permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Permissions_Max_Fields>;
  min?: Maybe<Permissions_Min_Fields>;
};


/** aggregate fields of "permissions" */
export type Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "permissions". All fields are combined with a logical 'AND'. */
export type Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Permissions_Bool_Exp>>;
  _not?: InputMaybe<Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Permissions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dao?: InputMaybe<Daos_Bool_Exp>;
  dao_id?: InputMaybe<Uuid_Comparison_Exp>;
  gate?: InputMaybe<Gates_Bool_Exp>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  permission?: InputMaybe<Permission_Types_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "permissions" */
export enum Permissions_Constraint {
  /** unique or primary key constraint */
  PermissionsUserIdDaoIdGateIdKey = 'permissions_user_id_dao_id_gate_id_key',
  /** unique or primary key constraint */
  PermissionsUserIdUindex = 'permissions_user_id_uindex'
}

/** input type for inserting data into table "permissions" */
export type Permissions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao?: InputMaybe<Daos_Obj_Rel_Insert_Input>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  gate?: InputMaybe<Gates_Obj_Rel_Insert_Input>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['permission_types']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Permissions_Max_Fields = {
  __typename?: 'permissions_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  gate_id?: Maybe<Scalars['uuid']>;
  permission?: Maybe<Scalars['permission_types']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Permissions_Min_Fields = {
  __typename?: 'permissions_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  gate_id?: Maybe<Scalars['uuid']>;
  permission?: Maybe<Scalars['permission_types']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "permissions" */
export type Permissions_Mutation_Response = {
  __typename?: 'permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Permissions>;
};

/** on_conflict condition type for table "permissions" */
export type Permissions_On_Conflict = {
  constraint: Permissions_Constraint;
  update_columns?: Array<Permissions_Update_Column>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "permissions". */
export type Permissions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dao?: InputMaybe<Daos_Order_By>;
  dao_id?: InputMaybe<Order_By>;
  gate?: InputMaybe<Gates_Order_By>;
  gate_id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "permissions" */
export enum Permissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "permissions" */
export type Permissions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  gate_id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['permission_types']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "permissions" */
export enum Permissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Permission = 'permission',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  bounties: Array<Bounties>;
  /** An aggregate relationship */
  bounties_aggregate: Bounties_Aggregate;
  /** fetch data from the table: "bounties" using primary key columns */
  bounties_by_pk?: Maybe<Bounties>;
  /** fetch data from the table: "credentials" */
  credentials: Array<Credentials>;
  /** fetch aggregated fields from the table: "credentials" */
  credentials_aggregate: Credentials_Aggregate;
  /** fetch data from the table: "credentials" using primary key columns */
  credentials_by_pk?: Maybe<Credentials>;
  /** fetch data from the table: "daos" */
  daos: Array<Daos>;
  /** fetch aggregated fields from the table: "daos" */
  daos_aggregate: Daos_Aggregate;
  /** fetch data from the table: "daos" using primary key columns */
  daos_by_pk?: Maybe<Daos>;
  /** An array relationship */
  earners: Array<Earners>;
  /** An aggregate relationship */
  earners_aggregate: Earners_Aggregate;
  /** fetch data from the table: "earners" using primary key columns */
  earners_by_pk?: Maybe<Earners>;
  /** fetch data from the table: "gate_progress" */
  gate_progress: Array<Gate_Progress>;
  /** fetch aggregated fields from the table: "gate_progress" */
  gate_progress_aggregate: Gate_Progress_Aggregate;
  /** fetch data from the table: "gate_progress" using primary key columns */
  gate_progress_by_pk?: Maybe<Gate_Progress>;
  /** fetch data from the table: "gates" */
  gates: Array<Gates>;
  /** fetch aggregated fields from the table: "gates" */
  gates_aggregate: Gates_Aggregate;
  /** fetch data from the table: "gates" using primary key columns */
  gates_by_pk?: Maybe<Gates>;
  /** fetch data from the table: "key_progress" */
  key_progress: Array<Key_Progress>;
  /** fetch aggregated fields from the table: "key_progress" */
  key_progress_aggregate: Key_Progress_Aggregate;
  /** fetch data from the table: "key_progress" using primary key columns */
  key_progress_by_pk?: Maybe<Key_Progress>;
  /** fetch data from the table: "keys" */
  keys: Array<Keys>;
  /** fetch aggregated fields from the table: "keys" */
  keys_aggregate: Keys_Aggregate;
  /** fetch data from the table: "keys" using primary key columns */
  keys_by_pk?: Maybe<Keys>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** search_credentials */
  search_credentials?: Maybe<AlgoliaSearchResults>;
  /** search_daos */
  search_daos?: Maybe<AlgoliaSearchResults>;
  /** search_gates */
  search_gates?: Maybe<AlgoliaSearchResults>;
  /** search_users */
  search_users?: Maybe<AlgoliaSearchResults>;
  /** An array relationship */
  token_benefits: Array<Token_Benefits>;
  /** An aggregate relationship */
  token_benefits_aggregate: Token_Benefits_Aggregate;
  /** fetch data from the table: "token_benefits" using primary key columns */
  token_benefits_by_pk?: Maybe<Token_Benefits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBountiesArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


export type Query_RootBounties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


export type Query_RootBounties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCredentialsArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


export type Query_RootCredentials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


export type Query_RootCredentials_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDaosArgs = {
  distinct_on?: InputMaybe<Array<Daos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Daos_Order_By>>;
  where?: InputMaybe<Daos_Bool_Exp>;
};


export type Query_RootDaos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Daos_Order_By>>;
  where?: InputMaybe<Daos_Bool_Exp>;
};


export type Query_RootDaos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEarnersArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


export type Query_RootEarners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


export type Query_RootEarners_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGate_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};


export type Query_RootGate_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};


export type Query_RootGate_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGatesArgs = {
  distinct_on?: InputMaybe<Array<Gates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gates_Order_By>>;
  where?: InputMaybe<Gates_Bool_Exp>;
};


export type Query_RootGates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gates_Order_By>>;
  where?: InputMaybe<Gates_Bool_Exp>;
};


export type Query_RootGates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootKey_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Key_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Progress_Order_By>>;
  where?: InputMaybe<Key_Progress_Bool_Exp>;
};


export type Query_RootKey_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Key_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Progress_Order_By>>;
  where?: InputMaybe<Key_Progress_Bool_Exp>;
};


export type Query_RootKey_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootKeysArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};


export type Query_RootKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};


export type Query_RootKeys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootSearch_CredentialsArgs = {
  pagination?: InputMaybe<AlgoliaPaginationInput>;
  query: Scalars['String'];
};


export type Query_RootSearch_DaosArgs = {
  pagination?: InputMaybe<AlgoliaPaginationInput>;
  query: Scalars['String'];
};


export type Query_RootSearch_GatesArgs = {
  pagination?: InputMaybe<AlgoliaPaginationInput>;
  query: Scalars['String'];
};


export type Query_RootSearch_UsersArgs = {
  pagination?: InputMaybe<AlgoliaPaginationInput>;
  query: Scalars['String'];
};


export type Query_RootToken_BenefitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};


export type Query_RootToken_Benefits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};


export type Query_RootToken_Benefits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  bounties: Array<Bounties>;
  /** An aggregate relationship */
  bounties_aggregate: Bounties_Aggregate;
  /** fetch data from the table: "bounties" using primary key columns */
  bounties_by_pk?: Maybe<Bounties>;
  /** fetch data from the table: "credentials" */
  credentials: Array<Credentials>;
  /** fetch aggregated fields from the table: "credentials" */
  credentials_aggregate: Credentials_Aggregate;
  /** fetch data from the table: "credentials" using primary key columns */
  credentials_by_pk?: Maybe<Credentials>;
  /** fetch data from the table: "daos" */
  daos: Array<Daos>;
  /** fetch aggregated fields from the table: "daos" */
  daos_aggregate: Daos_Aggregate;
  /** fetch data from the table: "daos" using primary key columns */
  daos_by_pk?: Maybe<Daos>;
  /** An array relationship */
  earners: Array<Earners>;
  /** An aggregate relationship */
  earners_aggregate: Earners_Aggregate;
  /** fetch data from the table: "earners" using primary key columns */
  earners_by_pk?: Maybe<Earners>;
  /** fetch data from the table: "gate_progress" */
  gate_progress: Array<Gate_Progress>;
  /** fetch aggregated fields from the table: "gate_progress" */
  gate_progress_aggregate: Gate_Progress_Aggregate;
  /** fetch data from the table: "gate_progress" using primary key columns */
  gate_progress_by_pk?: Maybe<Gate_Progress>;
  /** fetch data from the table: "gates" */
  gates: Array<Gates>;
  /** fetch aggregated fields from the table: "gates" */
  gates_aggregate: Gates_Aggregate;
  /** fetch data from the table: "gates" using primary key columns */
  gates_by_pk?: Maybe<Gates>;
  /** fetch data from the table: "key_progress" */
  key_progress: Array<Key_Progress>;
  /** fetch aggregated fields from the table: "key_progress" */
  key_progress_aggregate: Key_Progress_Aggregate;
  /** fetch data from the table: "key_progress" using primary key columns */
  key_progress_by_pk?: Maybe<Key_Progress>;
  /** fetch data from the table: "keys" */
  keys: Array<Keys>;
  /** fetch aggregated fields from the table: "keys" */
  keys_aggregate: Keys_Aggregate;
  /** fetch data from the table: "keys" using primary key columns */
  keys_by_pk?: Maybe<Keys>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** An array relationship */
  token_benefits: Array<Token_Benefits>;
  /** An aggregate relationship */
  token_benefits_aggregate: Token_Benefits_Aggregate;
  /** fetch data from the table: "token_benefits" using primary key columns */
  token_benefits_by_pk?: Maybe<Token_Benefits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootBountiesArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


export type Subscription_RootBounties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bounties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bounties_Order_By>>;
  where?: InputMaybe<Bounties_Bool_Exp>;
};


export type Subscription_RootBounties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCredentialsArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


export type Subscription_RootCredentials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


export type Subscription_RootCredentials_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDaosArgs = {
  distinct_on?: InputMaybe<Array<Daos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Daos_Order_By>>;
  where?: InputMaybe<Daos_Bool_Exp>;
};


export type Subscription_RootDaos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Daos_Order_By>>;
  where?: InputMaybe<Daos_Bool_Exp>;
};


export type Subscription_RootDaos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEarnersArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


export type Subscription_RootEarners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Earners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Earners_Order_By>>;
  where?: InputMaybe<Earners_Bool_Exp>;
};


export type Subscription_RootEarners_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGate_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};


export type Subscription_RootGate_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};


export type Subscription_RootGate_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGatesArgs = {
  distinct_on?: InputMaybe<Array<Gates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gates_Order_By>>;
  where?: InputMaybe<Gates_Bool_Exp>;
};


export type Subscription_RootGates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gates_Order_By>>;
  where?: InputMaybe<Gates_Bool_Exp>;
};


export type Subscription_RootGates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootKey_ProgressArgs = {
  distinct_on?: InputMaybe<Array<Key_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Progress_Order_By>>;
  where?: InputMaybe<Key_Progress_Bool_Exp>;
};


export type Subscription_RootKey_Progress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Key_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Progress_Order_By>>;
  where?: InputMaybe<Key_Progress_Bool_Exp>;
};


export type Subscription_RootKey_Progress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootKeysArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};


export type Subscription_RootKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keys_Order_By>>;
  where?: InputMaybe<Keys_Bool_Exp>;
};


export type Subscription_RootKeys_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootToken_BenefitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};


export type Subscription_RootToken_Benefits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Benefits_Order_By>>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};


export type Subscription_RootToken_Benefits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "task_type". All fields are combined with logical 'AND'. */
export type Task_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['task_type']>;
  _gt?: InputMaybe<Scalars['task_type']>;
  _gte?: InputMaybe<Scalars['task_type']>;
  _in?: InputMaybe<Array<Scalars['task_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['task_type']>;
  _lte?: InputMaybe<Scalars['task_type']>;
  _neq?: InputMaybe<Scalars['task_type']>;
  _nin?: InputMaybe<Array<Scalars['task_type']>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token_benefits" */
export type Token_Benefits = {
  __typename?: 'token_benefits';
  amount?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  dao_id: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamp'];
};

/** aggregated selection of "token_benefits" */
export type Token_Benefits_Aggregate = {
  __typename?: 'token_benefits_aggregate';
  aggregate?: Maybe<Token_Benefits_Aggregate_Fields>;
  nodes: Array<Token_Benefits>;
};

/** aggregate fields of "token_benefits" */
export type Token_Benefits_Aggregate_Fields = {
  __typename?: 'token_benefits_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Benefits_Max_Fields>;
  min?: Maybe<Token_Benefits_Min_Fields>;
};


/** aggregate fields of "token_benefits" */
export type Token_Benefits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Benefits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_benefits" */
export type Token_Benefits_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Benefits_Max_Order_By>;
  min?: InputMaybe<Token_Benefits_Min_Order_By>;
};

/** input type for inserting array relation for remote table "token_benefits" */
export type Token_Benefits_Arr_Rel_Insert_Input = {
  data: Array<Token_Benefits_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Benefits_On_Conflict>;
};

/** Boolean expression to filter rows from the table "token_benefits". All fields are combined with a logical 'AND'. */
export type Token_Benefits_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Benefits_Bool_Exp>>;
  _not?: InputMaybe<Token_Benefits_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Benefits_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dao_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_benefits" */
export enum Token_Benefits_Constraint {
  /** unique or primary key constraint */
  TokenBenefitsIdUindex = 'token_benefits_id_uindex',
  /** unique or primary key constraint */
  TokenBenefitsPk = 'token_benefits_pk'
}

/** input type for inserting data into table "token_benefits" */
export type Token_Benefits_Insert_Input = {
  amount?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Token_Benefits_Max_Fields = {
  __typename?: 'token_benefits_max_fields';
  amount?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "token_benefits" */
export type Token_Benefits_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Benefits_Min_Fields = {
  __typename?: 'token_benefits_min_fields';
  amount?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "token_benefits" */
export type Token_Benefits_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token_benefits" */
export type Token_Benefits_Mutation_Response = {
  __typename?: 'token_benefits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Benefits>;
};

/** on_conflict condition type for table "token_benefits" */
export type Token_Benefits_On_Conflict = {
  constraint: Token_Benefits_Constraint;
  update_columns?: Array<Token_Benefits_Update_Column>;
  where?: InputMaybe<Token_Benefits_Bool_Exp>;
};

/** Ordering options when selecting data from "token_benefits". */
export type Token_Benefits_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dao_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_benefits */
export type Token_Benefits_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "token_benefits" */
export enum Token_Benefits_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "token_benefits" */
export type Token_Benefits_Set_Input = {
  amount?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dao_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "token_benefits" */
export enum Token_Benefits_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DaoId = 'dao_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type UserBodyInput = {
  username: Scalars['String'];
};

export type UserBodyOutput = {
  __typename?: 'userBodyOutput';
  hasAllHiddenFeatures: Scalars['Boolean'];
  isBanned: Scalars['Boolean'];
  username: Scalars['String'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  about?: Maybe<Scalars['_text']>;
  attitudes?: Maybe<Scalars['_text']>;
  bio?: Maybe<Scalars['String']>;
  blacklistedFlags: Scalars['_text'];
  createdAt: Scalars['timestamp'];
  /** An array relationship */
  credentialsByTargetId: Array<Credentials>;
  /** An aggregate relationship */
  credentialsByTargetId_aggregate: Credentials_Aggregate;
  device?: Maybe<Scalars['String']>;
  /** An array relationship */
  gate_progresses: Array<Gate_Progress>;
  /** An aggregate relationship */
  gate_progresses_aggregate: Gate_Progress_Aggregate;
  id: Scalars['uuid'];
  init: Scalars['Boolean'];
  knowledges?: Maybe<Scalars['_text']>;
  languages?: Maybe<Scalars['_text']>;
  name?: Maybe<Scalars['String']>;
  pfp: Scalars['String'];
  skills?: Maybe<Scalars['_text']>;
  socials?: Maybe<Scalars['_json']>;
  updatedAt: Scalars['timestamp'];
  username?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
  whitelistedFlags: Scalars['_text'];
};


/** columns and relationships of "users" */
export type UsersCredentialsByTargetIdArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCredentialsByTargetId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Credentials_Order_By>>;
  where?: InputMaybe<Credentials_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGate_ProgressesArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGate_Progresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Progress_Order_By>>;
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  about?: InputMaybe<_Text_Comparison_Exp>;
  attitudes?: InputMaybe<_Text_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  blacklistedFlags?: InputMaybe<_Text_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  credentialsByTargetId?: InputMaybe<Credentials_Bool_Exp>;
  device?: InputMaybe<String_Comparison_Exp>;
  gate_progresses?: InputMaybe<Gate_Progress_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  init?: InputMaybe<Boolean_Comparison_Exp>;
  knowledges?: InputMaybe<_Text_Comparison_Exp>;
  languages?: InputMaybe<_Text_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pfp?: InputMaybe<String_Comparison_Exp>;
  skills?: InputMaybe<_Text_Comparison_Exp>;
  socials?: InputMaybe<_Json_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  wallet?: InputMaybe<String_Comparison_Exp>;
  whitelistedFlags?: InputMaybe<_Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserIdUindex = 'user_id_uindex',
  /** unique or primary key constraint */
  UserUsernameUindex = 'user_username_uindex',
  /** unique or primary key constraint */
  UserWalletUindex = 'user_wallet_uindex',
  /** unique or primary key constraint */
  UsersPk = 'users_pk',
  /** unique or primary key constraint */
  UsersWalletUindex = 'users_wallet_uindex'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  about?: InputMaybe<Scalars['_text']>;
  attitudes?: InputMaybe<Scalars['_text']>;
  bio?: InputMaybe<Scalars['String']>;
  blacklistedFlags?: InputMaybe<Scalars['_text']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  credentialsByTargetId?: InputMaybe<Credentials_Arr_Rel_Insert_Input>;
  device?: InputMaybe<Scalars['String']>;
  gate_progresses?: InputMaybe<Gate_Progress_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  init?: InputMaybe<Scalars['Boolean']>;
  knowledges?: InputMaybe<Scalars['_text']>;
  languages?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  pfp?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['_text']>;
  socials?: InputMaybe<Scalars['_json']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<Scalars['String']>;
  whitelistedFlags?: InputMaybe<Scalars['_text']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  device?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pfp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  device?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pfp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  about?: InputMaybe<Order_By>;
  attitudes?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  blacklistedFlags?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  credentialsByTargetId_aggregate?: InputMaybe<Credentials_Aggregate_Order_By>;
  device?: InputMaybe<Order_By>;
  gate_progresses_aggregate?: InputMaybe<Gate_Progress_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  init?: InputMaybe<Order_By>;
  knowledges?: InputMaybe<Order_By>;
  languages?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pfp?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
  socials?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  wallet?: InputMaybe<Order_By>;
  whitelistedFlags?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  About = 'about',
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Bio = 'bio',
  /** column name */
  BlacklistedFlags = 'blacklistedFlags',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Init = 'init',
  /** column name */
  Knowledges = 'knowledges',
  /** column name */
  Languages = 'languages',
  /** column name */
  Name = 'name',
  /** column name */
  Pfp = 'pfp',
  /** column name */
  Skills = 'skills',
  /** column name */
  Socials = 'socials',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username',
  /** column name */
  Wallet = 'wallet',
  /** column name */
  WhitelistedFlags = 'whitelistedFlags'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  about?: InputMaybe<Scalars['_text']>;
  attitudes?: InputMaybe<Scalars['_text']>;
  bio?: InputMaybe<Scalars['String']>;
  blacklistedFlags?: InputMaybe<Scalars['_text']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  device?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  init?: InputMaybe<Scalars['Boolean']>;
  knowledges?: InputMaybe<Scalars['_text']>;
  languages?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  pfp?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['_text']>;
  socials?: InputMaybe<Scalars['_json']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<Scalars['String']>;
  whitelistedFlags?: InputMaybe<Scalars['_text']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  About = 'about',
  /** column name */
  Attitudes = 'attitudes',
  /** column name */
  Bio = 'bio',
  /** column name */
  BlacklistedFlags = 'blacklistedFlags',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Init = 'init',
  /** column name */
  Knowledges = 'knowledges',
  /** column name */
  Languages = 'languages',
  /** column name */
  Name = 'name',
  /** column name */
  Pfp = 'pfp',
  /** column name */
  Skills = 'skills',
  /** column name */
  Socials = 'socials',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username',
  /** column name */
  Wallet = 'wallet',
  /** column name */
  WhitelistedFlags = 'whitelistedFlags'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetDaoQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetDaoQuery = { __typename?: 'query_root', daos_by_pk?: { __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null, token_benefits: Array<{ __typename?: 'token_benefits', amount?: string | null, created_at: any, dao_id: any, description: string, id: any, title: string, token?: string | null, updated_at: any }>, bounties: Array<{ __typename?: 'bounties', categories: any, description?: string | null, directions?: string | null, end_date: any, headline: string, id: any, level: string, links: any, post_date: any, reward: string }> } | null };

export type GetDaoBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetDaoBySlugQuery = { __typename?: 'query_root', daos: Array<{ __typename?: 'daos', accomplishments?: string | null, background_url: string, blacklisted_flags: any, categories?: any | null, created_at: any, description: string, ens?: string | null, faq?: any | null, hangouts?: any | null, how_to_join?: any | null, id: any, logo_url: string, mv?: any | null, slug: string, token?: string | null, updated_at: any, wdwd?: string | null, whitelisted_flags: any, youtube_url?: string | null, token_benefits: Array<{ __typename?: 'token_benefits', amount?: string | null, created_at: any, dao_id: any, description: string, id: any, title: string, token?: string | null, updated_at: any }>, bounties: Array<{ __typename?: 'bounties', categories: any, description?: string | null, directions?: string | null, end_date: any, headline: string, id: any, level: string, links: any, post_date: any, reward: string }> }> };

export type ListDaOsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDaOsQuery = { __typename?: 'query_root', daos: Array<{ __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null, token_benefits: Array<{ __typename?: 'token_benefits', amount?: string | null, created_at: any, dao_id: any, description: string, id: any, title: string, token?: string | null, updated_at: any }>, bounties: Array<{ __typename?: 'bounties', categories: any, description?: string | null, directions?: string | null, end_date: any, headline: string, id: any, level: string, links: any, post_date: any, reward: string }> }> };

export type CreateDaoMutationVariables = Exact<{
  object?: InputMaybe<Daos_Insert_Input>;
}>;


export type CreateDaoMutation = { __typename?: 'mutation_root', insert_daos_one?: { __typename?: 'daos', accomplishments?: string | null, background_url: string, blacklisted_flags: any, categories?: any | null, created_at: any, description: string, ens?: string | null, faq?: any | null, hangouts?: any | null, how_to_join?: any | null, id: any, logo_url: string, mv?: any | null, name: string, slug: string, token?: string | null, updated_at: any, wdwd?: string | null, whitelisted_flags: any, youtube_url?: string | null } | null };

export type UpdateDaoMutationVariables = Exact<{
  id: Scalars['uuid'];
  set?: InputMaybe<Daos_Set_Input>;
}>;


export type UpdateDaoMutation = { __typename?: 'mutation_root', update_daos_by_pk?: { __typename?: 'daos', background_url: string, blacklisted_flags: any, categories?: any | null, created_at: any, description: string, ens?: string | null, hangouts?: any | null, how_to_join?: any | null, id: any, logo_url: string, mv?: any | null, slug: string, updated_at: any, wdwd?: string | null, whitelisted_flags: any, youtube_url?: string | null, accomplishments?: string | null, faq?: any | null, token?: string | null } | null };

export type DeleteDaoMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteDaoMutation = { __typename?: 'mutation_root', delete_daos_by_pk?: { __typename?: 'daos', id: any } | null };

export type CreateBountyMutationVariables = Exact<{
  object?: InputMaybe<Bounties_Insert_Input>;
}>;


export type CreateBountyMutation = { __typename?: 'mutation_root', insert_bounties_one?: { __typename?: 'bounties', categories: any, dao_id: any, description?: string | null, directions?: string | null, end_date: any, headline: string, id: any, level: string, links: any, post_date: any, reward: string } | null };

export type DeleteBountyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteBountyMutation = { __typename?: 'mutation_root', delete_bounties_by_pk?: { __typename?: 'bounties', id: any } | null };

export type InsertTokenBenefitMutationVariables = Exact<{
  object?: InputMaybe<Token_Benefits_Insert_Input>;
}>;


export type InsertTokenBenefitMutation = { __typename?: 'mutation_root', insert_token_benefits_one?: { __typename?: 'token_benefits', amount?: string | null, created_at: any, dao_id: any, description: string, id: any, title: string, token?: string | null, updated_at: any } | null };

export type DeleteTokenBenefitMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteTokenBenefitMutation = { __typename?: 'mutation_root', delete_token_benefits_by_pk?: { __typename?: 'token_benefits', id: any } | null };

export type GetGateQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetGateQuery = { __typename?: 'query_root', gates_by_pk?: { __typename?: 'gates', skills?: any | null, published: any, nft_type: any, links: any, knowledge?: any | null, keys?: number | null, id: any, gate_name: string, description: string, dao_id: any, categories: any, badge: any, attitudes?: any | null, earners: Array<{ __typename?: 'earners', gate_id: any, id: any, user_id: any }>, keysByGateId: Array<{ __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean }>, dao: { __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null } } | null };

export type ListGatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGatesQuery = { __typename?: 'query_root', gates: Array<{ __typename?: 'gates', skills?: any | null, published: any, nft_type: any, links: any, knowledge?: any | null, keys?: number | null, id: any, gate_name: string, description: string, dao_id: any, categories: any, badge: any, attitudes?: any | null, earners: Array<{ __typename?: 'earners', gate_id: any, id: any, user_id: any }>, keysByGateId: Array<{ __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean }>, dao: { __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null } }> };

export type GetKeyQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetKeyQuery = { __typename?: 'query_root', keys_by_pk?: { __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean } | null };

export type GetGateProgressQueryVariables = Exact<{
  where?: InputMaybe<Gate_Progress_Bool_Exp>;
}>;


export type GetGateProgressQuery = { __typename?: 'query_root', gate_progress: Array<{ __typename?: 'gate_progress', user_id: any, updated_at: any, status: any, id: any, gate_id: any, created_at: any }> };

export type CreateGateMutationVariables = Exact<{
  object?: InputMaybe<Gates_Insert_Input>;
}>;


export type CreateGateMutation = { __typename?: 'mutation_root', insert_gates_one?: { __typename?: 'gates', attitudes?: any | null, badge: any, categories: any, dao_id: any, description: string, gate_name: string, id: any, keys?: number | null, knowledge?: any | null, links: any, nft_type: any, published: any, skills?: any | null, earners: Array<{ __typename?: 'earners', gate_id: any, id: any, user_id: any }>, keysByGateId: Array<{ __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean }>, dao: { __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null } } | null };

export type UpdateGateMutationVariables = Exact<{
  id: Scalars['uuid'];
  set?: InputMaybe<Gates_Set_Input>;
}>;


export type UpdateGateMutation = { __typename?: 'mutation_root', update_gates_by_pk?: { __typename?: 'gates', attitudes?: any | null, badge: any, categories: any, dao_id: any, description: string, gate_name: string, id: any, keys?: number | null, knowledge?: any | null, links: any, nft_type: any, published: any, skills?: any | null, earners: Array<{ __typename?: 'earners', gate_id: any, id: any, user_id: any }>, keysByGateId: Array<{ __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean }>, dao: { __typename?: 'daos', youtube_url?: string | null, whitelisted_flags: any, wdwd?: string | null, updated_at: any, slug: string, mv?: any | null, logo_url: string, id: any, how_to_join?: any | null, hangouts?: any | null, ens?: string | null, description: string, created_at: any, categories?: any | null, blacklisted_flags: any, background_url: string, accomplishments?: string | null, faq?: any | null, token?: string | null } } | null };

export type DeleteGateMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteGateMutation = { __typename?: 'mutation_root', delete_gates_by_pk?: { __typename?: 'gates', id: any } | null };

export type CreateKeyMutationVariables = Exact<{
  object?: InputMaybe<Keys_Insert_Input>;
}>;


export type CreateKeyMutation = { __typename?: 'mutation_root', insert_keys_one?: { __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean } | null };

export type UpdateKeyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  set?: InputMaybe<Keys_Set_Input>;
}>;


export type UpdateKeyMutation = { __typename?: 'mutation_root', update_keys_by_pk?: { __typename?: 'keys', gate_id: any, id: any, information: any, keys: number, people_limit: number, task: any, task_type: any, unlimited: boolean } | null };

export type DeleteKeyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteKeyMutation = { __typename?: 'mutation_root', delete_keys_by_pk?: { __typename?: 'keys', id: any } | null };

export type VerifyTaskMutationVariables = Exact<{
  key_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
  info?: InputMaybe<Scalars['json']>;
}>;


export type VerifyTaskMutation = { __typename?: 'mutation_root', verify_key?: { __typename?: 'VerifyOutput', completed_gate: boolean, task_info: any } | null };

export type GetUserGatePermissionsQueryVariables = Exact<{
  gate_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetUserGatePermissionsQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', permission?: any | null }> };

export type GetUserDaoPermissionsQueryVariables = Exact<{
  dao_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetUserDaoPermissionsQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', permission?: any | null }> };

export type GetGateUsersQueryVariables = Exact<{
  gate_id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['permission_types']>;
}>;


export type GetGateUsersQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', permission?: any | null, user_id: any, updated_at: any, gate_id?: any | null, dao_id?: any | null, created_at: any, user: { __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any } }> };

export type GetDaoUsersQueryVariables = Exact<{
  dao_id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Scalars['permission_types']>;
}>;


export type GetDaoUsersQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', permission?: any | null, user_id: any, updated_at: any, gate_id?: any | null, dao_id?: any | null, created_at: any, user: { __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any } }> };

export type SearchUsersQueryVariables = Exact<{
  query: Scalars['String'];
  pagination?: InputMaybe<AlgoliaPaginationInput>;
}>;


export type SearchUsersQuery = { __typename?: 'query_root', search_users?: { __typename?: 'AlgoliaSearchResults', hits: any } | null };

export type SearchGatesQueryVariables = Exact<{
  query: Scalars['String'];
  pagination?: InputMaybe<AlgoliaPaginationInput>;
}>;


export type SearchGatesQuery = { __typename?: 'query_root', search_gates?: { __typename?: 'AlgoliaSearchResults', hits: any } | null };

export type SearchDaOsQueryVariables = Exact<{
  query: Scalars['String'];
  pagination?: InputMaybe<AlgoliaPaginationInput>;
}>;


export type SearchDaOsQuery = { __typename?: 'query_root', search_daos?: { __typename?: 'AlgoliaSearchResults', hits: any } | null };

export type SearchCredentialsQueryVariables = Exact<{
  query: Scalars['String'];
  pagination?: InputMaybe<AlgoliaPaginationInput>;
}>;


export type SearchCredentialsQuery = { __typename?: 'query_root', search_credentials?: { __typename?: 'AlgoliaSearchResults', hits: any } | null };

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserByUsernameQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any, gate_progresses: Array<{ __typename?: 'gate_progress', created_at: any, gate_id: any, id: any, status: any, updated_at: any }> }> };

export type GetUserByAddressQueryVariables = Exact<{
  wallet: Scalars['String'];
}>;


export type GetUserByAddressQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any, gate_progresses: Array<{ __typename?: 'gate_progress', created_at: any, gate_id: any, id: any, status: any, updated_at: any }> }> };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any, gate_progresses: Array<{ __typename?: 'gate_progress', created_at: any, gate_id: any, id: any, status: any, updated_at: any }> }> };

export type CreateUserMutationVariables = Exact<{
  object?: InputMaybe<Users_Insert_Input>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any } | null };

export type UpdateUserMutationVariables = Exact<{
  set?: InputMaybe<Users_Set_Input>;
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', about?: any | null, attitudes?: any | null, bio?: string | null, blacklistedFlags: any, createdAt: any, device?: string | null, id: any, init: boolean, knowledges?: any | null, languages?: any | null, name?: string | null, pfp: string, skills?: any | null, socials?: any | null, updatedAt: any, username?: string | null, wallet?: string | null, whitelistedFlags: any } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: any } | null };


export const GetDaoDocument = gql`
    query getDAO($id: uuid!) {
  daos_by_pk(id: $id) {
    youtube_url
    whitelisted_flags
    wdwd
    updated_at
    token_benefits {
      amount
      created_at
      dao_id
      description
      id
      title
      token
      updated_at
    }
    slug
    mv
    logo_url
    id
    how_to_join
    hangouts
    ens
    description
    created_at
    categories
    blacklisted_flags
    background_url
    accomplishments
    faq
    token
    bounties {
      categories
      description
      directions
      end_date
      headline
      id
      level
      links
      post_date
      reward
    }
  }
}
    `;

/**
 * __useGetDaoQuery__
 *
 * To run a query within a React component, call `useGetDaoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDaoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDaoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDaoQuery(baseOptions: Apollo.QueryHookOptions<GetDaoQuery, GetDaoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDaoQuery, GetDaoQueryVariables>(GetDaoDocument, options);
      }
export function useGetDaoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDaoQuery, GetDaoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDaoQuery, GetDaoQueryVariables>(GetDaoDocument, options);
        }
export type GetDaoQueryHookResult = ReturnType<typeof useGetDaoQuery>;
export type GetDaoLazyQueryHookResult = ReturnType<typeof useGetDaoLazyQuery>;
export type GetDaoQueryResult = Apollo.QueryResult<GetDaoQuery, GetDaoQueryVariables>;
export const GetDaoBySlugDocument = gql`
    query getDAOBySlug($slug: String = "") {
  daos(where: {slug: {_eq: $slug}}) {
    accomplishments
    background_url
    blacklisted_flags
    categories
    created_at
    description
    ens
    faq
    hangouts
    how_to_join
    id
    logo_url
    mv
    slug
    token
    token_benefits {
      amount
      created_at
      dao_id
      description
      id
      title
      token
      updated_at
    }
    updated_at
    wdwd
    whitelisted_flags
    youtube_url
    bounties {
      categories
      description
      directions
      end_date
      headline
      id
      level
      links
      post_date
      reward
    }
  }
}
    `;

/**
 * __useGetDaoBySlugQuery__
 *
 * To run a query within a React component, call `useGetDaoBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDaoBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDaoBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetDaoBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetDaoBySlugQuery, GetDaoBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDaoBySlugQuery, GetDaoBySlugQueryVariables>(GetDaoBySlugDocument, options);
      }
export function useGetDaoBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDaoBySlugQuery, GetDaoBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDaoBySlugQuery, GetDaoBySlugQueryVariables>(GetDaoBySlugDocument, options);
        }
export type GetDaoBySlugQueryHookResult = ReturnType<typeof useGetDaoBySlugQuery>;
export type GetDaoBySlugLazyQueryHookResult = ReturnType<typeof useGetDaoBySlugLazyQuery>;
export type GetDaoBySlugQueryResult = Apollo.QueryResult<GetDaoBySlugQuery, GetDaoBySlugQueryVariables>;
export const ListDaOsDocument = gql`
    query listDAOs {
  daos {
    youtube_url
    whitelisted_flags
    wdwd
    updated_at
    token_benefits {
      amount
      created_at
      dao_id
      description
      id
      title
      token
      updated_at
    }
    slug
    mv
    logo_url
    id
    how_to_join
    hangouts
    ens
    description
    created_at
    categories
    blacklisted_flags
    background_url
    accomplishments
    faq
    token
    bounties {
      categories
      description
      directions
      end_date
      headline
      id
      level
      links
      post_date
      reward
    }
  }
}
    `;

/**
 * __useListDaOsQuery__
 *
 * To run a query within a React component, call `useListDaOsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDaOsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDaOsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDaOsQuery(baseOptions?: Apollo.QueryHookOptions<ListDaOsQuery, ListDaOsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDaOsQuery, ListDaOsQueryVariables>(ListDaOsDocument, options);
      }
export function useListDaOsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDaOsQuery, ListDaOsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDaOsQuery, ListDaOsQueryVariables>(ListDaOsDocument, options);
        }
export type ListDaOsQueryHookResult = ReturnType<typeof useListDaOsQuery>;
export type ListDaOsLazyQueryHookResult = ReturnType<typeof useListDaOsLazyQuery>;
export type ListDaOsQueryResult = Apollo.QueryResult<ListDaOsQuery, ListDaOsQueryVariables>;
export const CreateDaoDocument = gql`
    mutation createDAO($object: daos_insert_input = {}) {
  insert_daos_one(object: $object) {
    accomplishments
    background_url
    blacklisted_flags
    categories
    created_at
    description
    ens
    faq
    hangouts
    how_to_join
    id
    logo_url
    mv
    name
    slug
    token
    updated_at
    wdwd
    whitelisted_flags
    youtube_url
  }
}
    `;
export type CreateDaoMutationFn = Apollo.MutationFunction<CreateDaoMutation, CreateDaoMutationVariables>;

/**
 * __useCreateDaoMutation__
 *
 * To run a mutation, you first call `useCreateDaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDaoMutation, { data, loading, error }] = useCreateDaoMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateDaoMutation(baseOptions?: Apollo.MutationHookOptions<CreateDaoMutation, CreateDaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDaoMutation, CreateDaoMutationVariables>(CreateDaoDocument, options);
      }
export type CreateDaoMutationHookResult = ReturnType<typeof useCreateDaoMutation>;
export type CreateDaoMutationResult = Apollo.MutationResult<CreateDaoMutation>;
export type CreateDaoMutationOptions = Apollo.BaseMutationOptions<CreateDaoMutation, CreateDaoMutationVariables>;
export const UpdateDaoDocument = gql`
    mutation updateDAO($id: uuid!, $set: daos_set_input = {}) {
  update_daos_by_pk(pk_columns: {id: $id}, _set: $set) {
    background_url
    blacklisted_flags
    categories
    created_at
    description
    ens
    hangouts
    how_to_join
    id
    logo_url
    mv
    slug
    updated_at
    wdwd
    whitelisted_flags
    youtube_url
    accomplishments
    faq
    token
  }
}
    `;
export type UpdateDaoMutationFn = Apollo.MutationFunction<UpdateDaoMutation, UpdateDaoMutationVariables>;

/**
 * __useUpdateDaoMutation__
 *
 * To run a mutation, you first call `useUpdateDaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDaoMutation, { data, loading, error }] = useUpdateDaoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateDaoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDaoMutation, UpdateDaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDaoMutation, UpdateDaoMutationVariables>(UpdateDaoDocument, options);
      }
export type UpdateDaoMutationHookResult = ReturnType<typeof useUpdateDaoMutation>;
export type UpdateDaoMutationResult = Apollo.MutationResult<UpdateDaoMutation>;
export type UpdateDaoMutationOptions = Apollo.BaseMutationOptions<UpdateDaoMutation, UpdateDaoMutationVariables>;
export const DeleteDaoDocument = gql`
    mutation deleteDAO($id: uuid!) {
  delete_daos_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteDaoMutationFn = Apollo.MutationFunction<DeleteDaoMutation, DeleteDaoMutationVariables>;

/**
 * __useDeleteDaoMutation__
 *
 * To run a mutation, you first call `useDeleteDaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDaoMutation, { data, loading, error }] = useDeleteDaoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDaoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDaoMutation, DeleteDaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDaoMutation, DeleteDaoMutationVariables>(DeleteDaoDocument, options);
      }
export type DeleteDaoMutationHookResult = ReturnType<typeof useDeleteDaoMutation>;
export type DeleteDaoMutationResult = Apollo.MutationResult<DeleteDaoMutation>;
export type DeleteDaoMutationOptions = Apollo.BaseMutationOptions<DeleteDaoMutation, DeleteDaoMutationVariables>;
export const CreateBountyDocument = gql`
    mutation createBounty($object: bounties_insert_input = {}) {
  insert_bounties_one(object: $object) {
    categories
    dao_id
    description
    directions
    end_date
    headline
    id
    level
    links
    post_date
    reward
  }
}
    `;
export type CreateBountyMutationFn = Apollo.MutationFunction<CreateBountyMutation, CreateBountyMutationVariables>;

/**
 * __useCreateBountyMutation__
 *
 * To run a mutation, you first call `useCreateBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBountyMutation, { data, loading, error }] = useCreateBountyMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateBountyMutation(baseOptions?: Apollo.MutationHookOptions<CreateBountyMutation, CreateBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBountyMutation, CreateBountyMutationVariables>(CreateBountyDocument, options);
      }
export type CreateBountyMutationHookResult = ReturnType<typeof useCreateBountyMutation>;
export type CreateBountyMutationResult = Apollo.MutationResult<CreateBountyMutation>;
export type CreateBountyMutationOptions = Apollo.BaseMutationOptions<CreateBountyMutation, CreateBountyMutationVariables>;
export const DeleteBountyDocument = gql`
    mutation deleteBounty($id: uuid!) {
  delete_bounties_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteBountyMutationFn = Apollo.MutationFunction<DeleteBountyMutation, DeleteBountyMutationVariables>;

/**
 * __useDeleteBountyMutation__
 *
 * To run a mutation, you first call `useDeleteBountyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBountyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBountyMutation, { data, loading, error }] = useDeleteBountyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBountyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBountyMutation, DeleteBountyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBountyMutation, DeleteBountyMutationVariables>(DeleteBountyDocument, options);
      }
export type DeleteBountyMutationHookResult = ReturnType<typeof useDeleteBountyMutation>;
export type DeleteBountyMutationResult = Apollo.MutationResult<DeleteBountyMutation>;
export type DeleteBountyMutationOptions = Apollo.BaseMutationOptions<DeleteBountyMutation, DeleteBountyMutationVariables>;
export const InsertTokenBenefitDocument = gql`
    mutation insertTokenBenefit($object: token_benefits_insert_input = {}) {
  insert_token_benefits_one(object: $object) {
    amount
    created_at
    dao_id
    description
    id
    title
    token
    updated_at
  }
}
    `;
export type InsertTokenBenefitMutationFn = Apollo.MutationFunction<InsertTokenBenefitMutation, InsertTokenBenefitMutationVariables>;

/**
 * __useInsertTokenBenefitMutation__
 *
 * To run a mutation, you first call `useInsertTokenBenefitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTokenBenefitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTokenBenefitMutation, { data, loading, error }] = useInsertTokenBenefitMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTokenBenefitMutation(baseOptions?: Apollo.MutationHookOptions<InsertTokenBenefitMutation, InsertTokenBenefitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTokenBenefitMutation, InsertTokenBenefitMutationVariables>(InsertTokenBenefitDocument, options);
      }
export type InsertTokenBenefitMutationHookResult = ReturnType<typeof useInsertTokenBenefitMutation>;
export type InsertTokenBenefitMutationResult = Apollo.MutationResult<InsertTokenBenefitMutation>;
export type InsertTokenBenefitMutationOptions = Apollo.BaseMutationOptions<InsertTokenBenefitMutation, InsertTokenBenefitMutationVariables>;
export const DeleteTokenBenefitDocument = gql`
    mutation deleteTokenBenefit($id: uuid!) {
  delete_token_benefits_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteTokenBenefitMutationFn = Apollo.MutationFunction<DeleteTokenBenefitMutation, DeleteTokenBenefitMutationVariables>;

/**
 * __useDeleteTokenBenefitMutation__
 *
 * To run a mutation, you first call `useDeleteTokenBenefitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTokenBenefitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTokenBenefitMutation, { data, loading, error }] = useDeleteTokenBenefitMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTokenBenefitMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTokenBenefitMutation, DeleteTokenBenefitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTokenBenefitMutation, DeleteTokenBenefitMutationVariables>(DeleteTokenBenefitDocument, options);
      }
export type DeleteTokenBenefitMutationHookResult = ReturnType<typeof useDeleteTokenBenefitMutation>;
export type DeleteTokenBenefitMutationResult = Apollo.MutationResult<DeleteTokenBenefitMutation>;
export type DeleteTokenBenefitMutationOptions = Apollo.BaseMutationOptions<DeleteTokenBenefitMutation, DeleteTokenBenefitMutationVariables>;
export const GetGateDocument = gql`
    query getGate($id: uuid!) {
  gates_by_pk(id: $id) {
    skills
    published
    earners {
      gate_id
      id
      user_id
    }
    keysByGateId {
      gate_id
      id
      information
      keys
      people_limit
      task
      task_type
      unlimited
    }
    dao {
      youtube_url
      whitelisted_flags
      wdwd
      updated_at
      slug
      mv
      logo_url
      id
      how_to_join
      hangouts
      ens
      description
      created_at
      categories
      blacklisted_flags
      background_url
      accomplishments
      faq
      token
    }
    nft_type
    links
    knowledge
    keys
    id
    gate_name
    description
    dao_id
    categories
    badge
    attitudes
  }
}
    `;

/**
 * __useGetGateQuery__
 *
 * To run a query within a React component, call `useGetGateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGateQuery(baseOptions: Apollo.QueryHookOptions<GetGateQuery, GetGateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGateQuery, GetGateQueryVariables>(GetGateDocument, options);
      }
export function useGetGateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGateQuery, GetGateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGateQuery, GetGateQueryVariables>(GetGateDocument, options);
        }
export type GetGateQueryHookResult = ReturnType<typeof useGetGateQuery>;
export type GetGateLazyQueryHookResult = ReturnType<typeof useGetGateLazyQuery>;
export type GetGateQueryResult = Apollo.QueryResult<GetGateQuery, GetGateQueryVariables>;
export const ListGatesDocument = gql`
    query listGates {
  gates {
    skills
    published
    earners {
      gate_id
      id
      user_id
    }
    keysByGateId {
      gate_id
      id
      information
      keys
      people_limit
      task
      task_type
      unlimited
    }
    dao {
      youtube_url
      whitelisted_flags
      wdwd
      updated_at
      slug
      mv
      logo_url
      id
      how_to_join
      hangouts
      ens
      description
      created_at
      categories
      blacklisted_flags
      background_url
      accomplishments
      faq
      token
    }
    nft_type
    links
    knowledge
    keys
    id
    gate_name
    description
    dao_id
    categories
    badge
    attitudes
  }
}
    `;

/**
 * __useListGatesQuery__
 *
 * To run a query within a React component, call `useListGatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGatesQuery(baseOptions?: Apollo.QueryHookOptions<ListGatesQuery, ListGatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGatesQuery, ListGatesQueryVariables>(ListGatesDocument, options);
      }
export function useListGatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGatesQuery, ListGatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGatesQuery, ListGatesQueryVariables>(ListGatesDocument, options);
        }
export type ListGatesQueryHookResult = ReturnType<typeof useListGatesQuery>;
export type ListGatesLazyQueryHookResult = ReturnType<typeof useListGatesLazyQuery>;
export type ListGatesQueryResult = Apollo.QueryResult<ListGatesQuery, ListGatesQueryVariables>;
export const GetKeyDocument = gql`
    query getKey($id: uuid!) {
  keys_by_pk(id: $id) {
    gate_id
    id
    information
    keys
    people_limit
    task
    task_type
    unlimited
  }
}
    `;

/**
 * __useGetKeyQuery__
 *
 * To run a query within a React component, call `useGetKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKeyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetKeyQuery(baseOptions: Apollo.QueryHookOptions<GetKeyQuery, GetKeyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKeyQuery, GetKeyQueryVariables>(GetKeyDocument, options);
      }
export function useGetKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKeyQuery, GetKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKeyQuery, GetKeyQueryVariables>(GetKeyDocument, options);
        }
export type GetKeyQueryHookResult = ReturnType<typeof useGetKeyQuery>;
export type GetKeyLazyQueryHookResult = ReturnType<typeof useGetKeyLazyQuery>;
export type GetKeyQueryResult = Apollo.QueryResult<GetKeyQuery, GetKeyQueryVariables>;
export const GetGateProgressDocument = gql`
    query getGateProgress($where: gate_progress_bool_exp = {}) {
  gate_progress(where: $where) {
    user_id
    updated_at
    status
    id
    gate_id
    created_at
  }
}
    `;

/**
 * __useGetGateProgressQuery__
 *
 * To run a query within a React component, call `useGetGateProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGateProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGateProgressQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetGateProgressQuery(baseOptions?: Apollo.QueryHookOptions<GetGateProgressQuery, GetGateProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGateProgressQuery, GetGateProgressQueryVariables>(GetGateProgressDocument, options);
      }
export function useGetGateProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGateProgressQuery, GetGateProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGateProgressQuery, GetGateProgressQueryVariables>(GetGateProgressDocument, options);
        }
export type GetGateProgressQueryHookResult = ReturnType<typeof useGetGateProgressQuery>;
export type GetGateProgressLazyQueryHookResult = ReturnType<typeof useGetGateProgressLazyQuery>;
export type GetGateProgressQueryResult = Apollo.QueryResult<GetGateProgressQuery, GetGateProgressQueryVariables>;
export const CreateGateDocument = gql`
    mutation createGate($object: gates_insert_input = {}) {
  insert_gates_one(object: $object) {
    attitudes
    badge
    categories
    dao_id
    description
    gate_name
    id
    keys
    knowledge
    links
    nft_type
    published
    earners {
      gate_id
      id
      user_id
    }
    keysByGateId {
      gate_id
      id
      information
      keys
      people_limit
      task
      task_type
      unlimited
    }
    dao {
      youtube_url
      whitelisted_flags
      wdwd
      updated_at
      slug
      mv
      logo_url
      id
      how_to_join
      hangouts
      ens
      description
      created_at
      categories
      blacklisted_flags
      background_url
      accomplishments
      faq
      token
    }
    skills
  }
}
    `;
export type CreateGateMutationFn = Apollo.MutationFunction<CreateGateMutation, CreateGateMutationVariables>;

/**
 * __useCreateGateMutation__
 *
 * To run a mutation, you first call `useCreateGateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGateMutation, { data, loading, error }] = useCreateGateMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateGateMutation(baseOptions?: Apollo.MutationHookOptions<CreateGateMutation, CreateGateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGateMutation, CreateGateMutationVariables>(CreateGateDocument, options);
      }
export type CreateGateMutationHookResult = ReturnType<typeof useCreateGateMutation>;
export type CreateGateMutationResult = Apollo.MutationResult<CreateGateMutation>;
export type CreateGateMutationOptions = Apollo.BaseMutationOptions<CreateGateMutation, CreateGateMutationVariables>;
export const UpdateGateDocument = gql`
    mutation updateGate($id: uuid!, $set: gates_set_input = {}) {
  update_gates_by_pk(pk_columns: {id: ""}, _set: $set) {
    attitudes
    badge
    categories
    dao_id
    description
    gate_name
    id
    keys
    knowledge
    links
    nft_type
    published
    earners {
      gate_id
      id
      user_id
    }
    keysByGateId {
      gate_id
      id
      information
      keys
      people_limit
      task
      task_type
      unlimited
    }
    dao {
      youtube_url
      whitelisted_flags
      wdwd
      updated_at
      slug
      mv
      logo_url
      id
      how_to_join
      hangouts
      ens
      description
      created_at
      categories
      blacklisted_flags
      background_url
      accomplishments
      faq
      token
    }
    skills
  }
}
    `;
export type UpdateGateMutationFn = Apollo.MutationFunction<UpdateGateMutation, UpdateGateMutationVariables>;

/**
 * __useUpdateGateMutation__
 *
 * To run a mutation, you first call `useUpdateGateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGateMutation, { data, loading, error }] = useUpdateGateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateGateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGateMutation, UpdateGateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGateMutation, UpdateGateMutationVariables>(UpdateGateDocument, options);
      }
export type UpdateGateMutationHookResult = ReturnType<typeof useUpdateGateMutation>;
export type UpdateGateMutationResult = Apollo.MutationResult<UpdateGateMutation>;
export type UpdateGateMutationOptions = Apollo.BaseMutationOptions<UpdateGateMutation, UpdateGateMutationVariables>;
export const DeleteGateDocument = gql`
    mutation deleteGate($id: uuid!) {
  delete_gates_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteGateMutationFn = Apollo.MutationFunction<DeleteGateMutation, DeleteGateMutationVariables>;

/**
 * __useDeleteGateMutation__
 *
 * To run a mutation, you first call `useDeleteGateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGateMutation, { data, loading, error }] = useDeleteGateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGateMutation, DeleteGateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGateMutation, DeleteGateMutationVariables>(DeleteGateDocument, options);
      }
export type DeleteGateMutationHookResult = ReturnType<typeof useDeleteGateMutation>;
export type DeleteGateMutationResult = Apollo.MutationResult<DeleteGateMutation>;
export type DeleteGateMutationOptions = Apollo.BaseMutationOptions<DeleteGateMutation, DeleteGateMutationVariables>;
export const CreateKeyDocument = gql`
    mutation createKey($object: keys_insert_input = {}) {
  insert_keys_one(object: $object) {
    gate_id
    id
    information
    keys
    people_limit
    task
    task_type
    unlimited
  }
}
    `;
export type CreateKeyMutationFn = Apollo.MutationFunction<CreateKeyMutation, CreateKeyMutationVariables>;

/**
 * __useCreateKeyMutation__
 *
 * To run a mutation, you first call `useCreateKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKeyMutation, { data, loading, error }] = useCreateKeyMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateKeyMutation(baseOptions?: Apollo.MutationHookOptions<CreateKeyMutation, CreateKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateKeyMutation, CreateKeyMutationVariables>(CreateKeyDocument, options);
      }
export type CreateKeyMutationHookResult = ReturnType<typeof useCreateKeyMutation>;
export type CreateKeyMutationResult = Apollo.MutationResult<CreateKeyMutation>;
export type CreateKeyMutationOptions = Apollo.BaseMutationOptions<CreateKeyMutation, CreateKeyMutationVariables>;
export const UpdateKeyDocument = gql`
    mutation updateKey($id: uuid = "", $set: keys_set_input = {}) {
  update_keys_by_pk(pk_columns: {id: $id}, _set: $set) {
    gate_id
    id
    information
    keys
    people_limit
    task
    task_type
    unlimited
  }
}
    `;
export type UpdateKeyMutationFn = Apollo.MutationFunction<UpdateKeyMutation, UpdateKeyMutationVariables>;

/**
 * __useUpdateKeyMutation__
 *
 * To run a mutation, you first call `useUpdateKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeyMutation, { data, loading, error }] = useUpdateKeyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateKeyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKeyMutation, UpdateKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKeyMutation, UpdateKeyMutationVariables>(UpdateKeyDocument, options);
      }
export type UpdateKeyMutationHookResult = ReturnType<typeof useUpdateKeyMutation>;
export type UpdateKeyMutationResult = Apollo.MutationResult<UpdateKeyMutation>;
export type UpdateKeyMutationOptions = Apollo.BaseMutationOptions<UpdateKeyMutation, UpdateKeyMutationVariables>;
export const DeleteKeyDocument = gql`
    mutation deleteKey($id: uuid!) {
  delete_keys_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteKeyMutationFn = Apollo.MutationFunction<DeleteKeyMutation, DeleteKeyMutationVariables>;

/**
 * __useDeleteKeyMutation__
 *
 * To run a mutation, you first call `useDeleteKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKeyMutation, { data, loading, error }] = useDeleteKeyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteKeyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteKeyMutation, DeleteKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteKeyMutation, DeleteKeyMutationVariables>(DeleteKeyDocument, options);
      }
export type DeleteKeyMutationHookResult = ReturnType<typeof useDeleteKeyMutation>;
export type DeleteKeyMutationResult = Apollo.MutationResult<DeleteKeyMutation>;
export type DeleteKeyMutationOptions = Apollo.BaseMutationOptions<DeleteKeyMutation, DeleteKeyMutationVariables>;
export const VerifyTaskDocument = gql`
    mutation verifyTask($key_id: uuid!, $user_id: uuid!, $info: json) {
  verify_key(input: {key_id: $key_id, user_id: $user_id, info: $info}) {
    completed_gate
    task_info
  }
}
    `;
export type VerifyTaskMutationFn = Apollo.MutationFunction<VerifyTaskMutation, VerifyTaskMutationVariables>;

/**
 * __useVerifyTaskMutation__
 *
 * To run a mutation, you first call `useVerifyTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTaskMutation, { data, loading, error }] = useVerifyTaskMutation({
 *   variables: {
 *      key_id: // value for 'key_id'
 *      user_id: // value for 'user_id'
 *      info: // value for 'info'
 *   },
 * });
 */
export function useVerifyTaskMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTaskMutation, VerifyTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTaskMutation, VerifyTaskMutationVariables>(VerifyTaskDocument, options);
      }
export type VerifyTaskMutationHookResult = ReturnType<typeof useVerifyTaskMutation>;
export type VerifyTaskMutationResult = Apollo.MutationResult<VerifyTaskMutation>;
export type VerifyTaskMutationOptions = Apollo.BaseMutationOptions<VerifyTaskMutation, VerifyTaskMutationVariables>;
export const GetUserGatePermissionsDocument = gql`
    query getUserGatePermissions($gate_id: uuid, $user_id: uuid) {
  permissions(where: {gate_id: {_eq: $gate_id}, user_id: {_eq: $user_id}}) {
    permission
  }
}
    `;

/**
 * __useGetUserGatePermissionsQuery__
 *
 * To run a query within a React component, call `useGetUserGatePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserGatePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserGatePermissionsQuery({
 *   variables: {
 *      gate_id: // value for 'gate_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserGatePermissionsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserGatePermissionsQuery, GetUserGatePermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserGatePermissionsQuery, GetUserGatePermissionsQueryVariables>(GetUserGatePermissionsDocument, options);
      }
export function useGetUserGatePermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserGatePermissionsQuery, GetUserGatePermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserGatePermissionsQuery, GetUserGatePermissionsQueryVariables>(GetUserGatePermissionsDocument, options);
        }
export type GetUserGatePermissionsQueryHookResult = ReturnType<typeof useGetUserGatePermissionsQuery>;
export type GetUserGatePermissionsLazyQueryHookResult = ReturnType<typeof useGetUserGatePermissionsLazyQuery>;
export type GetUserGatePermissionsQueryResult = Apollo.QueryResult<GetUserGatePermissionsQuery, GetUserGatePermissionsQueryVariables>;
export const GetUserDaoPermissionsDocument = gql`
    query getUserDAOPermissions($dao_id: uuid, $user_id: uuid) {
  permissions(where: {dao_id: {_eq: $dao_id}, user_id: {_eq: $user_id}}) {
    permission
  }
}
    `;

/**
 * __useGetUserDaoPermissionsQuery__
 *
 * To run a query within a React component, call `useGetUserDaoPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDaoPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDaoPermissionsQuery({
 *   variables: {
 *      dao_id: // value for 'dao_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserDaoPermissionsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDaoPermissionsQuery, GetUserDaoPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDaoPermissionsQuery, GetUserDaoPermissionsQueryVariables>(GetUserDaoPermissionsDocument, options);
      }
export function useGetUserDaoPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDaoPermissionsQuery, GetUserDaoPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDaoPermissionsQuery, GetUserDaoPermissionsQueryVariables>(GetUserDaoPermissionsDocument, options);
        }
export type GetUserDaoPermissionsQueryHookResult = ReturnType<typeof useGetUserDaoPermissionsQuery>;
export type GetUserDaoPermissionsLazyQueryHookResult = ReturnType<typeof useGetUserDaoPermissionsLazyQuery>;
export type GetUserDaoPermissionsQueryResult = Apollo.QueryResult<GetUserDaoPermissionsQuery, GetUserDaoPermissionsQueryVariables>;
export const GetGateUsersDocument = gql`
    query getGateUsers($gate_id: uuid = "", $permission: permission_types = "admin") {
  permissions(where: {gate_id: {_eq: $gate_id}, permission: {_eq: $permission}}) {
    permission
    user {
      about
      attitudes
      bio
      blacklistedFlags
      createdAt
      device
      id
      init
      knowledges
      languages
      name
      pfp
      skills
      socials
      updatedAt
      username
      wallet
      whitelistedFlags
    }
    user_id
    updated_at
    gate_id
    dao_id
    created_at
  }
}
    `;

/**
 * __useGetGateUsersQuery__
 *
 * To run a query within a React component, call `useGetGateUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGateUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGateUsersQuery({
 *   variables: {
 *      gate_id: // value for 'gate_id'
 *      permission: // value for 'permission'
 *   },
 * });
 */
export function useGetGateUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetGateUsersQuery, GetGateUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGateUsersQuery, GetGateUsersQueryVariables>(GetGateUsersDocument, options);
      }
export function useGetGateUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGateUsersQuery, GetGateUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGateUsersQuery, GetGateUsersQueryVariables>(GetGateUsersDocument, options);
        }
export type GetGateUsersQueryHookResult = ReturnType<typeof useGetGateUsersQuery>;
export type GetGateUsersLazyQueryHookResult = ReturnType<typeof useGetGateUsersLazyQuery>;
export type GetGateUsersQueryResult = Apollo.QueryResult<GetGateUsersQuery, GetGateUsersQueryVariables>;
export const GetDaoUsersDocument = gql`
    query getDAOUsers($dao_id: uuid = "", $permission: permission_types = "admin") {
  permissions(where: {dao_id: {_eq: $dao_id}, permission: {_eq: $permission}}) {
    permission
    user {
      about
      attitudes
      bio
      blacklistedFlags
      createdAt
      device
      id
      init
      knowledges
      languages
      name
      pfp
      skills
      socials
      updatedAt
      username
      wallet
      whitelistedFlags
    }
    user_id
    updated_at
    gate_id
    dao_id
    created_at
  }
}
    `;

/**
 * __useGetDaoUsersQuery__
 *
 * To run a query within a React component, call `useGetDaoUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDaoUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDaoUsersQuery({
 *   variables: {
 *      dao_id: // value for 'dao_id'
 *      permission: // value for 'permission'
 *   },
 * });
 */
export function useGetDaoUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetDaoUsersQuery, GetDaoUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDaoUsersQuery, GetDaoUsersQueryVariables>(GetDaoUsersDocument, options);
      }
export function useGetDaoUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDaoUsersQuery, GetDaoUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDaoUsersQuery, GetDaoUsersQueryVariables>(GetDaoUsersDocument, options);
        }
export type GetDaoUsersQueryHookResult = ReturnType<typeof useGetDaoUsersQuery>;
export type GetDaoUsersLazyQueryHookResult = ReturnType<typeof useGetDaoUsersLazyQuery>;
export type GetDaoUsersQueryResult = Apollo.QueryResult<GetDaoUsersQuery, GetDaoUsersQueryVariables>;
export const SearchUsersDocument = gql`
    query searchUsers($query: String!, $pagination: AlgoliaPaginationInput) {
  search_users(query: $query, pagination: $pagination) {
    hits
  }
}
    `;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      query: // value for 'query'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;
export const SearchGatesDocument = gql`
    query searchGates($query: String!, $pagination: AlgoliaPaginationInput) {
  search_gates(query: $query, pagination: $pagination) {
    hits
  }
}
    `;

/**
 * __useSearchGatesQuery__
 *
 * To run a query within a React component, call `useSearchGatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGatesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchGatesQuery(baseOptions: Apollo.QueryHookOptions<SearchGatesQuery, SearchGatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGatesQuery, SearchGatesQueryVariables>(SearchGatesDocument, options);
      }
export function useSearchGatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGatesQuery, SearchGatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGatesQuery, SearchGatesQueryVariables>(SearchGatesDocument, options);
        }
export type SearchGatesQueryHookResult = ReturnType<typeof useSearchGatesQuery>;
export type SearchGatesLazyQueryHookResult = ReturnType<typeof useSearchGatesLazyQuery>;
export type SearchGatesQueryResult = Apollo.QueryResult<SearchGatesQuery, SearchGatesQueryVariables>;
export const SearchDaOsDocument = gql`
    query searchDAOs($query: String!, $pagination: AlgoliaPaginationInput) {
  search_daos(query: $query, pagination: $pagination) {
    hits
  }
}
    `;

/**
 * __useSearchDaOsQuery__
 *
 * To run a query within a React component, call `useSearchDaOsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDaOsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDaOsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchDaOsQuery(baseOptions: Apollo.QueryHookOptions<SearchDaOsQuery, SearchDaOsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchDaOsQuery, SearchDaOsQueryVariables>(SearchDaOsDocument, options);
      }
export function useSearchDaOsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchDaOsQuery, SearchDaOsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchDaOsQuery, SearchDaOsQueryVariables>(SearchDaOsDocument, options);
        }
export type SearchDaOsQueryHookResult = ReturnType<typeof useSearchDaOsQuery>;
export type SearchDaOsLazyQueryHookResult = ReturnType<typeof useSearchDaOsLazyQuery>;
export type SearchDaOsQueryResult = Apollo.QueryResult<SearchDaOsQuery, SearchDaOsQueryVariables>;
export const SearchCredentialsDocument = gql`
    query searchCredentials($query: String!, $pagination: AlgoliaPaginationInput) {
  search_credentials(query: $query, pagination: $pagination) {
    hits
  }
}
    `;

/**
 * __useSearchCredentialsQuery__
 *
 * To run a query within a React component, call `useSearchCredentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCredentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCredentialsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useSearchCredentialsQuery(baseOptions: Apollo.QueryHookOptions<SearchCredentialsQuery, SearchCredentialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCredentialsQuery, SearchCredentialsQueryVariables>(SearchCredentialsDocument, options);
      }
export function useSearchCredentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCredentialsQuery, SearchCredentialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCredentialsQuery, SearchCredentialsQueryVariables>(SearchCredentialsDocument, options);
        }
export type SearchCredentialsQueryHookResult = ReturnType<typeof useSearchCredentialsQuery>;
export type SearchCredentialsLazyQueryHookResult = ReturnType<typeof useSearchCredentialsLazyQuery>;
export type SearchCredentialsQueryResult = Apollo.QueryResult<SearchCredentialsQuery, SearchCredentialsQueryVariables>;
export const GetUserByUsernameDocument = gql`
    query getUserByUsername($username: String!) {
  users(where: {username: {_eq: $username}}) {
    about
    attitudes
    bio
    blacklistedFlags
    createdAt
    device
    id
    init
    knowledges
    languages
    name
    pfp
    skills
    socials
    updatedAt
    username
    wallet
    whitelistedFlags
    gate_progresses {
      created_at
      gate_id
      id
      status
      updated_at
    }
  }
}
    `;

/**
 * __useGetUserByUsernameQuery__
 *
 * To run a query within a React component, call `useGetUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>(GetUserByUsernameDocument, options);
      }
export function useGetUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>(GetUserByUsernameDocument, options);
        }
export type GetUserByUsernameQueryHookResult = ReturnType<typeof useGetUserByUsernameQuery>;
export type GetUserByUsernameLazyQueryHookResult = ReturnType<typeof useGetUserByUsernameLazyQuery>;
export type GetUserByUsernameQueryResult = Apollo.QueryResult<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>;
export const GetUserByAddressDocument = gql`
    query getUserByAddress($wallet: String!) {
  users(where: {wallet: {_eq: $wallet}}) {
    about
    attitudes
    bio
    blacklistedFlags
    createdAt
    device
    id
    init
    knowledges
    languages
    name
    pfp
    skills
    socials
    updatedAt
    username
    wallet
    whitelistedFlags
    gate_progresses {
      created_at
      gate_id
      id
      status
      updated_at
    }
  }
}
    `;

/**
 * __useGetUserByAddressQuery__
 *
 * To run a query within a React component, call `useGetUserByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByAddressQuery({
 *   variables: {
 *      wallet: // value for 'wallet'
 *   },
 * });
 */
export function useGetUserByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetUserByAddressQuery, GetUserByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByAddressQuery, GetUserByAddressQueryVariables>(GetUserByAddressDocument, options);
      }
export function useGetUserByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByAddressQuery, GetUserByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByAddressQuery, GetUserByAddressQueryVariables>(GetUserByAddressDocument, options);
        }
export type GetUserByAddressQueryHookResult = ReturnType<typeof useGetUserByAddressQuery>;
export type GetUserByAddressLazyQueryHookResult = ReturnType<typeof useGetUserByAddressLazyQuery>;
export type GetUserByAddressQueryResult = Apollo.QueryResult<GetUserByAddressQuery, GetUserByAddressQueryVariables>;
export const ListUsersDocument = gql`
    query listUsers {
  users {
    about
    attitudes
    bio
    blacklistedFlags
    createdAt
    device
    id
    init
    knowledges
    languages
    name
    pfp
    skills
    socials
    updatedAt
    username
    wallet
    whitelistedFlags
    gate_progresses {
      created_at
      gate_id
      id
      status
      updated_at
    }
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($object: users_insert_input = {}) {
  insert_users_one(object: $object) {
    about
    attitudes
    bio
    blacklistedFlags
    createdAt
    device
    id
    init
    knowledges
    languages
    name
    pfp
    skills
    socials
    updatedAt
    username
    wallet
    whitelistedFlags
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($set: users_set_input = {}, $id: uuid = "") {
  update_users_by_pk(pk_columns: {id: $id}, _set: $set) {
    about
    attitudes
    bio
    blacklistedFlags
    createdAt
    device
    id
    init
    knowledges
    languages
    name
    pfp
    skills
    socials
    updatedAt
    username
    wallet
    whitelistedFlags
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      set: // value for 'set'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: uuid!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;