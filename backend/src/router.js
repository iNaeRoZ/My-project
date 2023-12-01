const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
// const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/soul", (req, res) => {
  client
    .query("select * from soul")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
// router.get("/soul/:id", itemControllers.read);
router.get("/soul/:id", (req, res) => {
  client
    .query("select * from soul where id = ?", [req.params.id])
    .then(([soul]) => {
      if (soul[0] != null) {
        res.json(soul[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
// Route to add a new item

/* ************************************************************************* */

module.exports = router;
