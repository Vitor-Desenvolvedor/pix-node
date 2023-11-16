import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello';
  }
}


// ********************************************
/*
export class StudantsService {

  public getStudents(): any {

    var dados = '["Ronei","Deivid", "Vinicius", "Tiago"]';
    var convertido = JSON.parse(dados);

    for(let i=0; i < convertido.length; i++){

      if(convertido[i]=='Tiago'){
        console.log("passou aqui");
      }
    }
  }
} */


export class StudantsService {

  public getStudents(): any {

    var dados = '["Ronei","Deivid", "Vinicius", "Tiago"]';
    var convertido = JSON.parse(dados);

    for(let i=0; i < convertido.length; i++){

      if(convertido[i]=='Tiago'){
        console.log("passou aqui");
      }
    }
  }
}

