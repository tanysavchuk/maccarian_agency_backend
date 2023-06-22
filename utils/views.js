const path = require("path");

const view = (view) => {
  return path.join(__dirname, `../views/${view}.html`);
};

module.exports = {
  view,
};
