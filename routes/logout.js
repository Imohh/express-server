const router = require("express").Router();
const { User } = require("../models/user");

router.post("/", async (req, res) => {
  try {
    // Clear user session or token or any other logout-related logic
    // For example, if you're using tokens, you can invalidate the token or remove it from the session storage or cookies
    req.session.destroy(); // Clear session
    res.clearCookie("token"); // Clear token cookie

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during logout" });
  }
});

module.exports = router;