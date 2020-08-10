const state = () => ({
  articleTypeList:[],
  articleList:[],
  pageContent:{},
  typeId:0,
});

const mutations = {
  _queryArticle(state,{typeId,articleList,articleTypeList,pageContent}) {
    state.articleList=articleList;
    state.pageContent = pageContent;

    state.typeId=typeId;
    if (state.articleTypeList.length == 0) {

      state.articleTypeList = articleTypeList;

    }

  },


}
const actions = {
  async queryArticleIndex(state,{typeId,pageNumber}) {
    let queryParam ='queryArticle.typeId=' + typeId +  '&page.currentPage=' + pageNumber ;
    await this.$httpPost('/mainPath/web/article/index', queryParam).then((result) => {
      if (result.success) {

        let entity = result.entity;

        let articleList = entity.articleList;
        let articleTypeList = [];
        let pageContent = entity.page;
        if (entity.page.currentPage == 1) {
          articleTypeList = entity.articleTypeList;
        }
       state.commit("_queryArticle",{"typeId":typeId,"articleList":articleList,"articleTypeList":articleTypeList,"pageContent":pageContent});
      }
    });

  },







}

const getters={

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
