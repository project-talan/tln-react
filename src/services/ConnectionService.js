
class ConnectionService {
  constructor(configService) {
    this.configService = configService;
    this.apiEndpoint = ['api', 'v1'];
  }

  getAuthHeader(){
    return { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InZsYWR5c2xhdi5rdXJtYXoiLCJ0b2tlbiI6IkpvaG4gRG9lIn0.1CsTyspUX-gQNKaKcnaXi4VEQNICvBDTkUifDhSLlh8' };
  }

  post(urlParts, body) {
    return fetch(
      this.configService.getAuthApiUrl(...this.apiEndpoint, ...urlParts),
      {
        method: 'POST',
        headers: { ...this.getAuthHeader(), 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
      }
    )
    .then(this.handleResponse)
    .catch(error => {
      return Promise.reject(`Server communication error`);
    });
  }

  handleResponse(response) {
    return response.text().then(text => { 
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          return Promise.reject(response.status);
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }

}

export default function createConnectionService(configService) {
  return new ConnectionService(configService);
}
