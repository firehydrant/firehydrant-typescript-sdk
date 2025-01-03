/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsStatuspageListConnections } from "../funcs/integrationsStatuspageListConnections.js";
import { integrationsStatuspageListPages } from "../funcs/integrationsStatuspageListPages.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class FirehydrantTypescriptSDKStatuspage extends ClientSDK {
  /**
   * List Statuspage connections
   *
   * @remarks
   * Lists the available and configured Statuspage integrations connections for the authenticated organization.
   */
  async listConnections(
    request: operations.ListStatuspageConnectionsRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsStatuspageConnectionEntityPaginated> {
    return unwrapAsync(integrationsStatuspageListConnections(
      this,
      request,
      options,
    ));
  }

  /**
   * List StatusPage pages for a connection
   */
  async listPages(
    request: operations.ListStatuspagePagesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsStatuspageListPages(
      this,
      request,
      options,
    ));
  }
}
