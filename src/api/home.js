import HTTP from '@/service/axios'

export const homeApi = {
  getHomeList: (json) => HTTP.request('/apic/home', {
    params: json
  })
}
