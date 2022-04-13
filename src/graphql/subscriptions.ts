/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      timezone {
        shouldTrack
        tz
      }
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
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      about
      skills
      attitudes
      languages
      knowledges
      socials {
        network
        url
      }
      gates {
        items {
          id
          userID
          gateID
          keysDone
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      credentials {
        items {
          id
          issuerID
          targetID
          organizationID
          name
          description
          image
          pow
          skills
          knowledges
          attitudes
          ceramicStream
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      timezone {
        shouldTrack
        tz
      }
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
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      about
      skills
      attitudes
      languages
      knowledges
      socials {
        network
        url
      }
      gates {
        items {
          id
          userID
          gateID
          keysDone
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      credentials {
        items {
          id
          issuerID
          targetID
          organizationID
          name
          description
          image
          pow
          skills
          knowledges
          attitudes
          ceramicStream
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      timezone {
        shouldTrack
        tz
      }
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
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      init
      nonce
      pfp
      about
      skills
      attitudes
      languages
      knowledges
      socials {
        network
        url
      }
      gates {
        items {
          id
          userID
          gateID
          keysDone
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      credentials {
        items {
          id
          issuerID
          targetID
          organizationID
          name
          description
          image
          pow
          skills
          knowledges
          attitudes
          ceramicStream
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
export const onCreateDao = /* GraphQL */ `
  subscription OnCreateDao {
    onCreateDAO {
      id
      dao
      name
      faq {
        question
        answer
      }
      accomplishments
      snapshotID
      backgroundURL
      youtubeURL
      logoURL
      bounties {
        items {
          id
          daoID
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
          createdAt
          updatedAt
        }
        nextToken
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        items {
          id
          daoID
          amount
          description
          title
          token
          createdAt
          updatedAt
        }
        nextToken
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
      chains
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
      gates {
        items {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        nextToken
      }
      nftContracts {
        reward
        contributor
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDao = /* GraphQL */ `
  subscription OnUpdateDao {
    onUpdateDAO {
      id
      dao
      name
      faq {
        question
        answer
      }
      accomplishments
      snapshotID
      backgroundURL
      youtubeURL
      logoURL
      bounties {
        items {
          id
          daoID
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
          createdAt
          updatedAt
        }
        nextToken
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        items {
          id
          daoID
          amount
          description
          title
          token
          createdAt
          updatedAt
        }
        nextToken
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
      chains
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
      gates {
        items {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        nextToken
      }
      nftContracts {
        reward
        contributor
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDao = /* GraphQL */ `
  subscription OnDeleteDao {
    onDeleteDAO {
      id
      dao
      name
      faq {
        question
        answer
      }
      accomplishments
      snapshotID
      backgroundURL
      youtubeURL
      logoURL
      bounties {
        items {
          id
          daoID
          headline
          description
          level
          categories
          reward
          directions
          links
          endDate
          postDate
          createdAt
          updatedAt
        }
        nextToken
      }
      categories
      tags
      description
      howToJoin
      missionAndVision
      whatDoWeDo
      tokenBenefits {
        items {
          id
          daoID
          amount
          description
          title
          token
          createdAt
          updatedAt
        }
        nextToken
      }
      upcomingHangouts
      tokenAddress
      whitelistedAddresses
      socials {
        network
        url
      }
      chains
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
      gates {
        items {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        nextToken
      }
      nftContracts {
        reward
        contributor
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBounty = /* GraphQL */ `
  subscription OnCreateBounty {
    onCreateBounty {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      headline
      description
      level
      categories
      reward
      directions
      links
      endDate
      postDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBounty = /* GraphQL */ `
  subscription OnUpdateBounty {
    onUpdateBounty {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      headline
      description
      level
      categories
      reward
      directions
      links
      endDate
      postDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBounty = /* GraphQL */ `
  subscription OnDeleteBounty {
    onDeleteBounty {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      headline
      description
      level
      categories
      reward
      directions
      links
      endDate
      postDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTokenBenefit = /* GraphQL */ `
  subscription OnCreateTokenBenefit {
    onCreateTokenBenefit {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      amount
      description
      title
      token
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTokenBenefit = /* GraphQL */ `
  subscription OnUpdateTokenBenefit {
    onUpdateTokenBenefit {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      amount
      description
      title
      token
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTokenBenefit = /* GraphQL */ `
  subscription OnDeleteTokenBenefit {
    onDeleteTokenBenefit {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      amount
      description
      title
      token
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
      id
      name
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
      id
      name
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
      id
      name
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
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
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
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
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
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
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
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
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
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
export const onCreateGate = /* GraphQL */ `
  subscription OnCreateGate {
    onCreateGate {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      skills
      knowledge
      attitudes
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          unlimited
          peopleLimit
          createdAt
          updatedAt
        }
        nextToken
      }
      published
      badge {
        nftURL
        ipfsURL
        name
      }
      preRequisites {
        completedGates
      }
      retroactiveEarners
      links {
        name
        link
      }
      holders
      nftType
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGate = /* GraphQL */ `
  subscription OnUpdateGate {
    onUpdateGate {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      skills
      knowledge
      attitudes
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          unlimited
          peopleLimit
          createdAt
          updatedAt
        }
        nextToken
      }
      published
      badge {
        nftURL
        ipfsURL
        name
      }
      preRequisites {
        completedGates
      }
      retroactiveEarners
      links {
        name
        link
      }
      holders
      nftType
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGate = /* GraphQL */ `
  subscription OnDeleteGate {
    onDeleteGate {
      id
      daoID
      dao {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      categories
      skills
      knowledge
      attitudes
      admins
      keysNumber
      keys {
        items {
          id
          gateID
          token
          tokenAmount
          keys
          unlimited
          peopleLimit
          createdAt
          updatedAt
        }
        nextToken
      }
      published
      badge {
        nftURL
        ipfsURL
        name
      }
      preRequisites {
        completedGates
      }
      retroactiveEarners
      links {
        name
        link
      }
      holders
      nftType
      createdAt
      updatedAt
    }
  }
`;
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey {
    onCreateKey {
      id
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      information {
        title
        description
      }
      token
      tokenAmount
      keys
      unlimited
      peopleLimit
      task {
        ... on Quiz {
          type
          title
          description
          questions {
            question
            nrOfCorrectAnswers
          }
          passedAt
        }
        ... on MeetingCode {
          type
          code
          caseSensitive
        }
        ... on TokenHold {
          type
          chainID
          address
          amount
        }
        ... on SelfVerify {
          type
        }
        ... on SnapshotGovernance {
          type
          snapshotType
          spaceID
          proposal
        }
        ... on ContractInteraction {
          type
          chainID
          address
          methodName
        }
        ... on ManualTask {
          type
          information {
            title
            description
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey {
    onUpdateKey {
      id
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      information {
        title
        description
      }
      token
      tokenAmount
      keys
      unlimited
      peopleLimit
      task {
        ... on Quiz {
          type
          title
          description
          questions {
            question
            nrOfCorrectAnswers
          }
          passedAt
        }
        ... on MeetingCode {
          type
          code
          caseSensitive
        }
        ... on TokenHold {
          type
          chainID
          address
          amount
        }
        ... on SelfVerify {
          type
        }
        ... on SnapshotGovernance {
          type
          snapshotType
          spaceID
          proposal
        }
        ... on ContractInteraction {
          type
          chainID
          address
          methodName
        }
        ... on ManualTask {
          type
          information {
            title
            description
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey {
    onDeleteKey {
      id
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      information {
        title
        description
      }
      token
      tokenAmount
      keys
      unlimited
      peopleLimit
      task {
        ... on Quiz {
          type
          title
          description
          questions {
            question
            nrOfCorrectAnswers
          }
          passedAt
        }
        ... on MeetingCode {
          type
          code
          caseSensitive
        }
        ... on TokenHold {
          type
          chainID
          address
          amount
        }
        ... on SelfVerify {
          type
        }
        ... on SnapshotGovernance {
          type
          snapshotType
          spaceID
          proposal
        }
        ... on ContractInteraction {
          type
          chainID
          address
          methodName
        }
        ... on ManualTask {
          type
          information {
            title
            description
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateManualTaskSubmission = /* GraphQL */ `
  subscription OnCreateManualTaskSubmission {
    onCreateManualTaskSubmission {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      submissionURL
      discordID
      wallet
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateManualTaskSubmission = /* GraphQL */ `
  subscription OnUpdateManualTaskSubmission {
    onUpdateManualTaskSubmission {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      submissionURL
      discordID
      wallet
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteManualTaskSubmission = /* GraphQL */ `
  subscription OnDeleteManualTaskSubmission {
    onDeleteManualTaskSubmission {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      submissionURL
      discordID
      wallet
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGateStatus = /* GraphQL */ `
  subscription OnCreateGateStatus {
    onCreateGateStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      reward {
        rewardCode
        retrieved
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      keysDone
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGateStatus = /* GraphQL */ `
  subscription OnUpdateGateStatus {
    onUpdateGateStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      reward {
        rewardCode
        retrieved
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      keysDone
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGateStatus = /* GraphQL */ `
  subscription OnDeleteGateStatus {
    onDeleteGateStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      reward {
        rewardCode
        retrieved
      }
      tasks {
        items {
          id
          userID
          gateID
          keyID
          completed
          createdAt
          updatedAt
        }
        nextToken
      }
      keysDone
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTaskStatus = /* GraphQL */ `
  subscription OnCreateTaskStatus {
    onCreateTaskStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTaskStatus = /* GraphQL */ `
  subscription OnUpdateTaskStatus {
    onUpdateTaskStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTaskStatus = /* GraphQL */ `
  subscription OnDeleteTaskStatus {
    onDeleteTaskStatus {
      id
      userID
      user {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gateID
      gate {
        id
        daoID
        dao {
          id
          dao
          name
          accomplishments
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        name
        description
        categories
        skills
        knowledge
        attitudes
        admins
        keysNumber
        keys {
          nextToken
        }
        published
        badge {
          nftURL
          ipfsURL
          name
        }
        preRequisites {
          completedGates
        }
        retroactiveEarners
        links {
          name
          link
        }
        holders
        nftType
        createdAt
        updatedAt
      }
      keyID
      key {
        id
        gateID
        gate {
          id
          daoID
          name
          description
          categories
          skills
          knowledge
          attitudes
          admins
          keysNumber
          published
          retroactiveEarners
          holders
          nftType
          createdAt
          updatedAt
        }
        information {
          title
          description
        }
        token
        tokenAmount
        keys
        unlimited
        peopleLimit
        task {
          ... on Quiz {
            type
            title
            description
            passedAt
          }
          ... on MeetingCode {
            type
            code
            caseSensitive
          }
          ... on TokenHold {
            type
            chainID
            address
            amount
          }
          ... on SelfVerify {
            type
          }
          ... on SnapshotGovernance {
            type
            snapshotType
            spaceID
            proposal
          }
          ... on ContractInteraction {
            type
            chainID
            address
            methodName
          }
          ... on ManualTask {
            type
          }
        }
        createdAt
        updatedAt
      }
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCredential = /* GraphQL */ `
  subscription OnCreateCredential {
    onCreateCredential {
      id
      issuerID
      issuer {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetID
      target {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gate {
        name
        type
      }
      organizationID
      organization {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      image
      pow
      skills
      knowledges
      attitudes
      ceramicStream
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCredential = /* GraphQL */ `
  subscription OnUpdateCredential {
    onUpdateCredential {
      id
      issuerID
      issuer {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetID
      target {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gate {
        name
        type
      }
      organizationID
      organization {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      image
      pow
      skills
      knowledges
      attitudes
      ceramicStream
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCredential = /* GraphQL */ `
  subscription OnDeleteCredential {
    onDeleteCredential {
      id
      issuerID
      issuer {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetID
      target {
        id
        timezone {
          shouldTrack
          tz
        }
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
          snapshotID
          backgroundURL
          youtubeURL
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
          chains
          createdAt
          updatedAt
        }
        init
        nonce
        pfp
        about
        skills
        attitudes
        languages
        knowledges
        socials {
          network
          url
        }
        gates {
          nextToken
        }
        tasks {
          nextToken
        }
        credentials {
          nextToken
        }
        createdAt
        updatedAt
      }
      gate {
        name
        type
      }
      organizationID
      organization {
        id
        dao
        name
        faq {
          question
          answer
        }
        accomplishments
        snapshotID
        backgroundURL
        youtubeURL
        logoURL
        bounties {
          nextToken
        }
        categories
        tags
        description
        howToJoin
        missionAndVision
        whatDoWeDo
        tokenBenefits {
          nextToken
        }
        upcomingHangouts
        tokenAddress
        whitelistedAddresses
        socials {
          network
          url
        }
        chains
        channels {
          nextToken
        }
        gates {
          nextToken
        }
        nftContracts {
          reward
          contributor
        }
        createdAt
        updatedAt
      }
      name
      description
      image
      pow
      skills
      knowledges
      attitudes
      ceramicStream
      createdAt
      updatedAt
    }
  }
`;
