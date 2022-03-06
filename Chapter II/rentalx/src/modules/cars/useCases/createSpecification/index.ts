import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }