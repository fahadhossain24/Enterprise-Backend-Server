export class ErrorResponsePresenter {
    static present(data: {
        statusCode: number;
        message: string;
        path: string;
    }) {
        return {
            success: false,
            statusCode: data.statusCode,
            message: data.message,
            timestamp: new Date().toISOString(),
            path: data.path
        };
    }
}