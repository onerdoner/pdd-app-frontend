import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
    user: IUserAuth;
    isAuthenticated: boolean;
    showSignInModal: boolean;
    showSignUpModal: boolean;
}

interface IUserAuth {
    username: string,
    first_name: string,
    last_name: string,
    is_paid: boolean,
    gpa_test: boolean,
}

const initialState = {
    id: -1,
    user: undefined,
    isAuthenticated: false,
    showSignInModal: false,
    showSignUpModal: false,
} as Partial<IUserState>;

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAuth: (state, accessToken) => {
            state.isAuthenticated = true;
            state.user = accessToken.payload;
        },
        setUserLogout: (state) => {
            state.isAuthenticated = false;
            state.user = undefined;
        },
        setUserIsPaid: (state) => {
            if (state.user) {
                state.user.is_paid = true;
            }
        },
        showSignInModalAction: (state, shouldShow) => {
            state.showSignInModal = shouldShow.payload;
        },
        showSignUpModalAction: (state, shouldShow) => {
            state.showSignUpModal = shouldShow.payload;
        },
    },
});

export const {
    setUserAuth,
    setUserLogout,
    setUserIsPaid,
    showSignInModalAction,
    showSignUpModalAction,
} = userSlice.actions;

export default userSlice.reducer;
