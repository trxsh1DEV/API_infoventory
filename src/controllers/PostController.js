class HomeController {
  async store(req, res) {
    // const post = {
    //   so: 'Windows',
    //   platform: '64 bits',
    // };
    const post = req.body;
    console.log(req.body, 'oi');
    res.json(post);
  }
}

export default new HomeController();
