

export const state = () => ({
  info:{},
  tabNavigateList:[],
  censusCodeString:'',

})
export const mutations = {
  globalInfo (state, { info,tabNavigateList,censusCodeString }) {
    state.info = info;
    state.tabNavigateList = tabNavigateList;
    state.censusCodeString = censusCodeString;

  },

}
export const getters={

}
export const actions={
  // 获取公用信息
  async nuxtServerInit ({ commit }) {

    try {


      await this.$httpPost(process.env.API_MAIN+'/web/partial','').then((result) =>{


        if (result.success) {
          let entity = result.entity;
          let tabNavigateList = entity.tabNavigateList;
          let censusCodeString = entity.codeMap.censusCodeString;
          //标题
          let _title = entity.websiteMap.title
          //关键字
          let _keywords = entity.websiteMap.keywords
          //描述
          let _description = entity.websiteMap.description
          let info={'title': _title, "keywords": _keywords, "description": _description};
          commit('globalInfo', { "info":info, "tabNavigateList": tabNavigateList, "censusCodeString": censusCodeString });
        }

      })

    } catch (error) {
    }
  }

}
