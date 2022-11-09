const mutations = {
  SET_POSTS_DATA_STATE(state, payload) {
    state.postsDataState = payload;
  },
  SET_USERS_DATA_STATE(state, payload) {
    state.usersDataState = payload;
  },
  SET_COMMENTS_DATA_STATE(state, payload) {
    state.commentsDataState = payload;
  },
  FETCH_USER_ID_DATA(state, payload) {
    state.useridDataState = payload;
  },
};

export default mutations;
