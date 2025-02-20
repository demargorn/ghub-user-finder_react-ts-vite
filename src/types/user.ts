export type TypeGithubUser = {
   login: string;
   id: number;
   avatar_url: string;
   name: string;
   company: string;
   blog: string;
   location: string;
   bio: string;
   twitter_username: string;
   public_repos: number;
   followers: number;
   following: number;
   created_at: string;
};

export type TypeLocalGithubUser = {
   login: string;
   avatar: string;
   name: string;
   company: string;
   blog: string;
   location: string;
   bio: string;
   twitter: string;
   repos: number;
   followers: number;
   following: number;
   created: string;
};

export type TypeGithubError = {
   message: string;
   documentation_url: string;
};
