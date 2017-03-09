import _ from 'lodash'

export default {
  state : {
    isDialogActive : false,
  },
  mutations:{
    toggleSelectDialog(state){
      state.isDialogActive = !state.isDialogActive
    }
  }
}
