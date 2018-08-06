# appid

Use this package to easily convert Steam's AppIDs to their names and vice-versa!

## Examples

```js
await appid("Counter-Strike")  //  {appid:10,name:"Counter-Strike"}
await appid(730) // {appid: 730, name: "Counter-Strike: Global Offensive"}
await appid(/Grand Theft Auto/) // [{"appid":5152,"name":"Grand Theft Auto IV"},{"appid":5656,"name":"Grand Theft Auto - Episodes from Liberty City Trailer"} ...]
```

### Convert Name to AppID
If you supply `appid` with a String, it will search the list of current games and return a Promise resolving the first game found.

```js
let dota = await appid("Dota 2");
dota.appid // 570
```
If you want all games that have the supplied name, use [a Regular Expression](#by-regular-expression).

### AppID to Name

```js
let mystery = await appid(4000);
mystery.name //  "Garry's Mod"
```

### By Regular Expression
Get all games starting with "a"

```js
await appid(/^a/i) // [{"appid":630,"name":"Alien Swarm"},{"appid":635,"name":"Alien Swarm Dedicated Server"},{"appid":640,"name":"Alien Swarm - SDK"},...]
```


## Installation

Install `appid` using `npm` or `yarn`

```bash
$ npm i --save appid

$ yarn add appid
```
and require it in your project

```js
const appid = require("appid");
```


## Caught a Bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of ms, just link it to the dependencies: `npm link appid`. Instead of the default one from npm, Node.js will now use your clone of appid!
