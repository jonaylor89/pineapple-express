
export const state = () => ({
    tempUser: {},
});

export const mutations = {
    SET_USER(state, userData) {
        state.tempUser = {
            id: userData.id,
            email: userData.email,
            username: userData?.username || "anonymous",
            bio: userData?.bio || "",
            location: userData?.location || "",
            loopsCount: userData?.loopsCount || 0,
            onboarded: userData?.onboarded || false,
            profilePicture: userData?.profilePicture || "",
        };
    }
}