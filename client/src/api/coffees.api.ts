import httpClient from './httpClient';

const END_POINT = '/coffees';


/* Example users.api.js

import httpClient from './httpClient';

const END_POINT = '/users';


const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = (user_id) => httpClient.get(END_POINT, { user_id });
// maybe more than one..
const createUser = (username, password) => httpClient.post(END_POINT, { username, password });

export {
    getAllUsers,
    getUser,
    createUser
}
*/