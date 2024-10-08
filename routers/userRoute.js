const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.get("/mail", controllers.sendMailControllers.sendMail);

router.post("/insert", controllers.userController.insert);
router.get("/getRecord", controllers.userController.getRecord);
router.put("/updateSome", controllers.userController.updateSomeRecord);
router.patch("/updateAll", controllers.userController.updateAllRecord);
router.delete("/delete", controllers.userController.deleteRecord);

router.post("/test", controllers.twillioController.test );
router.post("/sendotp", controllers.twillioController.sendopt );
router.post("/verifyotp", controllers.twillioController.VerifyOTP )

module.exports = router;