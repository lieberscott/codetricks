// Search each trick by (Ctrl-F) + // 
/* Comments are in these, title of each trick is each after //  */

// 1. Convert an array into an object's key values

let arr = ['Boston Celtics', 'Golden State Warriors', 'Houston Rockets', 'Los Angeles Lakers', 'Toronto Raptors'];

let obj = {};

arr.map((val, ind) => {
  obj[`${value}`] = 0
  return temp_obj;
});

/* Output
console.log(obj);
{
  "Boston Celtics": 0,
  "Golden State Warriors": 0,
  "Houston Rockets": 0,
  "Los Angeles Lakers": 0,
  "Toronto Raptors": 0
}
*/


// 2. Pass variable from Node to Pug to be used in client side client.js file

/* See example here: https://glitch.com/edit/#!/cute-pug?path=views/pug/chart.pug:17:6 */
/* In Node */
res.render(process.cwd() + '/views/pug/chart', { poll, ip, userID });

/* In Pug */
 /* Syntax highlighting not working here since this very file right here on Github is a .js file
 and this code below would be in a .pug file */
script.
  let polldata = !{JSON.stringify(poll)};
  let ipaddress = !{JSON.stringify(ip)};
  let user = !{JSON.stringify(userID)};
script(src="client.js")

/* Add client.js file link after the above code and variables are accessible in it */
