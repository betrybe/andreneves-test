function parseDuplicateKeyError(error) {
  if (!error) {
    return null;
  }

  if (error.code !== 11000) {
    return null;
  }

  const { keyPattern } = error;

  if (!keyPattern) {
    return null;
  }

  const keys = Object.keys(keyPattern);

  if (keys.length === 0) {
    return null;
  }

  return keys;
}

module.exports = { parseDuplicateKeyError };
