import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user';

@Injectable()
export class UsersService {
    
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ){}

    async findByUser(username: string) {
        return await this.userRepository.findOne({where: {username}});
    }

    findAll(): Promise <User[]> {
        return this.userRepository.find();
    }

    findOne(id: any){
        return this.userRepository.find(id);
    }

    create(body: any){
        const newUser = this.userRepository.create(body);
        return this.userRepository.save(newUser);
    }

    async update(id, body:any){
        const user = await this.userRepository.findOne(id);
        this.userRepository.merge(user, body);
        return this.userRepository.save(user);
    }

    async delete(id){
        await this.userRepository.delete(id);
    }

}