var unirest = require("unirest"); var req = unirest("GET",
"https://rapidapi.p.rapidapi.com/playlist/%7Bid%7D"); 
req.headers({
"x-rapidapi-key": "fe1ee78acemsh9541414cd7dfc97p1b64f4jsnf2b7496140d3",
"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com", "useQueryString":
true }
); 
req.end(function (res) 
{
     if (res.error)
     throw new Error(res.error);
console.log(res.body); 
}
);