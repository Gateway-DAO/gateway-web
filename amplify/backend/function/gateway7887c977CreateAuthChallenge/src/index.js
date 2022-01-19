module.exports.handler = async (event) => {
  // This is sent back to the client app
  event.response.publicChallengeParameters = {
      email: 'email',
  }

  // Add the secret login code to the private challenge parameters
  // so it can be verified by the "Verify Auth Challenge Response" trigger
  event.response.privateChallengeParameters = {
      challenge: 'challenge',
  }

  return event
}
