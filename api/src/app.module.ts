import { name, version } from '../package.json'

import { Module, RequestMethod } from '@nestjs/common'
import { ControllerModule } from './infra/controller/controller.module'
import { LoggerModule } from 'nestjs-pino'
import { randomUUID } from 'node:crypto'
import { UseCasesModule } from './use-cases/use-cases.module'
import { StorageModule } from './infra/storage/storage.module'

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        customLogLevel: (_req, res, err) => {
          if (res.statusCode >= 400 && res.statusCode < 500) {
            return 'warn'
          }

          if (res.statusCode >= 500 || err) {
            return 'error'
          }

          if (res.statusCode >= 300 && res.statusCode < 400) {
            return 'silent'
          }

          return 'info'
        },
        customProps: (req, _res) => {
          const requestId = req.headers['x-request-id'] || randomUUID()
          const correlationId = req.headers['x-correlation-id'] || randomUUID()

          return {
            requestId: requestId,
            correlationId: correlationId,
            serviceVersion: version,
            serviceName: name,
          }
        },
        serializers: {
          req: req => {
            return {
              method: req.method,
              url: req.url,
            }
          },
        },
      },
      exclude: [{ method: RequestMethod.GET, path: '/' }],
    }),
    ControllerModule,
    UseCasesModule,
    StorageModule,
  ],
})
export class AppModule {}
