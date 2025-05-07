const express = require("express");
const router = express.Router();

// Helper function to format date to YYYY-MM-DD
const formatDateToISOShorthand = (date) => {
  return date.toISOString().split("T")[0];
};

// Route that returns the current date in YYYY-MM-DD format
router.get("/date", (req, res) => {
  const currentDate = new Date();
  res.json({
    date: formatDateToISOShorthand(currentDate),
    timestamp: currentDate.getTime(),
  });
});

// Route that returns an incorrect date (one year in the past)
router.get("/wrong-date", (req, res) => {
  const currentDate = new Date();
  const wrongDate = new Date();
  wrongDate.setFullYear(currentDate.getFullYear() - 1); // Set to one year ago

  res.json({
    date: formatDateToISOShorthand(wrongDate),
    timestamp: wrongDate.getTime(),
  });
});

module.exports = router;
