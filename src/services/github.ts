import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GithubRepoResult = {
    id: number,
    name: string,
    fullname: string,
    private: boolean,
    htmlUrl: string,
    description: string,    
};

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (builder) => ({
        getGithubRepos: builder.query<GithubRepoResult, string>({
            query: () => 'users/aarondesu/repos', 
        })
    })
})

export const { useGetGithubReposQuery } = githubApi;