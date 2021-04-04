const auth = require("../../../middleware/auth");

module.exports = (app, usecase) => {
  const getAllAddressByUserId = async (req, res) => {
    try {
      const data = await usecase.getAllAddressByUserId(req.user.id);
      res.send(data);
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  };

  const getAddressById = async (req, res) => {
    try {
      const data = await usecase.getAddressById(req.params.id);
      res.send(data);
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  };

  const createAddress = async (req, res) => {
    try {
      const body = {
        address: req.body.address,
        user_id: req.user.id,
      };
      await usecase.createAddress(body);
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const updateAddressById = async (req, res) => {
    try {
      const body = {
        address: req.body.address,
        user_id: req.user.id,
      };
      await usecase.updateAddressById(req.params.id, body);
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const deleteAddressById = async (req, res) => {
    try {
      await usecase.deleteAddressById(req.params.id);
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  app.use(auth);
  app.get("/address", getAllAddressByUserId);
  app.get("/address/:id", getAddressById);
  app.post("/address", createAddress);
  app.put("/address/:id", updateAddressById);
  app.delete("/address/:id", deleteAddressById);
};
