function loginUserRule(user) {
  if (!user.email || !user.password) {
    return false;
  }

  return true;
}

module.exports = { loginUserRule };
