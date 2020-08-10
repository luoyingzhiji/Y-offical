const state = () => ({
  title: '',
  page: '',
  keywords: '',
  description: '',
  articleList: {
    articleUpper: '',
    articleNext: ''
  },
  articleInfo: {
    'typeId': 0,
    'title': '',
    'articleTypeName': ''
  },
  articleContent: ''
})
const mutations = {


  _queryArticleInfo(state, entity) {
    console.log(entity,'啊啊啊啊')
    state.articleInfo = entity.article
    state.articleList.articleUpper = entity.articleList.articleUpper
    state.articleList.articleNext = entity.articleList.articleNext


    state.articleContent = entity.content
    state.title = entity.article.title
    state.typeId = entity.article.typeId
    state.page = entity.article.page
    state.keywords = entity.article.seoKeywords
    state.description = entity.article.seoDescription
  },
  _queryActicleRank(state, entity) {
    state.articleList = entity.articleList
  },
  _queryActicleCon(state, entity) {
    state.articleList = entity.articleList
  }
}
const actions = {

  async queryArticleInfo(state, link, pageContent) {
    let queryParam = 'link=' + link + '&page.currentPage=1' + '&page.pageSize=10'

    await this.$httpPost('/mainPath/web/article/info', queryParam).then((result) => {

      if (!result.success) {
        return
      }
      state.commit('_queryArticleInfo', result.entity)

    })
  },
  async _queryActicleRank(state) {
    await this.$httpPost('/web/article/ranking').then((result) => {
      if (!result.success) {
        return
      }
      state.commit('_queryActicleRank', result.entity)

    })
  },
  async _queryActicleCon(state) {
    await this.$httpPost('/web/query/same/type/article/list').then((result) => {
      if (!result.success) {
        return
      }
      state.commit('_queryActicleCon', result.entity)

    })
  }
}

const getters = {}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
