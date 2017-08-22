import nprogress from 'nprogress'

class Interceptor {
  constructor(
    {
      progress = false,
      configure = {},
      beforeRequest = [],
      afterResponse = []
    } = {}
  ) {
    progress && this.progressInit(configure)

    this.beforeRequest = [
      config => {
        progress && this.progressStart()
        if (beforeRequest[0]) {
          beforeRequest[0](config)
        } else {
          return config
        }
      },
      error => {
        progress && this.progressStop()
        if (beforeRequest[1]) {
          beforeRequest[1](error)
        } else {
          return Promise.reject(error)
        }
      }
    ]

    this.afterResponse = [
      response => {
        progress && this.progressStop()
        if (afterResponse[0]) {
          afterResponse[0](response)
        } else {
          if (response.data.status.code === 16161) {
            const error = response.data.status
            return Promise.reject(error)
          }
          if (response.data.status.code !== 1) {
            const error = response.data.status
            return Promise.reject(error)
          } else {
            return response
          }
        }
      },
      ...error => {
        progress && this.progressStop()
        if (afterResponse[1]) {
          afterResponse[1](error)
        } else {
          return Promise.reject(error)
        }
      }
    ]
  }

  progressStart() {
    nprogress.start()
  }

  progressStop() {
    nprogress.done()
  }

  progressInit(configure) {
    nprogress.configure({
      showSpinner: false,
      ...configure
    })
  }
}

const BASE_URL = '/api'


export { BASE_URL }
export default Interceptor
