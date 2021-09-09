// {
//     activities: [
//         {
//             fromUser: { userDataHere },
//             activityType: "like || comment || whatever"
//         }
//           ...
//     ]
// }

// state needs list of activities
// mutation needs a way to set ativities

// actions -> pull activity and get user data from fromUserId 

export const state = () => ({
    activities: [
    ],
    /*
    fromUserId: {},
    timestamp: null,
    type: null,
    */
});

export const getters = {
    
}

export const mutations = {
    SET_ACTIVITIES(state, activities) {
        state.activities = activities;
    },
};

export const actions = {
    async fetchUserActivities(ctx) {
        // console.log(ctx);
        // console.log("fetching activities: ", this.state.user.id);
        const userId = this.state.user.id;
        const activitiesDocs = await this.$fire.firestore
                                    .collection('activities')
                                    .where('toUserId', '==', userId)
                                    .limit(20)
                                    .get();
        const activities = await Promise.all(activitiesDocs.docs.map(async (doc) => {
            const activityData = doc.data();
            const userDoc = await this.$fire.firestore.collection('users').doc(activityData.fromUserId).get();
            const userData = userDoc.data();
            return {
                fromUserId: {
                    id: this.state.user.id,
                    email: userData.email,
                    username: userData?.username || "anonymous",
                    bio: userData?.bio || "",
                    location: userData?.location || "",
                    loopsCount: userData?.loopsCount || 0,
                    onboarded: userData?.onboarded || false,
                    profilePicture: userData?.profilePicture || "",
                },
                // toUserId: activityData.toUserId,
                type: activityData.type,
                timestamp: activityData.timestamp,
            }
        }));
        ctx.commit('SET_ACTIVITIES', activities);
    }
}