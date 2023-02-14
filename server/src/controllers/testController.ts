import { Error } from 'mongoose';

import { Response, Request } from 'express';
import { Test, TestDocument } from '../models/Test';

/**
 * GET: Gets the users who used the app within a certain date range
 * @route GET /analytics/test-completion
 */
export const getTests = (req: Request, res: Response) => {
    // If there is no access token then we are not going to be able to query the db for the user information
    if (req.params === undefined || req.params === null || req.params.accessToken === undefined || req.params.accessToken === null) {
        res.status(400).json({ message: 'No access token provided to query the user by', user: {} });
        return;
    }

    // Query the users in the db based on the auth0AccessToken and within date range
    Test.find({ accessToken: req.params.accessToken, date: {$gte: req.params.startDate, $lte: req.params.endDate} }, (err:Error, tests: TestDocument) => {
        // If there was an error report code 400 to the client
        if (err) {
            res.status(400).json({ message: err.message, tests });
            return;
        }
        // If no test was found then alert user
        if (tests === null) {
            res.status(404).json({ message: 'Could not find test completion in db', tests });
            return;
        }
        // Successfully found the user information based on the auth0token
        res.status(200).json({ message: 'success', tests });
    });
};