class Controller {
  static login_get = (req, res) => {
    req.session.isValid = true;
    console.log(req.session);
    console.log(req.session.id);

    res.render("login.ejs");
  };
  static dashboard_get = (req, res) => {
    res.render("dashboard.ejs");
  };
  static home_get = (res, req) => {
    res.render("home.ejs");
  };
  static signup_get = (res, req) => {
    res.render("signup.ejs");
  };
  static signup_post = (res, req) => {
    try {
      const from_data = req;
    } catch (err) {
      console.log;
    }
  };
}
