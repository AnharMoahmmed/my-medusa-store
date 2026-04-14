import {
  // other imports...
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { step1, step2 } from "./steps"

type WorkflowInput = {
  name: string
}

 

const myWorkflow = createWorkflow(
  "hello-world",
  function (input: WorkflowInput) {
    const str1 = step1()
    // to pass input
    const str2 = step2(input)

    return new WorkflowResponse({
      message: str2,
    })
  }
)

export default myWorkflow