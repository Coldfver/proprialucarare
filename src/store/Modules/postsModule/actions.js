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
            console.log("response?.data: ", response?.data);
            /**
             * Call mutation method SET_POSTS_DATA_STATE from store src\store\Modules\postsModule\mutation.js
             * */
          context.commit('SET_POSTS_DATA_STATE', response?.data);
          return resolve(context.state.postsDataState);
        })
        .catch((error) => reject(error));
    });
  },
};

export default actions;
