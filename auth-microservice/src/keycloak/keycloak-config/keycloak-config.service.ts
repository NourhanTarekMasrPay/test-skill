import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KeycloakConfigService {
  constructor(private readonly configService: ConfigService) {}

  get realm(): string {
    return this.configService.get<string>('KEYCLOAK_REALM') || 'myrealm';
  }

  get authServerUrl(): string {
    return this.configService.get<string>('KEYCLOAK_AUTH_URL') || 'http://localhost:8080'; // KEYCLOAK_SERVER_URL ,base URL of your Keycloak authentication server.
  }

  get clientId(): string {
    return this.configService.get<string>('KEYCLOAK_CLIENT_ID') || 'auth-microservice';
  }

  get clientSecret(): string | undefined {
    return this.configService.get<string>('KEYCLOAK_CLIENT_SECRET');
  }

  get publicKeyUrl(): string {
    return `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/certs`;
  }
  
  get tokenUrl(): string {
    return `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/token`;
  }

  get userInfoUrl(): string {
    return `${this.authServerUrl}/realms/${this.realm}/protocol/openid-connect/userinfo`;
  }
}