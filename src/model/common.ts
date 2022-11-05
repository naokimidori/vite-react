/**
 * 公用model
 */

import _modelExtend from 'dva-model-extend'
import { DvaModel } from '../types/dvaModel'

const commonModel = {
  reducers: {
    updateState (state: any, { payload }: any) {
      return {
        ...state,
        ...payload
      }
    },
    error (state: any, { payload }: any) {
      return {
        ...state,
        error: payload
      }
    }
  }
}

const modelExtend = <T>(model: DvaModel<T>): DvaModel<T> => _modelExtend(commonModel, model)

export {
  modelExtend
}
