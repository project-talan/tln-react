
class AuthService {
  constructor(configService, connectionService) {
    this.configService = configService;
    this.connectionService = connectionService;
  }

  isAuthenticated() {
    return !!localStorage.getItem(this.configService.getAuthItemName());
  }

  login(login, password) {
    if (!((login === 'admin@admin.io') && (password === 'admin'))) {
      return Promise.reject(`Invalid login name or/and password`);
    }
    return this.connectionService.post(
      ['contacts'],
      { login: login, password: password })
    .then(this.handleResponse)
    .then(contact => {
      localStorage.setItem(this.configService.getAuthItemName(), JSON.stringify(contact));
      return contact;
    })
    .catch(error => {
      if (error === 401){
        this.logout();
        return Promise.reject('Unauthorized');
      }
      return Promise.reject(error);
    });
  }

  logout() {
    localStorage.removeItem(this.configService.getAuthItemName());
  }

}

export default function createAuthService(configService, connectionService) {
  return new AuthService(configService, connectionService);
}
