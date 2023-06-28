
const JWT = require('jsonwebtoken')
const HEADER ={
    API_KEY : 'x-api-key',
    CLIENT_ID:'x-xclient-id',
    AUTHORIZATION:'ahthorization',
    REFEREHSTOKEN:'x-rtoken-id'
}
const { findByUserId } = require('../services/keyToken.service');

const createTokenPair = async (payload, publickey, privateKey) => {

    try {
        // accessToken
        const accessToken = await JWT.sign(payload, publickey, {
            expiresIn: '2 days'
        });
        const refreshToken = await JWT.sign(payload, privateKey, {
            expiresIn: '7 days'
        });
        // 
        JWT.verify(accessToken, publickey, (err, decode) => {
            if (err) {
                console.error(`error verify::`, err);
            } else {
                console.log(`decode verify::`, decode);
            }
        })
        return { accessToken, refreshToken };
    } catch (error) {
        console.log('error::' + error);
    }
}

const authentivation = async (req, res, next) => {
    /*
    1 - Check userId missing?
    2 - get accessToken
    3 - veriftToken
    4 - check user in bds?
    5 - check keyStore with userId?
    6 - Ok all 
*/
     const userId = req.headers[HEADER.CLIENT_ID]
     if (!userId) {
        console.log('userId not '+userId);
    }
    const keyStore = await findByUserId(userId)
    if (!keyStore) {
        console.log('keyStore not '+keyStore);
    }
    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if (!accessToken) {
        console.log('accessToken not '+accessToken);
    }
    try {
        const decodeUser = JWT.verify(accessToken, keyStore.publicKey)
        if (userId !== decodeUser.userId) {
            console.log('decodeUser not '+decodeUser);
        }
        req.keyStore = keyStore
        return next()
    } catch (error) {
        throw error
    }
}
module.exports = {
    createTokenPair,
    authentivation
}