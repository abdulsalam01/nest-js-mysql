import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}
    
    getUserData() {
        let data = {
            'name': 'Abdul Salam',
            'email': 'abdulsalam121196@gmail.com'
        };

        return {'success': true, 'data': data};
    }
    
    // get from api
    // get all data
    async getUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    // get data by id
    async getUser(id: string): Promise<UserEntity[]> {
        return await this.userRepository.find({
            select: ['npm', 'nama', 'alamat', 'email_orangtua'],
            where: [{"npm": id}]
        });
    }

    // create user
    async createUser(user: UserEntity) {
        user.npm = "2016110063";
        user.nama = "Tresna Budi";
        user.alamat = "Otista";
        user.email_orangtua = "tresna@gmail.com";
        user.sandi = "123456";
        //
        return this.userRepository.save(user);
        // this.userRepository.create(user);
    }

    // update user
    async updateUser(user: UserEntity) {
        this.userRepository.save(user);
    }
}
