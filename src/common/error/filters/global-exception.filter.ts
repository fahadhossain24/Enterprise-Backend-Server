import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { ErrorResponse } from "../interfaces/error-response.interface";
import { ErrorCode } from "../constants/error-code.contant";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        let message = ErrorCode.INTERNAL_SERVER_ERROR;

        if (exception instanceof Error) {
            message = exception.message;
        }

        const errorResponse: ErrorResponse = {
            success: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message,
            timestamp: new Date().toISOString(),
            path: request.url
        }

        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}