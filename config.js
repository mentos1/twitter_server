const providers = ['twitter', 'google', 'facebook', 'github']

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
    : `https://localhost:8080/${provider}/callback`
})

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-auth-twitter.netlify.com'
  : ['https://127.0.0.1:3000', 'https://localhost:3000']

exports.TWITTER_CONFIG = {
  consumerKey: 'FqCzsrE0gO27PWnKSAoW4Vr58',
  consumerSecret: 'rmXazjh26tNCb4AiYON0rmn2m1bSHgwcPNvvg2yCufOVPdxKra',
  callbackURL: 'https://wallet.primecore.io/auth_twitter',
}
