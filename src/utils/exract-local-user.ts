import { TypeGithubUser, TypeLocalGithubUser } from '../types';

export const extractLocalUser = (user: TypeGithubUser): TypeLocalGithubUser => ({
   login: user.login,
   avatar: user.avatar_url,
   name: user.name,
   bio: user.bio,
   blog: user.blog,
   company: user.company,
   created: user.created_at,
   followers: user.followers,
   following: user.following,
   location: user.location,
   repos: user.public_repos,
   twitter: user.twitter_username,
});
