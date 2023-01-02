import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.params.user_id;

      const user = this.showUserProfileUseCase.execute({ user_id: id });

      if (user) {
        return response.json(user);
      }
      return response.status(404);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
  }
}

export { ShowUserProfileController };
