const express = require("express");

const router = express.Router();

const {
  getRecommendation,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");


// AI Recommendation Route
router.post("/recommend", protect, getRecommendation);

module.exports = router;