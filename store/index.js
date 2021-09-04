
export const state = () => ({
    user: {
        uid: '',
        email: '',
        emailVerified: false,
    },
})

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {

        if (!authUser) {
            // claims = null
            // perform logout operations
        } else {
            // Do something with the authUser and the claims object...


            // pull user data from database

            const { uid, email, emailVerified } = authUser;
            state.user = { uid, email, emailVerified }

        }
    }

}

export const actions = {
    onAuthStateChangedAction: () => {

    },
};
