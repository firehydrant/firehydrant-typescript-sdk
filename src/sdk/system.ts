/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { systemPing } from "../funcs/systemPing.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class System extends ClientSDK {
  /**
   * Check API connectivity
   *
   * @remarks
   * Simple endpoint to verify your API connection is working
   */
  async ping(
    options?: RequestOptions,
  ): Promise<components.PongEntity> {
    return unwrapAsync(systemPing(
      this,
      options,
    ));
  }
}
