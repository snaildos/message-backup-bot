const fs = require("fs"),
  path = require("path"),
  enPath = path.join(__dirname, "./translations/en-US.json"),
  en_US = require(enPath);

const keys = Object.keys(en_US);

for (let file of fs.readdirSync(path.join(__dirname, "translations"))) {
  file = path.join(__dirname, "./translations", file);
  if (file == enPath) continue;
  const data = require(file);

  const object = {};

  for (const key of keys) {
    object[key] = data[key];
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}
