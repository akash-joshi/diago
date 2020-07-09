const inputJson = require("./input.json");

console.log(
  JSON.stringify(
    inputJson.map((text, index) => {
      const returnObj = {
        id: index + 1,
        trigger: index + 2,
      };

      if (Array.isArray(text)) {
        returnObj.options = text.map((label, innerIndex) => ({
          value: innerIndex + 1,
          label,
          trigger: index + 2,
        }));
      } else {
        returnObj.message = text;
      }

      return returnObj;
    })
  )
);
