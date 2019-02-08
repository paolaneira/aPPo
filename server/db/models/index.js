const User = require("./user");
const City = require("./city");
const Location = require("./location");
// const Style = require("./style");

User.hasMany(City);
// City.belongsTo(User);
// Location.hasMany(City);
City.hasMany(Location);
// User.hasOne(Style);
// Style.belongsTo(User);

module.exports = {
  User,
  City,
  Location
  // Style
};
