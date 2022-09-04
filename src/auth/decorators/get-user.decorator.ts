import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';



export const GetUser = createParamDecorator(
    ( data: string, ctx: ExecutionContext ) => {

        const req = ctx.switchToHttp().getRequest();
        const usuario = req.user;

        if ( !usuario )
            throw new InternalServerErrorException('Usuario no encontrado (request)');
        
        return ( !data ) 
            ? usuario 
            : usuario[data];
        
    }
);