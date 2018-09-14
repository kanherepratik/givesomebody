module.exports = function(app) {
  var role = app.models.Role;
  role.create(
    {
      name: 'authenticatedDonor',
    },
    function(err, role) {
      if (err) return console.log(err);
    }
  );
};
