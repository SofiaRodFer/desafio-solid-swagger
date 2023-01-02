import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser) {
      throw new Error("User not found");
    }

    if (!currentUser.admin) {
      throw new Error("User is not an administrator");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
