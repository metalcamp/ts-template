import {getConnection} from "typeorm";
import {User} from "../entity/User";

class UserRepository {
    public getAll(): Promise<User[]> {
        return getConnection()
            .getRepository(User)
            .createQueryBuilder('user')
            .orderBy({user: 'ASC'})
            .getMany();
    }
}

export const userRepository = new UserRepository();
