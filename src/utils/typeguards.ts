/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeGithubUser } from '../types';

export const isGithubUser = (user: any): user is TypeGithubUser => 'id' in user;

