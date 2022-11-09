import axios from 'axios';


const actions = {
  FETCH_POSTS_DATA(context) {
    const config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    };



    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => {
            /**
             * Call mutation method SET_POSTS_DATA_STATE from store src\store\Modules\postsModule\mutation.js
             * */
          context.commit('SET_POSTS_DATA_STATE', response?.data);
          return resolve(context.state.postsDataState);
        })
        .catch((error) => reject(error));
    });
  },
     FETCH_USERS_DATA(context) {
        const config = {
            method: 'get',
            url:  ('https://jsonplaceholder.typicode.com/users'),
        };



        return  new Promise((resolve, reject) => {
            axios(config)
                .then((response) => {
                    /**
                     * Call mutation method SET_POSTS_DATA_STATE from store src\store\Modules\postsModule\mutation.js
                     * */
                    context.commit('SET_USERS_DATA_STATE', response?.data);
                    return resolve(context.state.usersDataState);
                })
                .catch((error) => reject(error));
        });
    },

    FETCH_COMMENTS_DATA(context, {id}) {
        const config = {
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/comments/${id}` ,
        };



        return new Promise((resolve, reject) => {
            axios(config)
                .then((response) => {
                    /**
                     * Call mutation method SET_POSTS_DATA_STATE from store src\store\Modules\postsModule\mutation.js
                     * */
                    context.commit('SET_COMMENTS_DATA_STATE', response?.data);
                    return resolve(context.state.commentsDataState);
                })
                .catch((error) => reject(error));
        });
    },

    FETCH_USER_ID_DATA(context, {userId}) {
        const config = {
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users/${userId}` ,
        };



        return new Promise((resolve, reject) => {
            axios(config)
                .then((response) => {
                    /**
                     * Call mutation method SET_POSTS_DATA_STATE from store src\store\Modules\postsModule\mutation.js
                     * */
                    context.commit('FETCH_USER_ID_DATA', response?.data);
                    return resolve(context.state.useridDataState);
                })
                .catch((error) => reject(error));
        });
    },
};


export default actions;
