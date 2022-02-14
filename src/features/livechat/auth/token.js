module.exports = function(req, res) {
  const token = decodeURIComponent(getHashParam('access_token'))
  // console.log(token)
  res.send({ message: token })
}

function getHashParam(key) {
  var params = location.hash.substring(1).split("&");
  var value = params.find(function (item) {
    return item.split("=")[0] === key;
  });
  return value ? value.split("=")[1] : "";
}

// 