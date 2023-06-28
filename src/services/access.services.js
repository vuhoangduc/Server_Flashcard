const userSchema = require('../models/user.model')
const bcrypt = require('bcrypt');
const { findByEmail } = require('../services/user.services')
const { signAccessToken, signRefeshToken } = require('../auth/authUtils')
const cryto = require('crypto')
const KeyTokenService = require('./keyToken.service');
const { createTokenPair, verifyJWT } = require('../auth/authUtils');
class AccessService {
    static signUp = async ({ name, email, password }) => {
        // step 1: check email đã tồn tại hãy chưa
        const hodelEmail = await findByEmail({ email: email })
        if (hodelEmail) return { error: 'Email đã tồn tại !!!', status: 404 }
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await userSchema.create({
            name, email, password: passwordHash
        })
        if (newUser) return {
            message: 'Đăng ký tài khoản thành công !!!',
            status: 200,
            newUser
        }

    }

    static logIn = async ({ email, password }) => {
        const hodelUser = await findByEmail({ email })
        if (!hodelUser) return { error: 'Email chưa tồn tại !!!', status: 404, type: 'email' }
        const match = await bcrypt.compare(password, hodelUser.password)
        if (!match) return { error: 'Sai mật khẩu !!!', status: 404, type: 'password' }
        // const accessToken = await signAccessToken(hodelUser._id)
        // const refreshToken = await signRefeshToken(hodelUser._id)
        const publicKey = cryto.randomBytes(32).toString('hex')
        const privateKey = cryto.randomBytes(32).toString('hex')
        const tokens = await createTokenPair({ userId: hodelUser._id, email }, publicKey, privateKey)
        await KeyTokenService.createKeyToken({
            userId: hodelUser._id,
            refreshToken: tokens.refreshToken,
            publicKey,
            privateKey,
        })

        return {
            message: 'Đăng nhập thành công',
            userId:hodelUser._id,
            accessToken:tokens.accessToken
        }
    }
}

module.exports = AccessService