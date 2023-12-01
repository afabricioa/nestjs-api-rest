import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFoundError } from 'src/error';

@Catch(NotFoundError)
export class NotFoundErrorFilter implements ExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    //captura os erros da classe NotFoundError e converte para a mensagem ser retornada na resposta de acordo com a colocada aqui
    //não vai mais ser o erro padrão 500
    response.status(404).json({
      statusCode: 404,
      message: exception.message
    })
  }
}
