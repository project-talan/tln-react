import getConfigService from './ConfigService'

class AuthService {
  constructor() {
    this.configService = getConfigService();
  }

  isAuthenticated() {
    return !!localStorage.getItem(this.configService.getAuthItemName());
  }

  login(login, password) {
    if (!((login === 'admin@admin.io') && (password === 'admin'))) {
      return Promise.reject(`Invalid login name or/and password`);
    }
    return fetch(
      this.configService.getAuthApiUrl('api', 'v1', 'contacts'),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ login, password })
      }
    )
    .then(this.handleResponse)
    .then(contact => {
      localStorage.setItem(this.configService.getAuthItemName(), JSON.stringify(contact));
      return contact;
    })
    .catch(error => {
      return Promise.reject(`Server communication error`);
    });
  }

  handleResponse(response) {
    return response.text().then(text => { 
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          this.logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }

  logout() {
    localStorage.removeItem(this.configService.getAuthItemName());
  }

}

let service = null;
export default function getAuthService() {
  if (service === null) {
    service = new AuthService();
  }
  return service;
}
