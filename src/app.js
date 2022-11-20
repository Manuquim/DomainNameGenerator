/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let aux = "";
  for (let index1 in pronoun) {
    for (let index2 in adj) {
      for (let index3 in noun) {
        const element1 = pronoun[index1];
        const element2 = adj[index2];
        const element3 = noun[index3];
        aux +=
          '<p><ul style="list-style: none;"><li>' +
          element1 +
          element2 +
          element3 +
          ".com" +
          "</p></ul></li>";
      }
    }
  }
  document.write(aux);
};
