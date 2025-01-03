/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { runbooksExecutionsDelete } from "../funcs/runbooksExecutionsDelete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Executions extends ClientSDK {
  /**
   * Terminate a runbook execution
   *
   * @remarks
   * Terminates a runbook execution, preventing any further steps from being executed
   */
  async delete(
    request: operations.DeleteRunbookExecutionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(runbooksExecutionsDelete(
      this,
      request,
      options,
    ));
  }
}
