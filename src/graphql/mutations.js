/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDAO = /* GraphQL */ `
  mutation CreateDAO(
    $input: CreateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    createDAO(input: $input, condition: $condition) {
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
export const updateDAO = /* GraphQL */ `
  mutation UpdateDAO(
    $input: UpdateDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    updateDAO(input: $input, condition: $condition) {
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
export const deleteDAO = /* GraphQL */ `
  mutation DeleteDAO(
    $input: DeleteDAOInput!
    $condition: ModelDAOConditionInput
  ) {
    deleteDAO(input: $input, condition: $condition) {
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
