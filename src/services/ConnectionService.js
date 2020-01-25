
class ConnectionService {
  constructor(configService) {
    this.configService = configService;
  }
}

export default function createConnectionService(configService) {
  return new ConnectionService(configService);
}
