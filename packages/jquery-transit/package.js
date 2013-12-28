Package.describe({
  summary: "Super-smooth CSS transitions & transformations for jQuery"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files('transit.js', 'client');
});
