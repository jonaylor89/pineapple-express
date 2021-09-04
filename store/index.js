
export const state = () => ({
    user: null,
})

export const getters = {
    isLoggedIn: (state) => {
        try {
            return state.user.id !== null
        } catch {
            return false
        }
    },
};

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {

        if (!authUser) {
            // claims = null
            // perform logout operations
        } else {
            // Do something with the authUser and the claims object...

            // pull user data from database
            const { uid, email } = authUser;
            state.user = { id: uid, email: email, };

            this.$router.push('/');
        }
    }
}

export const actions = {
    onAuthStateChangedAction(ctx, { authUser, claims }) {
        if (!authUser) {
            // claims = null
            // Perform logout operations
        } else {
            console.log(authUser.uid);
            // Do something with the authUser and the claims object...
        }
    },
    async signInWithGoogle() {
        let provider = new this.$fireModule.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        this.$fire.auth
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                // let token = credential.accessToken;
                // The signed-in user info.
                let user = result.user;

                console.log('user: ', user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                // let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                // let credential = error.credential;
                console.log(errorMessage);
            });
    },
    signInWithApple() {
        console.log('apple');
    },
    signOut() {
        this.$fire.auth.signOut().then(() => {
            console.log("sign out successful");
            // Sign-out successful.
        }).catch((error) => {
            console.log(error.message);
            // An error happened.
        });
    }
};
