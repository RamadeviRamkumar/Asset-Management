const router = require('express').Router();

const AssignedAsset = require('../model/assign model.js');

router.post("/assignassets", async (req, res) => {
    var user = new AssignedAsset();
    user.AssetsName     = req.body.AssetsName;
    user.AssetsId       = req.body.AssetsId;
    user.Category       = req.body.Category;
    user.SubCategory    = req.body.SubCategory;
    user.Model          = req.body.Model;
    user.PurchaseDate   = req.body.PurchaseDate;
    user.AssetsLocation = req.body.AssetsLocation;

    try {
        await user.save();
        res.status(201).json({
            message: 'New Assign details Successfully',
            data: user,
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error adding assign asset',
            error: err.message,
        });
    }
});

var assigncontroller = require("../controller/assigncontroller.js");
router.route("/assign/getall").get(assigncontroller.index);

router
  .route("/assign/:user_id")
  .get(assigncontroller.view)
  .patch(assigncontroller.update)
  .put(assigncontroller.update)
  .delete(assigncontroller.Delete);

module.exports = router;