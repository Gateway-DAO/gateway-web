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
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
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
          youtubeURL
          chains
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
          whitelistedAddresses
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
      whitelistedAddresses
      socials {
        network
        url
      }
      channels {
        items {
          id
          name
          daoID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      youtubeURL
      chains
    }
  }
`;
export const listDaos = /* GraphQL */ `
  query ListDAOs(
    $filter: ModelDAOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDAOs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dao
        name
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      daoID
      dao {
        id
        dao
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          daoID
          channelID
          userID
          content
          upvotes
          downvotes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        daoID
        dao {
          id
          dao
          name
          accomplishments
          backgroundURL
          youtubeURL
          chains
          logoURL
          categories
          tags
          description
          howToJoin
          missionAndVision
          whatDoWeDo
          upcomingHangouts
          tokenAddress
          whitelistedAddresses
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      daoID
      dao {
        id
        dao
        name
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
        createdAt
        updatedAt
      }
      channelID
      channel {
        id
        name
        daoID
        dao {
          id
          dao
          name
          youtubeURL
          chains
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
          whitelistedAddresses
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      user {
        id
        wallet
        username
        name
        bio
        daos_ids
        daos {
          id
          dao
          youtubeURL
          chains
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
          whitelistedAddresses
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
      content
      comments {
        items {
          id
          postID
          userID
          content
          upvotes
          downvotes
          createdAt
          updatedAt
        }
        nextToken
      }
      upvotes
      downvotes
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        daoID
        dao {
          id
          dao
          name
          youtubeURL
          chains
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
          whitelistedAddresses
          createdAt
          updatedAt
        }
        channelID
        channel {
          id
          name
          daoID
          createdAt
          updatedAt
        }
        userID
        user {
          id
          wallet
          username
          name
          bio
          daos_ids
          init
          nonce
          pfp
          createdAt
          updatedAt
        }
        content
        comments {
          items {
            id
            postID
            userID
            user {
              id
              wallet
              username
              name
              bio
              daos_ids
              init
              nonce
              pfp
              createdAt
              updatedAt
            }
            content
            upvotes
            downvotes
            createdAt
            updatedAt
          }
        }
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      userID
      user {
        id
        wallet
        username
        name
        bio
        daos_ids
        daos {
          id
          dao
          youtubeURL
          chains
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
          whitelistedAddresses
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
      content
      upvotes
      downvotes
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        userID
        user {
          id
          wallet
          username
          name
          bio
          daos_ids
          init
          nonce
          pfp
          createdAt
          updatedAt
        }
        content
        upvotes
        downvotes
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
          youtubeURL
          chains
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
          whitelistedAddresses
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
          youtubeURL
          chains
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
          whitelistedAddresses
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
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
          items {
            id
            name
            daoID
            dao {
              id
              dao
              youtubeURL
              chains
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
              whitelistedAddresses
              createdAt
              updatedAt
            }
            posts {
              items {
                id
                daoID
                dao {
                  id
                  dao
                  youtubeURL
                  chains
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
                  whitelistedAddresses
                  createdAt
                  updatedAt
                }
                channelID
                channel {
                  id
                  name
                  daoID
                  createdAt
                  updatedAt
                }
                userID
                user {
                  id
                  wallet
                  username
                  name
                  bio
                  daos_ids
                  init
                  nonce
                  pfp
                  createdAt
                  updatedAt
                }
                content
                comments {
                  items {
                    id
                    postID
                    userID
                    user {
                      id
                      wallet
                      username
                      name
                      bio
                      daos_ids
                      init
                      nonce
                      pfp
                      createdAt
                      updatedAt
                    }
                    content
                    upvotes
                    downvotes
                    createdAt
                    updatedAt
                  }
                }
                upvotes
                downvotes
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
          items {
            id
            name
            daoID
            dao {
              id
              dao
              youtubeURL
              chains
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
              whitelistedAddresses
              createdAt
              updatedAt
            }
            posts {
              items {
                id
                daoID
                dao {
                  id
                  dao
                  youtubeURL
                  chains
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
                  whitelistedAddresses
                  createdAt
                  updatedAt
                }
                channelID
                channel {
                  id
                  name
                  daoID
                  createdAt
                  updatedAt
                }
                userID
                user {
                  id
                  wallet
                  username
                  name
                  bio
                  daos_ids
                  init
                  nonce
                  pfp
                  createdAt
                  updatedAt
                }
                content
                comments {
                  items {
                    id
                    postID
                    userID
                    user {
                      id
                      wallet
                      username
                      name
                      bio
                      daos_ids
                      init
                      nonce
                      pfp
                      createdAt
                      updatedAt
                    }
                    content
                    upvotes
                    downvotes
                    createdAt
                    updatedAt
                  }
                }
                upvotes
                downvotes
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannelByDaoid = /* GraphQL */ `
  query GetChannelByDaoid(
    $daoID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getChannelByDAOID(
      daoID: $daoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        daoID
        dao {
          id
          dao
          youtubeURL
          chains
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
          whitelistedAddresses
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostsByChannelId = /* GraphQL */ `
  query GetPostsByChannelId(
    $channelID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByChannelID(
      channelID: $channelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        daoID
        dao {
          id
          dao
          youtubeURL
          chains
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
          whitelistedAddresses
          createdAt
          updatedAt
        }
        channelID
        channel {
          id
          name
          daoID
          createdAt
          updatedAt
        }
        userID
        user {
          id
          wallet
          username
          name
          bio
          daos_ids
          init
          nonce
          pfp
          createdAt
          updatedAt
        }
        content
        comments {
          nextToken
        }
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentsByPostId = /* GraphQL */ `
  query GetCommentsByPostId(
    $postID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        userID
        user {
          id
          wallet
          username
          name
          bio
          daos_ids
          init
          nonce
          pfp
          createdAt
          updatedAt
        }
        content
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
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
          youtubeURL
          chains
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
          whitelistedAddresses
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
      total
    }
  }
`;
export const searchDaos = /* GraphQL */ `
  query SearchDAOs(
    $filter: SearchableDAOFilterInput
    $sort: SearchableDAOSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchDAOs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        dao
        youtubeURL
        chains
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
        whitelistedAddresses
        socials {
          network
          url
        }
        channels {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        daoID
        dao {
          id
          dao
          youtubeURL
          chains
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
          whitelistedAddresses
          createdAt
          updatedAt
        }
        channelID
        channel {
          id
          name
          daoID
          createdAt
          updatedAt
        }
        userID
        user {
          id
          wallet
          username
          name
          bio
          daos_ids
          init
          nonce
          pfp
          createdAt
          updatedAt
        }
        content
        comments {
          nextToken
        }
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
