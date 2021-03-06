const fs = require("fs");
const { translateText } = require("puppeteer-google-translate");
const opt = { from: "en", to: "es", timeout: 10000, headless: true };

const outputLanguages = ["ar", "de", "el", "es", "it", "lv", "pt", "ru", "vi", "zh-CN", "hi"];
// const outputLanguages = ["vi"];

const translate = async (lang) => {
  opt.to = lang;
  return new Promise((resolve, reject) => {
    fs.readFile("en.json", "utf8", async (err, json) => {
      if (err) {
        console.error(err);
        return;
      }
      data = JSON.parse(json);
      const translatedData = JSON.parse(json);
      for (var prop in data) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
          if (typeof data[prop] === "string") {
            console.log("translating: " + data[prop]);
            try {
              const result = data[prop] ? await translateText(data[prop], opt) : '';
              translatedData[prop] = result;
              console.log(result);
            } catch(err) {
              translatedData[prop][prop2] = data[prop];
              console.error(err);
            }
          } else {
            for (var prop2 in data[prop]) {
              if (Object.prototype.hasOwnProperty.call(data[prop], prop2)) {
                if (typeof data[prop][prop2] === "string") {
                  console.log("translating: " + data[prop][prop2]);
                  try {
                    const result = data[prop][prop2] ? await translateText(data[prop][prop2], opt) : '';
                    translatedData[prop][prop2] = result;
                    console.log(result);
                  } catch(err) {
                    translatedData[prop][prop2] = data[prop][prop2];
                    console.error(err);
                  }
                }
              }
            }
          }
        }
      }
  
      fs.writeFileSync(
        "output/" + lang + ".json",
        JSON.stringify(translatedData, null, 2)
      );
  
      console.log(translatedData);
      resolve();
  })
  });
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

asyncForEach(outputLanguages, async (l) => {
  await translate(l);
})
