module.exports = function check(str, bracketsConfig) {
  let strLen = str.length;

  for (let [start, end] of bracketsConfig) {
    str = str.split(`${start}${end}`).join('');
  }

  if (str.length === 0) {
    return true;
  } else if (str.length === strLen) {
    return false;
  }

  return check(str, bracketsConfig);
}
