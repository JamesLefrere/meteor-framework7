Package.describe({
  summary: "Framework7 for Meteor",
  version: "0.1.0"
});

Package.on_use(function (api) {
  api.add_files(['framework7/framework7.css'], 'client');
  api.add_files(['framework7/framework7.js'], 'client');
});