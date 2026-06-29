const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.ca465q6.mongodb.net",
  (err, addresses) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log(addresses);
    }
  }
);