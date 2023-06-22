// GET - get all landing pages
exports.landing = (req, res, next) => {
  res.json([
    { title: "Title121212", description: "description1", link: "#" },
    { title: "Title2", description: "description2", link: "#" },
    { title: "Title3", description: "description3", link: "#" },
    { title: "Title4", description: "description4", link: "#" },
    { title: "Title5212121", description: "description5", link: "#" },
    { title: "Title6", description: "description6", link: "#" },
    { title: "Title7", description: "description7", link: "#" },
    { title: "Title8", description: "description8", link: "#" },
    { title: "Title9", description: "description9", link: "#" },
    { title: "Title10", description: "description10", link: "#" },
    { title: "Title11", description: "description11", link: "#" },
    { title: "Title12", description: "description12", link: "#" },
  ]);
};
// GET - get all supporting pages
exports.supporting = (req, res, next) => {
  res.json([
    { title: "Title1", description: "description1", link: "#" },
    { title: "Title2", description: "description2", link: "#" },
    { title: "Title3", description: "description3", link: "#" },
    { title: "Title4", description: "description4", link: "#" },
    { title: "Title5", description: "description5", link: "#" },
    { title: "Title6", description: "description6", link: "#" },
    { title: "Title7", description: "description7", link: "#" },
    { title: "Title8", description: "description8", link: "#" },
    { title: "Title9", description: "description9", link: "#" },
    { title: "Title10", description: "description10", link: "#" },
    { title: "Title11", description: "description11", link: "#" },
    { title: "Title12", description: "description12", link: "#" },
  ]);
};
// GET - get all auth pages
exports.auth = (req, res, next) => {
  res.json([
    { title: "Title1", description: "description1", link: "#" },
    { title: "Title2", description: "description2", link: "#" },
    { title: "Title3", description: "description3", link: "#" },
    { title: "Title4", description: "description4", link: "#" },
    { title: "Title5", description: "description5", link: "#" },
    { title: "Title6", description: "description6", link: "#" },
  ]);
};
// GET - get by ID
exports.show = (req, res, next) => {
  res.render("home");
};
// GET - post new record
exports.store = (req, res, next) => {
  res.json("home");
};
// GET - put/patch new record
exports.update = (req, res, next) => {
  res.render("home");
};
// GET - delete by ID
exports.delete = (req, res, next) => {
  res.render("home");
};

//CRUD - create, read, update, delete
