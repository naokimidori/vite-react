interface IState {
  name: string
}

const initialState: IState = {
  name: 'index model'
}

export default {
  namespace: 'index',
  state: initialState,
  reducers: {
    setter (state: IState, action: any) {
      Object.assign(state, action.payload)
    }
  },
  effects: {

  },
  subscriptions: {

  }
}
