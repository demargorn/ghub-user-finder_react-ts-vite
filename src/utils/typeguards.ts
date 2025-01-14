/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeGithubUser } from '../types';

const isGithubUser = (user: any): user is TypeGithubUser => 'id' in user;

export default isGithubUser;
