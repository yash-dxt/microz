import { User } from "../models/User";
import { Token } from "../services/token";

export const refreshTokens = async (refreshToken: string) => {
    let userId;

    //First decode the User id and check if it exists. 
    try {
        userId = Token.decodeRefreshToken(refreshToken);
    } catch (e) {
        return {};
    }

    if (!userId) {
        return {};
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
        return {};
    }

    try {
        Token.verifyRefreshToken(refreshToken, user.password);
    } catch (e) {
        return {};
    }

    const jwt = Token.getJwt(user.email, user.roles);
    const rt = Token.getRefreshToken(user.id, user.password);

    return {
        tokens: {
            jwt,
            refreshToken: rt
        },
        user
    }


}