import express from 'express';
import mongoose from 'mongoose';
import {User} from '../models/models'

const app = express();

const user = new User({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    accessLevel: Number
});

await user.save();