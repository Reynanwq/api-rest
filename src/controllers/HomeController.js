//Classes e funcoes construtoras comecam com letra maiuscula

class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();

//deve ser exportado sempre como uma funcao
