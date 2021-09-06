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
    SET_ACTIVITIES(state, userData) {
        state.fromUserId = {
            id: userData.id,
            email: userData.email,
            username: userData?.username || "Anonymous",
            bio: userData?.bio || "",
            location: userData?.location || "",
            loopsCount: userData?.loopsCount || 0,
            onBoarded: userData?.onboarded || false,
            profilePicture: userData?.profilePicture || "",
        };
        state.timestamp = userData.timestamp;
        state.type = userData.type;
    },
};

export const actions = {
    async fetchUserActivities(userId) {
        console.log("fetchting activities: ", usedId);
    }
}