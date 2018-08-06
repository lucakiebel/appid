const request = require("request-promise-cache");

const api = "https://api.steampowered.com/ISteamApps/GetAppList/v0002/";
let options = {
    url: api,
    cacheKey: api
    cacheTLL: 1000*60*60;
}


module.exports = test => {
  let type = test.constructor.name;
  switch(type) {
    case "String":
      return name_exact(test);
      break;
    case "Number":
      return byId(test);
      break;
    case: "RegExp":
      return name_regex(test);
      break;
    default:
      throw new Error("Please supply either a String, a Number, or a Regular Expression, " + type + " is not supported");
  }
}

function byId(id) {
  return new Promise((resolve, reject) => {
    request(options).then(data => {
      data = JSON.parse(data);
      resolve(data.applist.apps.filter(a => a.appid === id)[0]);
    }).catch(e => reject(e));
  })
};

function name_exact(name) {
  return new Promise((resolve, reject) => {
    request(options).then(data => {
      data = JSON.parse(data);
      resolve(data.applist.apps.filter(a => a.name === name)[0]);
    }).catch(e => reject(e));
  })
}

function name_regex(re) {
  return new Promise((resolve, reject) => {
    request(options).then(data => {
      data = JSON.parse(data);
      resolve(data.applist.apps.filter(a => a.name.match(re)));
    }).catch(e => reject(e));
  })
}
