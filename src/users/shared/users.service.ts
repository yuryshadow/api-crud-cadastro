import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
    users: User[] = [
        {id: 1, nome:"Yuri", sobrenome:"Rodrigues", email:"yuri@teste.com", endereco:"rua dos testes", senha:"123"},
        {id: 2, nome:"Yuri2", sobrenome:"Rodrigues2", email:"yuri2@teste.com", endereco:"rua dos testes", senha:"123"},
        {id: 3, nome:"Yuri3", sobrenome:"Rodrigues3", email:"yuri3@teste.com", endereco:"rua dos testes", senha:"123"},
    ];
    
    getAll(){
        return this.users;
    }
    
    getById(id: number){
        const user = this.users.find((value) => value.id == id);
        return user;
    }   

    create(user: User){
        let lastId = 0;
        if (this.users.length > 0) {
            lastId = this.users[this.users.length - 1].id;
        }

        user.id = lastId + 1;
        this.users.push(user);

        return user;
    }
    
    update(user: User){
        const userArray = this.getById(user.id);
        if(userArray){
            userArray.nome = user.nome;
            userArray.sobrenome = user.sobrenome;
            userArray.email = user.email;
            userArray.endereco = user.endereco;
            userArray.senha = user.senha;
        }

        return userArray;
    }

    delete(id: number){
        const index = this.users.findIndex((value) => value.id == id);
        this.users.splice(index, 1);
    }
}