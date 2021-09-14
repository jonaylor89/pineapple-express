
export const state = () => ({
    visitedUser: null,
    isFollowing: false,
    followerCount: 0,
    followingCount: 0,
    visitedUserLoops: [],
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
    SET_USER_LOOPS(state, loops) {
        state.visitedUserLoops = loops;
    },
    SET_IS_FOLLOWING(state, isFollowing) {
        state.isFollowing = isFollowing;
    },
    SET_FOLLOWER_COUNT(state, count) {
        state.followerCount = count;
    },
    SET_FOLLOWING_COUNT(state, count) {
        state.followingCount = count;
    },
    INCREMENT_FOLLOWER_COUNT(state) {
        state.followerCount = state.followerCount + 1;
    },
    DECREMENT_FOLLOWER_COUNT(state) {
        state.followerCount = state.followerCount - 1;
    }
};

export const actions = {
    async fetchVisitedUserByUsername(ctx, username) {
        console.log('fetch user data ', username);
        const userQuery = await this.$fire.firestore.collection('users').where('username', '==', username).limit(1).get();
        if (userQuery.docs.length > 0) {
            const userData = userQuery.docs[0].data();
            const userId = userQuery.docs[0].id;
            ctx.commit('SET_VISITED_USER', {
                id: userId,
                email: userData.email,
                username: userData?.username || "anonymous",
                bio: userData?.bio || "",
                location: userData?.location || "",
                loopsCount: userData?.loopsCount || 0,
                onboarded: userData?.onboarded || false,
                profilePicture: userData?.profilePicture || "",
            });

            ctx.dispatch('fetchUserLoop', userId);
            ctx.dispatch('fetchFollowerCount', userId);
            ctx.dispatch('fetchFollowingCount', userId);
            ctx.dispatch('fetchIsFollowing', userId);
        } else {
            console.log("USER DOESN'T EXIST");
            // Navigator to 404 page
            this.$router.push('/');
        }
    },
    async fetchUserLoop(ctx, visitedUserId) {
        const userLoopsQuery = await this.$fire.firestore.collection('loops').where('userId', '==', visitedUserId).get();
        const userLoops = userLoopsQuery.docs.map((doc) => {
            const loopData = doc.data();
            return {
                audio: loopData.audio || '',
                comments: loopData.comments || 0,
                downloads: loopData.downloads || 0,
                likes: loopData.likes || 0,
                tags: loopData.tags || [],
                timestamp: loopData.timestamp || Date.now(),
                title: loopData.title || '',
            };
        });

        ctx.commit('SET_USER_LOOPS', userLoops);
    },
    async fetchFollowerCount(ctx, visitedUserId) {
        const followersSnapshot = await this.$fire.firestore.collection('followers').doc(visitedUserId).collection('Followers').get();
        const count = followersSnapshot.docs.length;

        ctx.commit('SET_FOLLOWER_COUNT', count);
    },
    async fetchFollowingCount(ctx, visitedUserId) {
        const followingsSnapshot = await this.$fire.firestore.collection('following').doc(visitedUserId).collection('Following').get();
        const count = followingsSnapshot.docs.length;

        ctx.commit('SET_FOLLOWING_COUNT', count)
    },
    async fetchIsFollowing(ctx, visitedUserId) {
        try {
            const currentUserId = ctx.rootState.user.id;
            const isFollowingDoc = await this.$fire.firestore.collection('followers').doc(visitedUserId).collection('Followers').doc(currentUserId).get();
            const isFollowing = isFollowingDoc.exists;
            ctx.commit('SET_IS_FOLLOWING', isFollowing);
        } catch (e) {
            console.log(e.message);
        }
    },
    async followUser(ctx, visitedUserId) {
        try {
            const callable = this.$fireModule.functions.httpsCallable('followUser');
            const results = await callable({
                follower: ctx.rootState.user.id,
                followed: visitedUserId,
            })
            console.log(results.data);
            ctx.commit('SET_IS_FOLLOWING', true);
            ctx.commit('INCREMENT_FOLLOWER_COUNT');
        } catch (e) {
            console.log(e.message);
        }
    },
    async unfollowUser(ctx, visitedUserId) {

        try {
            const callable = this.$fireModule.functions.httpsCallable('unfollowUser');
            const results = await callable({
                follower: ctx.rootState.user.id,
                followed: visitedUserId,
            })
            console.log(results.data);
            ctx.commit('SET_IS_FOLLOWING', false);
            ctx.commit('DECREMENT_FOLLOWER_COUNT');
        } catch (e) {
            console.log(e.message);
        }
    },
};