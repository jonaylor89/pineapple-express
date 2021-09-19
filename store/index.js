
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
    SET_USER(state, userData) {
        state.user = {
            id: userData.id,
            email: userData.email,
            username: userData?.username || "anonymous",
            bio: userData?.bio || "",
            location: userData?.location || "",
            loopsCount: userData?.loopsCount || 0,
            onboarded: userData?.onboarded || false,
            profilePicture: userData?.profilePicture || "",
        };
    },
}

export const actions = {
    async onAuthStateChangedAction(ctx, { authUser, claims }) {
        if (!authUser) {
            // claims = null
            // Perform logout operations
        } else {
            // Do something with the authUser and the claims object...
            console.log(authUser.uid);
            const { uid, email } = authUser;
            const user = await this.$fire.firestore.collection('users').doc(uid).get();
            const userData = user?.data() || null;

            ctx.commit('SET_USER', {
                id: uid,
                email: email,
                username: userData?.username || "anonymous",
                bio: userData?.bio || "",
                location: userData?.location || "",
                loopsCount: userData?.loopsCount || 0,
                onboarded: userData?.onboarded || false,
                profilePicture: userData?.profilePicture || ""
            });

            this.$router.push('/');
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
