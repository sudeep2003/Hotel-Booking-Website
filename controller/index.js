// const express = require('express');
import express from 'express';

const app = express();

export function index(req, res) {
//   const check_in = req.body.check_in;
//   const check_out = req.body.check_out;

  res.render('index',
//     {
//     check_in,
//     check_out
//   }
  );
}