
export const state = () => ({
    visitedUser: null,
    isFollowing: false,
    followerCount: 0,
    followingCount: 0,
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
    SET_IS_FOLLOWING(state, isFollowing) {
        state.isFollowing = isFollowing;
    }
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
                username: userData?.username || "anonymous",
                bio: userData?.bio || "",
                location: userData?.location || "",
                loopsCount: userData?.loopsCount || 0,
                onboarded: userData?.onboarded || false,
                profilePicture: userData?.profilePicture || "",
            });
        } else {
            console.log("USER DOESN'T EXIST");
            // Navigator to 404 page
            this.$router.push('/');
        }
    },
    async fetchFollowerCount(ctx, visitedUserId) {

    },
    async fetchFollowingCount(ctx, visitedUserId) {

    },
    async isUserFollowing(ctx, visitedUserId) {
        try {
            console.log(visitedUserId)
            // const isFollowingDoc = await this.$fire.collection('followers').doc(visitedUserId).collection('Followers').doc(ctx.state.user.id).get();
            // const isFollowing = isFollowingDoc.exists();
            // ctx.commit('SET_IS_FOLLOWING', isFollowing);

            ctx.commit('SET_IS_FOLLOWING', false);
        } catch (e) {
            console.log(e.message);
        }
    },
    async followUser(ctx, visitedUser) {
        ctx.commit('SET_IS_FOLLOWING', true);
    },
    async unfollowUser(ctx, visitedUser) {
        ctx.commit('SET_IS_FOLLOWING', false);
    },
};