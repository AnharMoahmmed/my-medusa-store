import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"

export const step1 = createStep(
  "step-1", 
  async () => {
    return new StepResponse(`Hello from step one!` , "123")
  },
  async (id: string | undefined, { container }) => {
  }
);

type WorkflowInput = {
  name: string
}

export const step2 = createStep(
  "step-2", 
  async ({ name }: WorkflowInput) => {
    return new StepResponse(`Hello ${name} from step two!`)
  }
)