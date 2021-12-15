/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDAO = /* GraphQL */ `
  query GetDAO($id: ID!) {
    getDAO(id: $id) {
      id
      name
      faq {
        question
        answer
      }
      accomplishments
      backgroundURL
      bounties {
        headline
        description
        level
        categories
        reward
        directions
        links
        endDate
        postDate
      }
      categories
      description
      howToJoin
      missionAndVision
      createdAt
      updatedAt
    }
  }
`;
export const listDAOS = /* GraphQL */ `
  query ListDAOS(
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDAOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        description
        howToJoin
        missionAndVision
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const dAOByID = /* GraphQL */ `
  query DAOByID(
    $id: String
    $sortDirection: ModelSortDirection
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DAOByID(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        description
        howToJoin
        missionAndVision
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const dAOByName = /* GraphQL */ `
  query DAOByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DAOByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        bounties {
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
        }
        categories
        description
        howToJoin
        missionAndVision
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
