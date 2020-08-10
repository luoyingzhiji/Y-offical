

  const state= () => ({
    helpMenuList: {},
    currentId: 0,
    name: '',
    content: '',
  })
  const mutations = {


    _queryHelpMenu(state,helpMenuList) {
      state.helpMenuList = helpMenuList;
    },
    _queryHelpMenuInfo(state,{currentId,name,content}) {
      state.currentId=currentId;
      state.name = name;
      state.content = content;
    },

  }
  const actions = {

    async queryHelpMenu(state) {

      await this.$httpPost(process.env.API_MAIN+'/web/help/center', '').then((result) => {
        if (!result.success) {
          return;
        }

        let helpMenuList=result.entity;
        state.commit("_queryHelpMenu",helpMenuList);
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
