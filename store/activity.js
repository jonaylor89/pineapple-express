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
    async fetchUserActivities(ctx, userId) {
        console.log("fetching activities: ", userId);
        const activitiesDocs = await this.$fire.firestore
                                    .collection('activities')
                                    .limit(20)
                                    .get();
        console.log(activitiesDocs.docs.length);
        const activities = activitiesDocs.docs.map(() => {
            return {
                fromUserId: null,
                toUserId: null,
                type: null,
                timestamp: null,
            }
        });
        ctx.commit('SET_ACTIVITIES', activities);
    }
}