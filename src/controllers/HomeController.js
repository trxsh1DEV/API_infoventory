class HomeController {
  index(req, res) {
    res.json({
      tudo_ok: true,
    });
  }
}

export default new HomeController();
