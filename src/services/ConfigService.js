
class ConfigService {
  // constructor() {
  // }

  getAuthApiUrl(...args) {
    return false?'http://httpstat.us/200':[process.env.REACT_APP_AUTH_API_URL].concat(args).join('/');
  }

  getAuthItemName() {
    return 'org.talan.react.auth';
  }

}

let service = null;
export default function getConfigService() {
  if (service === null) {
    service = new ConfigService();
  }
  return service;
}
