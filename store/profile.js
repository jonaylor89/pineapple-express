
export const state = () => ({
    visitedUser: null,
});

export const mutations = {
    SET_VISITED_USER(state, userData) {
        state.visitedUser = {
            id: userData.id,
            email: userData.email,
            username: userData?.username || "Anonymous",
            bio: userData?.bio || "",
            location: userData?.location || "",
            loopsCount: userData?.loopsCount || 0,
            onboarded: userData?.onboarded || false,
            profilePicture: userData?.profilePicture || "",
        };
    },
};

export const actions = {
    async fetchVisitedUserByUsername(ctx, username) {
        console.log('fetch user data ', username);
        const userQuery = await this.$fire.firestore.collection('users').where('username', '==', username).limit(1).get();
        if (userQuery.docs.length > 0) {
            const userData = userQuery.docs[0].data();
            ctx.commit('SET_VISITED_USER', {
                id: userQuery.docs[0].id,
                email: userData.email,
                username: userData?.username || "Anonymous",
                bio: userData?.bio || "",
                location: userData?.location || "",
                loopsCount: userData?.loopsCount || 0,
                onboarded: userData?.onboarded || false,
                profilePicture: userData?.profilePicture || "",
            });
        } else {
            console.log("USER DOESN'T EXIST");;
        }
    },
};