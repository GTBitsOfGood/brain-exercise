import { Error } from 'mongoose';

import { Response, Request } from 'express';
import { TestCompletion, TestCompletionDocument } from '../models/TestCompletion';

/**
 * GET: Gets the amount of time a user spent on the app
 * @route GET /analytics/test-completion
 */
export const getTestCompletion = (req: Request, res: Response) => {
    // If there is no access token then we are not going to be able to query the db for the user information
    if (req.params === undefined || req.params === null || req.params.accesstoken === undefined || req.params.accesstoken === null) {
        res.status(400).json({ message: 'No access token provided to query the user by', user: {} });
        return;
    }

    // Query the users in the db based on the auth0AccessToken
    TestCompletion.find({ accessToken: req.params.accesstoken, startDate: req.params.startDate, endDate: req.params.endDate }, (err:Error, testCompletion: TestCompletionDocument) => {
        // If there was an error report code 400 to the client
        if (err) {
            res.status(400).json({ message: err.message, testCompletion });
            return;
        }
        // If no test was found then alert user
        if (testCompletion === null) {
            res.status(404).json({ message: 'Could not find test completion in db', testCompletion });
            return;
        }
        // Successfully found the user information based on the auth0token
        res.status(200).json({ message: 'success', testCompletion });
    });
};