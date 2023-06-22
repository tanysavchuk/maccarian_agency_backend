const express = require("express");
const { view } = require("./utils/views");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
const cors = require("cors");
const homeController = require("./controllers/home");
// MVC patter - moedle, view, controller
//handlebars
const { sequelize } = require("./db/mysql");
const { engine } = require("express-handlebars");
const { User } = require("./models/user");
const { Comment } = require("./models/comment");
const { CardsCustomize } = require("./models/cards_customize");
const { Possibilities } = require("./models/possibilities");
const { LandingPages } = require("./models/landing_pages");
const { SupportingPages } = require("./models/supporting_pages");
const { AuthPages } = require("./models/auth_pages");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { Op } = require("sequelize");

//===================================== MIDDLEWARE
// app.get("/", (req, res, next) => {
//   console.log("MIDDLEWARE");
//   next();
// });

// ===================================== API ENDPOINTS
// app.get("/", async (req, res, next) => {
// SLELECT * FROM users
//const users = await User.findAll();

// SLELECT users.name, users.email FROM users
// const users = await User.findAll({
//   attributes: ["name", "email"],
// });

// SLELECT users.name, users.email FROM users WHERE email != "users4@gmail.com"
// const users = await User.findAll({
//   attributes: ["email", "name"],
//   where: {
//     email: {
//       [Op.not]: "users4@gmail.com",
//     },
//   },
// });

// try {
// добавление новой строки в таблицу
// const newComment = await Comment.create({
//   user_id: "2",
//   body: "SELECT FROM `comments` WHERE 1",
// });

//     const userId = 2;

//     const comments = await Comment.findAll({
//       where: { user_id: userId },
//     });

//     res.json({ comments });
//   } catch (error) {
//     console.error("Ошибка при добавлении комментария:", error);
//     res.status(500).json({ error: "Ошибка сервера" });
//   }
// });
// app.get("/users", async (req, res, next) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// app.get("/pages/landing", homeController.landing);
// app.get("/pages/supporting", homeController.supporting);
// app.get("/pages/auth", homeController.auth);

// =====================================

app.get("/cards_customize", async (req, res, next) => {
  const cards_customize = await CardsCustomize.findAll();
  res.json(cards_customize);
});

app.get("/possibilities", async (req, res, next) => {
  const possibilities = await Possibilities.findAll();
  res.json(possibilities);
});

app.get("/landing_pages", async (req, res, next) => {
  const landing_pages = await LandingPages.findAll();
  res.json(landing_pages);
});

app.get("/supporting_pages", async (req, res, next) => {
  const supporting_pages = await SupportingPages.findAll();

  res.json(supporting_pages);
});

app.get("/auth_pages", async (req, res, next) => {
  const auth_pages = await AuthPages.findAll();
  console.log("auth_pages: ", auth_pages);
  res.json(auth_pages);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
