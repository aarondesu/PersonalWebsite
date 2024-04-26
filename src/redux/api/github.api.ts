import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GithubRepo = {
    id: number,
    name: string,
    full_name: string,
    private: boolean,
    html_url: string,
    description: string,   
    fork: boolean,
    language?: string;
}

export type GithubRepoResult = {
    results: GithubRepo[] 
};

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (builder) => ({
        getGithubRepos: builder.query<GithubRepo[], void>({
            query: () => 'users/aarondesu/repos', 
        })
    })
})

export const { useGetGithubReposQuery } = githubApi;