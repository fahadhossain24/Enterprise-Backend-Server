import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
@Module({
    imports: [
        LoggerModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const isDev = config.getOrThrow('NODE_ENV') === 'development';
                return {
                    pinoHttp: {
                        // Log level by environment
                        level: isDev ? 'debug' : 'info',
                        // Dev: pretty-printed, colourised, single-line
                        // Prod: raw JSON (no transport = stdout JSON)
                        transport: isDev
                            ? {
                                target: 'pino-pretty',
                                options: { colorize: true, singleLine: true },
                            }
                            : undefined,
                        // Never log sensitive headers into your storage
                        redact: ['req.headers.authorization', 'req.headers.cookie'],
                        // Control exactly which request/response fields are logged
                        serializers: {
                            req: (req) => ({
                                method: req.method,
                                url: req.url,
                                requestId: req.id,
                            }),
                            res: (res) => ({
                                statusCode: res.statusCode,
                            }),
                        },
                    },
                };
            },
        }),
    ],
})
export class AppLoggerModule { }