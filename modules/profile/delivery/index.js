const auth = require("../../../middleware/auth");
const { hashPassword } = require("../../../utils");

module.exports = (app, usecase) => {
  const getProfile = async (req, res) => {
    try {
      const payload = {
        id: req.user.id,
        type: req.user.type,
      };
      const data = await usecase.getProfile(payload);
      res.send(data);
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  };

  const updatePassword = async (req, res) => {
    try {
      const body = {
        oldPassword: req.body.oldPassword,
        newPassword: hashPassword(req.body.newPassword),
      };
      await usecase.updatePassword(req.user.id, body);
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const updateCustomerProfile = async (req, res) => {
    try {
      const body = {
        name: req.body.name,
        phone: req.body.phone,
        profilePicture: req.body.profilePicture,
      };
      await usecase.updateCustomerProfile(req.user.id, body);
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  app.use(auth);
  app.get("/me", getProfile);
  app.put("/profile/customers", updateCustomerProfile);
  app.put("/update-password", updatePassword);
};
