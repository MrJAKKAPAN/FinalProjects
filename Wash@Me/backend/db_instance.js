// อะแดปเตอร์
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./DB.sqlite"
});

(async () => {
    await sequelize.authenticate();
})();

module.exports = sequelize;