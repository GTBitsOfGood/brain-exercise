import { Error } from 'mongoose';

import { Request, Response } from 'express';
import { Test, TestDocument } from '../models/Test';
import { User } from '../models/User';

/**
 * GET: Gets the users who used the app within a certain date range
 * @route GET /analytics/test-completion
 */
export const getTests = async (req: Request, res: Response) => {
  // If there is no access token then we are not going to be able to query the db for the user information
  if (
    req.query === undefined ||
    req.query === null ||
    req.query.accessToken === undefined ||
    req.query.accessToken === null ||
    req.query.startDate === undefined ||
    req.query.startDate === null ||
    req.query.endDate === undefined ||
    req.query.endDate === null
  ) {
    return res.status(400).json({
      message: 'Invalid request. Specify accessToken, startDate, and endDate.',
    });
  }

  if (
    isNaN(Date.parse(req.query.startDate as string)) ||
    isNaN(Date.parse(req.query.endDate as string))
  ) {
    return res.status(400).json({
      message: 'Start date or end date is not properly formatted',
    });
  }

  // Query the user corresponding to the provided access token
  let user;
  try {
    user = await User.findOne({
      accessToken: req.query.accessToken,
    });
  } catch (err) {
    return res.status(400).json({
      message: `Error creating user: ${err.message}`,
    });
  }

  if (user === null) {
    return res.status(400).json({
      message: 'Could not find user in db',
    });
  }

  let tests;
  try {
    tests = await Test.find({
      userId: user._id,
      date: { $gte: req.query.startDate, $lte: req.query.endDate },
    });
  } catch (err) {
    return res.status(400).json({
      message: `Error fetching tests: ${err.message}`,
    });
  }

  res.status(200).json({ message: 'success', tests });
};

/**
 * POST: Inserts a new test document into the tests collection
 * @route POST /analytics/test-completion
 */
export const postTests = async (req: Request, res: Response) => {
  // If there is no access token then we are not going to be able to query the db for the user information
  if (
    req.body === undefined ||
    req.body === null ||
    req.body.accessToken === undefined ||
    req.body.accessToken === null ||
    req.body.result === undefined ||
    req.body.result === null ||
    req.body.numCorrect === undefined ||
    req.body.numCorrect === null ||
    req.body.numQuestions === undefined ||
    req.body.numQuestions === null
  ) {
    return res.status(400).json({
      message:
        'Invalid request. Specify accessToken, result, numCorrect, and numQuestions.',
    });
  }

  if (!['QUIT', 'COMPLETED'].includes(req.body.result as string)) {
    return res.status(400).json({
      message: 'Invalid result. Must be either QUIT or COMPLETED',
    });
  }

  if (
    !(
      typeof req.body.numCorrect === 'number' &&
      typeof req.body.numQuestions === 'number'
    )
  )
    return res.status(400).json({
      message: 'Invalid numCorrect or numQuestions. Must be integers',
    });

  // Query the user corresponding to the provided access token
  let user;
  try {
    user = await User.findOne({
      accessToken: req.body.accessToken,
    });
  } catch (err) {
    return res.status(400).json({
      message: `Error creating user: ${err.message}`,
    });
  }

  if (user === null) {
    return res.status(400).json({
      message: 'Could not find user in db',
    });
  }

  let test;
  try {
    test = await Test.create({
      date: new Date(),
      result: req.body.result,
      numCorrect: parseInt(req.body.numCorrect),
      numQuestions: parseInt(req.body.numQuestions),
      userId: user._id,
    });
  } catch (err) {
    return res.status(400).json({
      message: `Error creating test: ${err.message}`,
    });
  }

  res.status(200).json({ message: 'success', test });
};
