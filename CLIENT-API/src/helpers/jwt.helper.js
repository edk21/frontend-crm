const jwt = require("jsonwebtoken")
const { setJWT, getJWT } = require('./redis.helper');

const crateAccessJWT = async (email, _id) => {
  try {
    const accessJWT = await jwt.sign({ email }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '15m',
    });
    await setJWT(accessJWT, _id);

    return Promise.resolve(accessJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const crateRefreshJWT = (email, _id) => {
  const RefreshJWT = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30d',
  });

  return Promise.resolve(_id, RefreshJWT);
};

const verifyAccessJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET));
  } catch (error) {
    return Promise.resolve(error);
  }
};
const verifyRefreshJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, process.env.JWT_REFRESH_SECRET));
  } catch (error) {
    return Promise.resolve(error);
  }
};

module.exports = {
  crateAccessJWT,
  crateRefreshJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
};

