import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
    users: User[] = [
        {
            id: 1,
            nome:"Yuri", 
            sobrenome:"Rodrigues", 
            endereco:"rua dos testes", 
            email:"yuri@teste.com",
            username:"yuryshadow", 
            password:"1234"
        },
        {
            id: 2, 
            nome:"Yuri2", 
            sobrenome:"Rodrigues2", 
            endereco:"rua dos testes", 
            email:"yuri2@teste.com",
            username:"yuryshadow2", 
            password:"12345"
        },
        {
            id: 3, 
            nome:"Yuri3", 
            sobrenome:"Rodrigues3", 
            endereco:"rua dos testes", 
            email:"yuri3@teste.com",
            username:"yuryshadow3", 
            password:"123456"
        },
    ];
    
    async findOne(username:string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

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
            userArray.endereco = user.endereco;
            userArray.email = user.email;
            userArray.username = user.username;
            userArray.password = user.password;
        }

        return userArray;
    }

    delete(id: number){
        const index = this.users.findIndex((value) => value.id == id);
        this.users.splice(index, 1);
    }
}