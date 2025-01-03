/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scimCreate } from "../funcs/scimCreate.js";
import { scimCreateUser } from "../funcs/scimCreateUser.js";
import { scimDeleteGroup } from "../funcs/scimDeleteGroup.js";
import { scimDeleteUser } from "../funcs/scimDeleteUser.js";
import { scimGetGroup } from "../funcs/scimGetGroup.js";
import { scimGetUser } from "../funcs/scimGetUser.js";
import { scimListGroups } from "../funcs/scimListGroups.js";
import { scimListUsers } from "../funcs/scimListUsers.js";
import { scimReplaceUser } from "../funcs/scimReplaceUser.js";
import { scimUpdateGroup } from "../funcs/scimUpdateGroup.js";
import { scimUpdateUser } from "../funcs/scimUpdateUser.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Scim extends ClientSDK {
  /**
   * List teams via SCIM
   *
   * @remarks
   * SCIM endpoint that lists all Teams (Colloquial for Group in the SCIM protocol)
   */
  async listGroups(
    request: operations.GetScimGroupsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimListGroups(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a team via SCIM
   *
   * @remarks
   * SCIM endpoint to create a new Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role.
   */
  async create(
    request: components.PostV1ScimV2Groups,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a SCIM group
   *
   * @remarks
   * SCIM endpoint that lists a Team (Colloquial for Group in the SCIM protocol)
   */
  async getGroup(
    request: operations.GetScimGroupRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimGetGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a SCIM group
   *
   * @remarks
   * SCIM endpoint to update a Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role, any missing members will be removed from the team.
   */
  async updateGroup(
    request: operations.UpdateScimGroupRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimUpdateGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a SCIM group
   *
   * @remarks
   * SCIM endpoint to delete a Team (Colloquial for Group in the SCIM protocol).
   */
  async deleteGroup(
    request: operations.DeleteScimGroupRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimDeleteGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * List users via SCIM
   *
   * @remarks
   * SCIM endpoint that lists users. This endpoint will display a list of Users currently in the system.
   */
  async listUsers(
    request: operations.GetScimUsersRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimListUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a user via SCIM
   *
   * @remarks
   * SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.
   */
  async createUser(
    request: components.PostV1ScimV2Users,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimCreateUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a SCIM user
   *
   * @remarks
   * SCIM endpoint that lists a User
   */
  async getUser(
    request: operations.GetScimUserRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimGetUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Replace a SCIM user
   *
   * @remarks
   * PUT SCIM endpoint to update a User. This endpoint is used to replace a resource's attributes.
   */
  async replaceUser(
    request: operations.ReplaceScimUserRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimReplaceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a SCIM user
   *
   * @remarks
   * SCIM endpoint to delete a User. This endpoint will deactivate a confirmed User record in our system.
   */
  async deleteUser(
    request: operations.DeleteScimUserRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimDeleteUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a SCIM user
   *
   * @remarks
   * PATCH SCIM endpoint to update a User. This endpoint is used to update a resource's attributes.
   */
  async updateUser(
    request: operations.UpdateScimUserRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scimUpdateUser(
      this,
      request,
      options,
    ));
  }
}
