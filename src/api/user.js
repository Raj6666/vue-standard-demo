import HTTP from '@/service/axios'

export const userApi = {
  getUser: (json) => HTTP.request('/apic/user', {
    params: json
  })
}
