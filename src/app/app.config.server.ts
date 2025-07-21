import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { config as baseConfig } from './app.config';  // ✅ FIXED
import { serverRoutes } from './app.routes.server';

export const config: ApplicationConfig = {
  ...baseConfig,
  providers: [
    ...(baseConfig.providers || []),
    provideServerRendering(),
    provideServerRouting(serverRoutes),
  ],
};
