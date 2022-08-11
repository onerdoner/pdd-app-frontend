import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.APP_BACKEND_URL as string;

export const questionsApi = createApi({
    reducerPath: 'questionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        // prepareHeaders: async (headers, { getState }) => {
        //     const authTokens = localStorage.getItem('authTokens')
        //         ? JSON.parse(localStorage.getItem('authTokens') as string)
        //         : null;
        //
        //     if (!authTokens) {
        //         return headers;
        //     }
        //     headers.set('Authorization', `Bearer ${authTokens?.access}`);
        //
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        getQuestionByModuleId: builder.query<any, any>({
            query: ({moduleId, pageNumber = 1, pageSize = 10}) => ({
                url: `/questions/${moduleId}/module`,
                params: {
                    page: pageNumber,
                    pageSize,
                }
            }),
        }),
    }),
});

export const {
    useGetQuestionByModuleIdQuery
} = questionsApi;
