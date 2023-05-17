const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Temp = require("../models/temp");

const tempQuery = async (req, res) => {
  return res.status(201).json({
    msg: "Haii",
  });
};

module.exports = {
  tempQuery,
};
