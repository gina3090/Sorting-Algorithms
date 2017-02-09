const express = require('express');
const router = express.Router();
const bubbleSort = require('../sort-algorithms/bubble-sort');
const quickSort = require('../sort-algorithms/quick-sort');
const insertionSort = require('../sort-algorithms/insertion-sort');
const selectionSort = require('../sort-algorithms/selection-sort');
const mergeSort = require('../sort-algorithms/merge-sort');

router.post('/bubble', (req, res) => {
  res.render();
});

router.post('/quick', (req, res) => {
  res.render();
});

router.post('/insertion', (req, res) => {
  res.render();
});

router.post('/selection', (req, res) => {
  res.render();
});

router.post('/merge', (req, res) => {
  res.render();
});

module.exports = router;