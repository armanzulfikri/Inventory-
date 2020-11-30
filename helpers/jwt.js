const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


const tokenGenerator = (user) => {
    const { id,ussername } = user
    return jwt.sign({
        id,
        ussername,
    }, secretKey)
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token,secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}