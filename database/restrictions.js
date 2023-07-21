import express from 'express'
import mongoose from 'mongoose'
import {Restriction} from '../models/models'

const app = express();

const restriction = new Restriction({
    restrictionName: String,
    createdAt: Date,
    updatedAt: Date
});

await restriction.save();