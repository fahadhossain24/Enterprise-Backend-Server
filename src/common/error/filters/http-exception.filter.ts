import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { Response, Request } from "express";
import { ErrorResponsePresenter } from "../presenters/error-response.presenter";
import { ErrorCode } from "../constants/error-code.contant";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception.getStatus();

        const exceptionResponse = exception.getResponse();
        let message: string;

        if (typeof exceptionResponse === 'string') {
            message = exceptionResponse;
        } else {
            message = (exceptionResponse as any).message ?? exception.message ?? ErrorCode.UNEXPECTED_ERROR;
        }

        const errorResponse = ErrorResponsePresenter.present({
            statusCode: status,
            message,
            path: request.url
        });

        response.status(status).json(errorResponse);
    }
}