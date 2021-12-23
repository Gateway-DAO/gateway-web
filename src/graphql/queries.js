/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      wallet
      username
      name
      bio
      daos_ids
      daos {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
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
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      init
      pfp
      socials {
        network
        url
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wallet
        username
        name
        bio
        daos_ids
        daos {
          id
          dao
          name
          accomplishments
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDao = /* GraphQL */ `
  query GetDao($id: ID!) {
    getDAO(id: $id) {
      id
      dao
      name
      faq {
        question
        answer
      }
      accomplishments
      backgroundURL
      logoURL
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
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        amount
        description
        title
        token
      }
      upcomingHangouts
      tokenAddress
      socials {
        network
        url
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDaOs = /* GraphQL */ `
  query ListDaOs(
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDAOs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
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
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByAddress = /* GraphQL */ `
  query GetUserByAddress(
    $wallet: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByAddress(
      wallet: $wallet
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        username
        name
        bio
        daos_ids
        daos {
          id
          dao
          name
          accomplishments
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        username
        name
        bio
        daos_ids
        daos {
          id
          dao
          name
          accomplishments
          backgroundURL
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDaoById = /* GraphQL */ `
  query GetDaoById(
    $dao: String
    $sortDirection: ModelSortDirection
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDAOById(
      dao: $dao
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
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
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDaoByName = /* GraphQL */ `
  query GetDaoByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDAOByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        backgroundURL
        logoURL
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
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          amount
          description
          title
          token
        }
        upcomingHangouts
        tokenAddress
        socials {
          network
          url
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
