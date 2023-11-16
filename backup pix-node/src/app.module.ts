import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioServico } from './servicos/usuario.servico';

@Module({
  imports: [],
  controllers: [ AppController, UsuarioController],
  providers: [AppService, UsuarioServico],
})
export class AppModule {}
