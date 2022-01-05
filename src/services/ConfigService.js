
class ConfigService {
  // constructor() {
  // }

  getAuthApiUrl(...args) {
    return true?'https://httpstat.us/200':[process.env.REACT_APP_AUTH_API_URL].concat(args).join('/');
  }

  getAuthItemName() {
    return 'org.talan.react.auth';
  }

}

export default function createConfigService() {
  return new ConfigService();
}
