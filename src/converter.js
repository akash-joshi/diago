const inputJson = require("./initialMeet.json");

console.log(
  JSON.stringify(
    inputJson.map((text, index) => {
      const returnObj = {
        id: index,
        trigger: index + 1,
      };

      if (text === "input") {
        returnObj.user = true;
      } else {
        returnObj.message = text;
      }

      return returnObj;
    })
  )
);
