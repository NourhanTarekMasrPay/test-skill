import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak-config/keycloak-config.service';

@Module({
  providers: [KeycloakConfigService]
})
export class KeycloakModule {}
