import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';
const getters = {

}

const state: State = {
  movieList: [
    {
      name: '霸王别姬',
      title: '豆瓣top10',
      id: '3356'
    }
  ]
}

const mutations = {};
const actions = {
  // api 前后端的分离点
  // commit mutations
  async movieList (context: {commit: Commit}, cate: string) {
    const res = await getMovieList(cate)
      .then((response) => response)
    return res;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}