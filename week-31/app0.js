
const https=require("https");

function getProfile(){
  const request =https.get(
    "https://teamtreehouse.com/profiles/yvonnechang.json ",
    (res) => {
      console.dir(res.statusCode);
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    }
  )
  
}
getProfile();