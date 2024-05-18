const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router /* router same as below*/
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

/* param is a middleware */
router.param("id", (req, res, next, id) => {
  console.log(id);
});

// router.get("/:id", (req, res) => {
//   // dynamic parameters
//   req.params.id;
//   res.send(`Get user with ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   // dynamic parameters
//   req.params.id;
//   res.send(`Update user with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   // dynamic parameters
//   req.params.id;
//   res.send(`Delete user with ID ${req.params.id}`);
// });

module.exports = router;
