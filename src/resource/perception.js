import { Perception } from './'

export default {
  getCcChartsData: params =>
    Perception.get('', {
      params: {
        ...params
      }
    })
}
