# firehydrant-typescript-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *firehydrant-typescript-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=firehydrant-typescript-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

FireHydrant API: The FireHydrant API is based around REST. It uses Bearer token authentication and returns JSON responses. You can use the FireHydrant API to configure integrations, define incidents, and set up webhooks--anything you can do on the FireHydrant UI.

* [Dig into our API endpoints](https://developers.firehydrant.io/docs/api)
* [View your bot users](https://app.firehydrant.io/organizations/bots)

## Base API endpoint

[https://api.firehydrant.io/v1](https://api.firehydrant.io/v1)

## Current version

v1

## Authentication

All requests to the FireHydrant API require an `Authorization` header with the value set to `Bearer {token}`. FireHydrant supports bot tokens to act on behalf of a computer instead of a user's account. This prevents integrations from breaking when people leave your organization or their token is revoked. See the Bot tokens section (below) for more information on this.

An example of a header to authenticate against FireHydrant would look like:

```
Authorization: Bearer fhb-thisismytoken
```

## Bot tokens

To access the FireHydrant API, you must authenticate with a bot token. (You must have owner permissions on your organization to see bot tokens.) Bot users allow you to interact with the FireHydrant API by using token-based authentication. To create bot tokens, log in to your organization and refer to the **Bot users** [page](https://app.firehydrant.io/organizations/bots).

Bot tokens enable you to create a bot that has no ties to any user. Normally, all actions associated with an API token are associated with the user who created it. Bot tokens attribute all actions to the bot user itself. This way, all data associated with the token actions can be performed against the FireHydrant API without a user.

Every request to the API is authenticated unless specified otherwise.

### Rate Limiting

Currently, requests made with bot tokens are rate limited on a per-account level. If your account has multiple bot token then the rate limit is shared across all of them. As of February 7th, 2023, the rate limit is at least 50 requests per account every 10 seconds, or 300 requests per minute.

Rate limited responses will be served with a `429` status code and a JSON body of:

```json
{"error": "rate limit exceeded"}
```
and headers of:
```
"RateLimit-Limit" -> the maximum number of requests in the rate limit pool
"Retry-After" -> the number of seconds to wait before trying again
```

## How lists are returned

API lists are returned as arrays. A paginated entity in FireHydrant will return two top-level keys in the response object: a data key and a pagination key.

### Paginated requests

The `data` key is returned as an array. Each item in the array includes all of the entity data specified in the API endpoint. (The per-page default for the array is 20 items.)

Pagination is the second key (`pagination`) returned in the overall response body. It includes medtadata around the current page, total count of items, and options to go to the next and previous page. All of the specifications returned in the pagination object are available as URL parameters. So if you want to specify, for example, going to the second page of a response, you can send a request to the same endpoint but pass the URL parameter **page=2**.

For example, you might request **https://api.firehydrant.io/v1/environments/** to retrieve environments data. The JSON returned contains the above-mentioned data section and pagination section. The data section includes various details about an incident, such as the environment name, description, and when it was created.

```
{
  "data": [
    {
      "id": "f8125cf4-b3a7-4f88-b5ab-57a60b9ed89b",
      "name": "Production - GCP",
      "description": "",
      "created_at": "2021-02-17T20:02:10.679Z"
    },
    {
      "id": "a69f1f58-af77-4708-802d-7e73c0bf261c",
      "name": "Staging",
      "description": "",
      "created_at": "2021-04-16T13:41:59.418Z"
    }
  ],
  "pagination": {
    "count": 2,
    "page": 1,
    "items": 2,
    "pages": 1,
    "last": 1,
    "prev": null,
    "next": null
  }
}
```

To request the second page, you'd request the same endpoint with the additional query parameter of `page` in the URL:

```
GET https://api.firehydrant.io/v1/environments?page=2
```

If you need to modify the number of records coming back from FireHydrant, you can use the `per_page` parameter (max is 200):

```
GET https://api.firehydrant.io/v1/environments?per_page=50
```
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [firehydrant-typescript-sdk](#firehydrant-typescript-sdk)
  * [Base API endpoint](#base-api-endpoint)
  * [Current version](#current-version)
  * [Authentication](#authentication)
  * [Bot tokens](#bot-tokens)
  * [How lists are returned](#how-lists-are-returned)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add firehydrant-typescript-sdk
```

### PNPM

```bash
pnpm add firehydrant-typescript-sdk
```

### Bun

```bash
bun add firehydrant-typescript-sdk
```

### Yarn

```bash
yarn add firehydrant-typescript-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Firehydrant": {
      "command": "npx",
      "args": [
        "-y", "--package", "firehydrant-typescript-sdk",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Firehydrant": {
      "command": "npx",
      "args": [
        "-y", "--package", "firehydrant-typescript-sdk",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package firehydrant-typescript-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable  |
| -------- | ------ | ------- | --------------------- |
| `apiKey` | apiKey | API key | `FIREHYDRANT_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accountSettings](docs/sdks/accountsettings/README.md)

* [ping](docs/sdks/accountsettings/README.md#ping) - Check API connectivity
* [listEntitlements](docs/sdks/accountsettings/README.md#listentitlements) - List entitlements
* [pingNoauth](docs/sdks/accountsettings/README.md#pingnoauth) - Check API connectivity
* [getBootstrap](docs/sdks/accountsettings/README.md#getbootstrap) - Get initial application configuration
* [getAiPreferences](docs/sdks/accountsettings/README.md#getaipreferences) - Get AI preferences
* [updateAiPreferences](docs/sdks/accountsettings/README.md#updateaipreferences) - Update AI preferences

### [alerts](docs/sdks/alerts/README.md)

* [listIncidentAlerts](docs/sdks/alerts/README.md#listincidentalerts) - List alerts for an incident
* [createIncidentAlert](docs/sdks/alerts/README.md#createincidentalert) - Attach an alert to an incident
* [updateIncidentAlertPrimary](docs/sdks/alerts/README.md#updateincidentalertprimary) - Set an alert as primary for an incident
* [deleteIncidentAlert](docs/sdks/alerts/README.md#deleteincidentalert) - Remove an alert from an incident
* [listAlerts](docs/sdks/alerts/README.md#listalerts) - List alerts
* [getAlert](docs/sdks/alerts/README.md#getalert) - Get an alert
* [listProcessingLogEntries](docs/sdks/alerts/README.md#listprocessinglogentries) - List alert processing log entries
* [updateSignalsAlert](docs/sdks/alerts/README.md#updatesignalsalert) - Update a Signal alert

### [audiences](docs/sdks/audiences/README.md)

* [listAudiences](docs/sdks/audiences/README.md#listaudiences) - List audiences
* [createAudience](docs/sdks/audiences/README.md#createaudience) - Create audience
* [getAudience](docs/sdks/audiences/README.md#getaudience) - Get audience
* [archiveAudience](docs/sdks/audiences/README.md#archiveaudience) - Archive audience
* [updateAudience](docs/sdks/audiences/README.md#updateaudience) - Update audience
* [restoreAudience](docs/sdks/audiences/README.md#restoreaudience) - Restore audience
* [getMemberDefaultAudience](docs/sdks/audiences/README.md#getmemberdefaultaudience) - Get default audience
* [setMemberDefaultAudience](docs/sdks/audiences/README.md#setmemberdefaultaudience) - Set default audience
* [getAudienceSummary](docs/sdks/audiences/README.md#getaudiencesummary) - Get latest summary
* [generateAudienceSummary](docs/sdks/audiences/README.md#generateaudiencesummary) - Generate summary
* [listAudienceSummaries](docs/sdks/audiences/README.md#listaudiencesummaries) - List audience summaries

### [auditEvents](docs/sdks/auditevents/README.md)

* [listAuditEvents](docs/sdks/auditevents/README.md#listauditevents) - List audit events
* [getAuditEvent](docs/sdks/auditevents/README.md#getauditevent) - Get a single audit event

### [callRoutes](docs/sdks/callroutes/README.md)

* [listTeamCallRoutes](docs/sdks/callroutes/README.md#listteamcallroutes) - List call routes for a team
* [createTeamCallRoute](docs/sdks/callroutes/README.md#createteamcallroute) - Create a call route for a team
* [listCallRoutes](docs/sdks/callroutes/README.md#listcallroutes) - List call routes
* [getCallRoute](docs/sdks/callroutes/README.md#getcallroute) - Retrieve a call route
* [deleteCallRoute](docs/sdks/callroutes/README.md#deletecallroute) - Delete a call route
* [updateCallRoute](docs/sdks/callroutes/README.md#updatecallroute) - Update a call route

### [catalogEntries](docs/sdks/catalogentries/README.md)

* [listEnvironments](docs/sdks/catalogentries/README.md#listenvironments) - List environments
* [createEnvironment](docs/sdks/catalogentries/README.md#createenvironment) - Create an environment
* [getEnvironment](docs/sdks/catalogentries/README.md#getenvironment) - Get an environment
* [deleteEnvironment](docs/sdks/catalogentries/README.md#deleteenvironment) - Archive an environment
* [updateEnvironment](docs/sdks/catalogentries/README.md#updateenvironment) - Update an environment
* [listServices](docs/sdks/catalogentries/README.md#listservices) - List services
* [createService](docs/sdks/catalogentries/README.md#createservice) - Create a service
* [createServiceLinks](docs/sdks/catalogentries/README.md#createservicelinks) - Create multiple services linked to external services
* [getService](docs/sdks/catalogentries/README.md#getservice) - Get a service
* [deleteService](docs/sdks/catalogentries/README.md#deleteservice) - Delete a service
* [updateService](docs/sdks/catalogentries/README.md#updateservice) - Update a service
* [getServiceDependencies](docs/sdks/catalogentries/README.md#getservicedependencies) - List dependencies for a service
* [listServiceAvailableUpstreamDependencies](docs/sdks/catalogentries/README.md#listserviceavailableupstreamdependencies) - List available upstream service dependencies
* [listServiceAvailableDownstreamDependencies](docs/sdks/catalogentries/README.md#listserviceavailabledownstreamdependencies) - List available downstream service dependencies
* [deleteServiceLink](docs/sdks/catalogentries/README.md#deleteservicelink) - Delete a service link
* [createServiceChecklistResponse](docs/sdks/catalogentries/README.md#createservicechecklistresponse) - Record a response for a checklist item
* [createServiceDependency](docs/sdks/catalogentries/README.md#createservicedependency) - Create a service dependency
* [getServiceDependency](docs/sdks/catalogentries/README.md#getservicedependency) - Get a service dependency
* [deleteServiceDependency](docs/sdks/catalogentries/README.md#deleteservicedependency) - Delete a service dependency
* [updateServiceDependency](docs/sdks/catalogentries/README.md#updateservicedependency) - Update a service dependency
* [listFunctionalities](docs/sdks/catalogentries/README.md#listfunctionalities) - List functionalities
* [createFunctionality](docs/sdks/catalogentries/README.md#createfunctionality) - Create a functionality
* [getFunctionality](docs/sdks/catalogentries/README.md#getfunctionality) - Get a functionality
* [deleteFunctionality](docs/sdks/catalogentries/README.md#deletefunctionality) - Archive a functionality
* [updateFunctionality](docs/sdks/catalogentries/README.md#updatefunctionality) - Update a functionality
* [listFunctionalityServices](docs/sdks/catalogentries/README.md#listfunctionalityservices) - List services for a functionality
* [listUserOwnedServices](docs/sdks/catalogentries/README.md#listuserownedservices) - List services owned by a user's teams
* [listInfrastructures](docs/sdks/catalogentries/README.md#listinfrastructures) - Lists functionality, service and environment objects
* [refreshCatalog](docs/sdks/catalogentries/README.md#refreshcatalog) - Refresh a service catalog
* [ingestCatalogData](docs/sdks/catalogentries/README.md#ingestcatalogdata) - Ingest service catalog data

### [changes](docs/sdks/changes/README.md)

* [listChanges](docs/sdks/changes/README.md#listchanges) - List changes
* [createChange](docs/sdks/changes/README.md#createchange) - Create a new change entry
* [deleteChange](docs/sdks/changes/README.md#deletechange) - Archive a change entry
* [updateChange](docs/sdks/changes/README.md#updatechange) - Update a change entry
* [listChangeIdentities](docs/sdks/changes/README.md#listchangeidentities) - List identities for a change entry
* [createChangeIdentity](docs/sdks/changes/README.md#createchangeidentity) - Create an identity for a change entry
* [deleteChangeIdentity](docs/sdks/changes/README.md#deletechangeidentity) - Delete an identity from a change entry
* [updateChangeIdentity](docs/sdks/changes/README.md#updatechangeidentity) - Update an identity for a change entry
* [listChangeEvents](docs/sdks/changes/README.md#listchangeevents) - List change events
* [createChangeEvent](docs/sdks/changes/README.md#createchangeevent) - Create a change event
* [getChangeEvent](docs/sdks/changes/README.md#getchangeevent) - Get a change event
* [deleteChangeEvent](docs/sdks/changes/README.md#deletechangeevent) - Delete a change event
* [updateChangeEvent](docs/sdks/changes/README.md#updatechangeevent) - Update a change event
* [listChangeTypes](docs/sdks/changes/README.md#listchangetypes) - List change types

### [communication](docs/sdks/communication/README.md)

* [listStatusUpdateTemplates](docs/sdks/communication/README.md#liststatusupdatetemplates) - List status update templates
* [createStatusUpdateTemplate](docs/sdks/communication/README.md#createstatusupdatetemplate) - Create a status update template
* [getStatusUpdateTemplate](docs/sdks/communication/README.md#getstatusupdatetemplate) - Get a status update template
* [deleteStatusUpdateTemplate](docs/sdks/communication/README.md#deletestatusupdatetemplate) - Delete a status update template
* [updateStatusUpdateTemplate](docs/sdks/communication/README.md#updatestatusupdatetemplate) - Update a status update template

### [conversations](docs/sdks/conversations/README.md)

* [getVoteStatus](docs/sdks/conversations/README.md#getvotestatus) - Get votes
* [updateVote](docs/sdks/conversations/README.md#updatevote) - Update votes
* [deleteCommentReaction](docs/sdks/conversations/README.md#deletecommentreaction) - Delete a reaction from a conversation comment
* [listCommentReactions](docs/sdks/conversations/README.md#listcommentreactions) - List reactions for a conversation comment
* [createCommentReaction](docs/sdks/conversations/README.md#createcommentreaction) - Create a reaction for a conversation comment
* [getComment](docs/sdks/conversations/README.md#getcomment) - Get a conversation comment
* [deleteComment](docs/sdks/conversations/README.md#deletecomment) - Archive a conversation comment
* [updateComment](docs/sdks/conversations/README.md#updatecomment) - Update a conversation comment
* [listComments](docs/sdks/conversations/README.md#listcomments) - List comments for a conversation
* [createComment](docs/sdks/conversations/README.md#createcomment) - Create a conversation comment


### [incidents](docs/sdks/incidents/README.md)

* [listIncidents](docs/sdks/incidents/README.md#listincidents) - List incidents
* [createIncident](docs/sdks/incidents/README.md#createincident) - Create an incident
* [getIncidentChannel](docs/sdks/incidents/README.md#getincidentchannel) - Get chat channel information for an incident
* [closeIncident](docs/sdks/incidents/README.md#closeincident) - Close an incident
* [resolveIncident](docs/sdks/incidents/README.md#resolveincident) - Resolve an incident
* [getIncident](docs/sdks/incidents/README.md#getincident) - Get an incident
* [deleteIncident](docs/sdks/incidents/README.md#deleteincident) - Archive an incident
* [updateIncident](docs/sdks/incidents/README.md#updateincident) - Update an incident
* [unarchiveIncident](docs/sdks/incidents/README.md#unarchiveincident) - Unarchive an incident
* [bulkUpdateIncidentMilestones](docs/sdks/incidents/README.md#bulkupdateincidentmilestones) - Update milestone times
* [listIncidentMilestones](docs/sdks/incidents/README.md#listincidentmilestones) - List incident milestones
* [listIncidentChangeEvents](docs/sdks/incidents/README.md#listincidentchangeevents) - List related changes on an incident
* [createIncidentChangeEvent](docs/sdks/incidents/README.md#createincidentchangeevent) - Add a related change to an incident
* [updateIncidentChangeEvent](docs/sdks/incidents/README.md#updateincidentchangeevent) - Update a change attached to an incident
* [listIncidentStatusPages](docs/sdks/incidents/README.md#listincidentstatuspages) - List status pages for an incident
* [createIncidentStatusPage](docs/sdks/incidents/README.md#createincidentstatuspage) - Add a status page to an incident
* [listIncidentLinks](docs/sdks/incidents/README.md#listincidentlinks) - List links on an incident
* [createIncidentLink](docs/sdks/incidents/README.md#createincidentlink) - Add a link to an incident
* [updateIncidentLink](docs/sdks/incidents/README.md#updateincidentlink) - Update the external incident link
* [deleteIncidentLink](docs/sdks/incidents/README.md#deleteincidentlink) - Remove a link from an incident
* [updateTranscriptAttribution](docs/sdks/incidents/README.md#updatetranscriptattribution) - Update the attribution of a transcript
* [listTranscriptEntries](docs/sdks/incidents/README.md#listtranscriptentries) - Lists all of the messages in the incident's transcript
* [deleteTranscriptEntry](docs/sdks/incidents/README.md#deletetranscriptentry) - Delete a transcript from an incident
* [listIncidentConferenceBridges](docs/sdks/incidents/README.md#listincidentconferencebridges) - Retrieve all conference bridges for an incident
* [getConferenceBridgeTranslation](docs/sdks/incidents/README.md#getconferencebridgetranslation) - Retrieve the translations for a specific conference bridge
* [listSimilarIncidents](docs/sdks/incidents/README.md#listsimilarincidents) - List similar incidents
* [listIncidentAttachments](docs/sdks/incidents/README.md#listincidentattachments) - List attachments for an incident
* [createIncidentAttachment](docs/sdks/incidents/README.md#createincidentattachment) - Add an attachment to the incident timeline
* [listIncidentEvents](docs/sdks/incidents/README.md#listincidentevents) - List events for an incident
* [getIncidentEvent](docs/sdks/incidents/README.md#getincidentevent) - Get an incident event
* [deleteIncidentEvent](docs/sdks/incidents/README.md#deleteincidentevent) - Delete an incident event
* [updateIncidentEvent](docs/sdks/incidents/README.md#updateincidentevent) - Update an incident event
* [updateIncidentImpactPut](docs/sdks/incidents/README.md#updateincidentimpactput) - Update impacts for an incident
* [updateIncidentImpactPatch](docs/sdks/incidents/README.md#updateincidentimpactpatch) - Update impacts for an incident
* [listIncidentImpacts](docs/sdks/incidents/README.md#listincidentimpacts) - List impacted infrastructure for an incident
* [createIncidentImpact](docs/sdks/incidents/README.md#createincidentimpact) - Add impacted infrastructure to an incident
* [deleteIncidentImpact](docs/sdks/incidents/README.md#deleteincidentimpact) - Remove impacted infrastructure from an incident
* [createIncidentNote](docs/sdks/incidents/README.md#createincidentnote) - Add a note to an incident
* [updateIncidentNote](docs/sdks/incidents/README.md#updateincidentnote) - Update a note
* [createIncidentChatMessage](docs/sdks/incidents/README.md#createincidentchatmessage) - Add a chat message to an incident
* [deleteIncidentChatMessage](docs/sdks/incidents/README.md#deleteincidentchatmessage) - Delete a chat message from an incident
* [updateIncidentChatMessage](docs/sdks/incidents/README.md#updateincidentchatmessage) - Update a chat message on an incident
* [listIncidentRoleAssignments](docs/sdks/incidents/README.md#listincidentroleassignments) - List incident assignees
* [createIncidentRoleAssignment](docs/sdks/incidents/README.md#createincidentroleassignment) - Assign a user to an incident
* [deleteIncidentRoleAssignment](docs/sdks/incidents/README.md#deleteincidentroleassignment) - Unassign a user from an incident
* [createIncidentTeamAssignment](docs/sdks/incidents/README.md#createincidentteamassignment) - Assign a team to an incident
* [deleteIncidentTeamAssignment](docs/sdks/incidents/README.md#deleteincidentteamassignment) - Unassign a team from an incident
* [getIncidentUser](docs/sdks/incidents/README.md#getincidentuser) - Get the current user's incident role
* [getIncidentRelationships](docs/sdks/incidents/README.md#getincidentrelationships) - List incident relationships
* [listScheduledMaintenances](docs/sdks/incidents/README.md#listscheduledmaintenances) - List scheduled maintenance events
* [createScheduledMaintenance](docs/sdks/incidents/README.md#createscheduledmaintenance) - Create a scheduled maintenance event
* [getScheduledMaintenance](docs/sdks/incidents/README.md#getscheduledmaintenance) - Get a scheduled maintenance event
* [deleteScheduledMaintenance](docs/sdks/incidents/README.md#deletescheduledmaintenance) - Delete a scheduled maintenance event
* [updateScheduledMaintenance](docs/sdks/incidents/README.md#updatescheduledmaintenance) - Update a scheduled maintenance event
* [getAiIncidentSummaryVoteStatus](docs/sdks/incidents/README.md#getaiincidentsummaryvotestatus) - Get the current user's vote status for an AI-generated incident summary
* [voteAiIncidentSummary](docs/sdks/incidents/README.md#voteaiincidentsummary) - Vote on an AI-generated incident summary

### [incidentSettings](docs/sdks/incidentsettings/README.md)

* [listIncidentRoles](docs/sdks/incidentsettings/README.md#listincidentroles) - List incident roles
* [createIncidentRole](docs/sdks/incidentsettings/README.md#createincidentrole) - Create an incident role
* [getIncidentRole](docs/sdks/incidentsettings/README.md#getincidentrole) - Get an incident role
* [deleteIncidentRole](docs/sdks/incidentsettings/README.md#deleteincidentrole) - Archive an incident role
* [updateIncidentRole](docs/sdks/incidentsettings/README.md#updateincidentrole) - Update an incident role
* [validateIncidentTags](docs/sdks/incidentsettings/README.md#validateincidenttags) - Validate incident tags
* [listIncidentTags](docs/sdks/incidentsettings/README.md#listincidenttags) - List incident tags
* [listIncidentTypes](docs/sdks/incidentsettings/README.md#listincidenttypes) - List incident types
* [createIncidentType](docs/sdks/incidentsettings/README.md#createincidenttype) - Create an incident type
* [getIncidentType](docs/sdks/incidentsettings/README.md#getincidenttype) - Get an incident type
* [deleteIncidentType](docs/sdks/incidentsettings/README.md#deleteincidenttype) - Archive an incident type
* [updateIncidentType](docs/sdks/incidentsettings/README.md#updateincidenttype) - Update an incident type
* [listLifecycleMeasurementDefinitions](docs/sdks/incidentsettings/README.md#listlifecyclemeasurementdefinitions) - List measurement definitions
* [createLifecycleMeasurementDefinition](docs/sdks/incidentsettings/README.md#createlifecyclemeasurementdefinition) - Create a measurement definition
* [getLifecycleMeasurementDefinition](docs/sdks/incidentsettings/README.md#getlifecyclemeasurementdefinition) - Get a measurement definition
* [deleteLifecycleMeasurementDefinition](docs/sdks/incidentsettings/README.md#deletelifecyclemeasurementdefinition) - Archive a measurement definition
* [updateLifecycleMeasurementDefinition](docs/sdks/incidentsettings/README.md#updatelifecyclemeasurementdefinition) - Update a measurement definition
* [listLifecyclePhases](docs/sdks/incidentsettings/README.md#listlifecyclephases) - List phases and milestones
* [createLifecycleMilestone](docs/sdks/incidentsettings/README.md#createlifecyclemilestone) - Create a milestone
* [deleteLifecycleMilestone](docs/sdks/incidentsettings/README.md#deletelifecyclemilestone) - Delete a milestone
* [updateLifecycleMilestone](docs/sdks/incidentsettings/README.md#updatelifecyclemilestone) - Update a milestone
* [listPriorities](docs/sdks/incidentsettings/README.md#listpriorities) - List priorities
* [createPriority](docs/sdks/incidentsettings/README.md#createpriority) - Create a priority
* [getPriority](docs/sdks/incidentsettings/README.md#getpriority) - Get a priority
* [deletePriority](docs/sdks/incidentsettings/README.md#deletepriority) - Delete a priority
* [updatePriority](docs/sdks/incidentsettings/README.md#updatepriority) - Update a priority
* [listSeverities](docs/sdks/incidentsettings/README.md#listseverities) - List severities
* [createSeverity](docs/sdks/incidentsettings/README.md#createseverity) - Create a severity
* [getSeverity](docs/sdks/incidentsettings/README.md#getseverity) - Get a severity
* [deleteSeverity](docs/sdks/incidentsettings/README.md#deleteseverity) - Delete a severity
* [updateSeverity](docs/sdks/incidentsettings/README.md#updateseverity) - Update a severity
* [getSeverityMatrix](docs/sdks/incidentsettings/README.md#getseveritymatrix) - Get severity matrix
* [updateSeverityMatrix](docs/sdks/incidentsettings/README.md#updateseveritymatrix) - Update severity matrix
* [listSeverityMatrixConditions](docs/sdks/incidentsettings/README.md#listseveritymatrixconditions) - List severity matrix conditions
* [createSeverityMatrixCondition](docs/sdks/incidentsettings/README.md#createseveritymatrixcondition) - Create a severity matrix condition
* [getSeverityMatrixCondition](docs/sdks/incidentsettings/README.md#getseveritymatrixcondition) - Get a severity matrix condition
* [deleteSeverityMatrixCondition](docs/sdks/incidentsettings/README.md#deleteseveritymatrixcondition) - Delete a severity matrix condition
* [updateSeverityMatrixCondition](docs/sdks/incidentsettings/README.md#updateseveritymatrixcondition) - Update a severity matrix condition
* [listSeverityMatrixImpacts](docs/sdks/incidentsettings/README.md#listseveritymatriximpacts) - List severity matrix impacts
* [createSeverityMatrixImpact](docs/sdks/incidentsettings/README.md#createseveritymatriximpact) - Create a severity matrix impact
* [deleteSeverityMatrixImpact](docs/sdks/incidentsettings/README.md#deleteseveritymatriximpact) - Delete a severity matrix impact
* [updateSeverityMatrixImpact](docs/sdks/incidentsettings/README.md#updateseveritymatriximpact) - Update a severity matrix impact
* [deleteCustomFieldDefinition](docs/sdks/incidentsettings/README.md#deletecustomfielddefinition) - Delete a custom field definition
* [updateCustomFieldDefinition](docs/sdks/incidentsettings/README.md#updatecustomfielddefinition) - Update a custom field definition
* [listCustomFieldDefinitions](docs/sdks/incidentsettings/README.md#listcustomfielddefinitions) - List custom field definitions
* [createCustomFieldDefinition](docs/sdks/incidentsettings/README.md#createcustomfielddefinition) - Create a custom field definition
* [listCustomFieldSelectOptions](docs/sdks/incidentsettings/README.md#listcustomfieldselectoptions) - Get available values for a custom field
* [appendFormDataOnSelectedValueGet](docs/sdks/incidentsettings/README.md#appendformdataonselectedvalueget) - Get data for a form field on select
* [getFormConfiguration](docs/sdks/incidentsettings/README.md#getformconfiguration) - Get a form configuration

### [integrations](docs/sdks/integrations/README.md)

* [listIntegrations](docs/sdks/integrations/README.md#listintegrations) - List integrations
* [getIntegration](docs/sdks/integrations/README.md#getintegration) - Get an integration
* [updateFieldMap](docs/sdks/integrations/README.md#updatefieldmap) - Update field mapping
* [listFieldMapAvailableFields](docs/sdks/integrations/README.md#listfieldmapavailablefields) - List available fields for field mapping
* [listAuthedProviders](docs/sdks/integrations/README.md#listauthedproviders) - Lists the available and configured integrations
* [updateAuthedProvider](docs/sdks/integrations/README.md#updateauthedprovider) - Get an authed provider
* [listConnections](docs/sdks/integrations/README.md#listconnections) - List integration connections
* [createConnection](docs/sdks/integrations/README.md#createconnection) - Create a new integration connection
* [refreshConnection](docs/sdks/integrations/README.md#refreshconnection) - Refresh an integration connection
* [updateConnection](docs/sdks/integrations/README.md#updateconnection) - Update an integration connection
* [listConnectionStatuses](docs/sdks/integrations/README.md#listconnectionstatuses) - Get integration connection status
* [listConnectionStatusesBySlug](docs/sdks/integrations/README.md#listconnectionstatusesbyslug) - Get an integration connection status
* [listConnectionStatusesBySlugAndId](docs/sdks/integrations/README.md#listconnectionstatusesbyslugandid) - Get an integration connection status
* [listAwsConnections](docs/sdks/integrations/README.md#listawsconnections) - List AWS connections
* [getAwsConnection](docs/sdks/integrations/README.md#getawsconnection) - Get an AWS connection
* [updateAwsConnection](docs/sdks/integrations/README.md#updateawsconnection) - Update an AWS connection
* [listAwsCloudtrailBatches](docs/sdks/integrations/README.md#listawscloudtrailbatches) - List CloudTrail batches
* [getAwsCloudtrailBatch](docs/sdks/integrations/README.md#getawscloudtrailbatch) - Get a CloudTrail batch
* [updateAwsCloudtrailBatch](docs/sdks/integrations/README.md#updateawscloudtrailbatch) - Update a CloudTrail batch
* [listAwsCloudtrailBatchEvents](docs/sdks/integrations/README.md#listawscloudtrailbatchevents) - List events for an AWS CloudTrail batch
* [searchConfluenceSpaces](docs/sdks/integrations/README.md#searchconfluencespaces) - List Confluence spaces
* [listSlackWorkspaces](docs/sdks/integrations/README.md#listslackworkspaces) - List Slack workspaces
* [listSlackUsergroups](docs/sdks/integrations/README.md#listslackusergroups) - List Slack user groups
* [listSlackEmojiActions](docs/sdks/integrations/README.md#listslackemojiactions) - List Slack emoji actions
* [createSlackEmojiAction](docs/sdks/integrations/README.md#createslackemojiaction) - Create a new Slack emoji action
* [getSlackEmojiAction](docs/sdks/integrations/README.md#getslackemojiaction) - Get a Slack emoji action
* [deleteSlackEmojiAction](docs/sdks/integrations/README.md#deleteslackemojiaction) - Delete a Slack emoji action
* [updateSlackEmojiAction](docs/sdks/integrations/README.md#updateslackemojiaction) - Update a Slack emoji action
* [listStatuspageConnections](docs/sdks/integrations/README.md#liststatuspageconnections) - List Statuspage connections
* [getStatuspageConnection](docs/sdks/integrations/README.md#getstatuspageconnection) - Get a Statuspage connection
* [deleteStatuspageConnection](docs/sdks/integrations/README.md#deletestatuspageconnection) - Delete a Statuspage connection
* [updateStatuspageConnection](docs/sdks/integrations/README.md#updatestatuspageconnection) - Update a Statuspage connection
* [listStatuspageConnectionPages](docs/sdks/integrations/README.md#liststatuspageconnectionpages) - List StatusPage pages for a connection
* [searchZendeskTickets](docs/sdks/integrations/README.md#searchzendesktickets) - Search for Zendesk tickets
* [getZendeskCustomerSupportIssue](docs/sdks/integrations/README.md#getzendeskcustomersupportissue) - Search for Zendesk tickets

### [metricsReporting](docs/sdks/metricsreporting/README.md)

* [getMeanTimeReport](docs/sdks/metricsreporting/README.md#getmeantimereport) - Get mean time metrics for incidents
* [listRetrospectiveMetrics](docs/sdks/metricsreporting/README.md#listretrospectivemetrics) - List retrospective metrics
* [listUserInvolvementMetrics](docs/sdks/metricsreporting/README.md#listuserinvolvementmetrics) - List user metrics
* [listIncidentMetrics](docs/sdks/metricsreporting/README.md#listincidentmetrics) - List incident metrics and analytics
* [listInfrastructureTypeMetrics](docs/sdks/metricsreporting/README.md#listinfrastructuretypemetrics) - List metrics for a component type
* [listInfrastructureMetrics](docs/sdks/metricsreporting/README.md#listinfrastructuremetrics) - Get metrics for a component
* [getSavedSearch](docs/sdks/metricsreporting/README.md#getsavedsearch) - Get a saved search
* [deleteSavedSearch](docs/sdks/metricsreporting/README.md#deletesavedsearch) - Delete a saved search
* [updateSavedSearch](docs/sdks/metricsreporting/README.md#updatesavedsearch) - Update a saved search
* [listSavedSearches](docs/sdks/metricsreporting/README.md#listsavedsearches) - List saved searches
* [createSavedSearch](docs/sdks/metricsreporting/README.md#createsavedsearch) - Create a saved search
* [getSignalsTimeseriesAnalytics](docs/sdks/metricsreporting/README.md#getsignalstimeseriesanalytics) - Generate timeseries alert metrics
* [getSignalsGroupedMetrics](docs/sdks/metricsreporting/README.md#getsignalsgroupedmetrics) - Generate grouped alert metrics
* [getSignalsMttxAnalytics](docs/sdks/metricsreporting/README.md#getsignalsmttxanalytics) - Get MTTX analytics for signals
* [getSignalsNoiseAnalytics](docs/sdks/metricsreporting/README.md#getsignalsnoiseanalytics) - Get noise analytics for signals

### [retrospectives](docs/sdks/retrospectives/README.md)

* [shareIncidentRetrospectives](docs/sdks/retrospectives/README.md#shareincidentretrospectives) - Share an incident's retrospective
* [exportIncidentRetrospectives](docs/sdks/retrospectives/README.md#exportincidentretrospectives) - Export an incident's retrospective(s)
* [listIncidentRetrospectives](docs/sdks/retrospectives/README.md#listincidentretrospectives) - All attached retrospectives for an incident
* [createIncidentRetrospective](docs/sdks/retrospectives/README.md#createincidentretrospective) - Create a new retrospective on the incident using the template
* [updateIncidentRetrospective](docs/sdks/retrospectives/README.md#updateincidentretrospective) - Update a retrospective on the incident
* [createIncidentRetrospectiveField](docs/sdks/retrospectives/README.md#createincidentretrospectivefield) - Appends a new incident retrospective field to an incident retrospective
* [getIncidentRetrospectiveField](docs/sdks/retrospectives/README.md#getincidentretrospectivefield) - Get a retrospective field
* [updateIncidentRetrospectiveField](docs/sdks/retrospectives/README.md#updateincidentretrospectivefield) - Update the value on a retrospective field
* [createIncidentRetrospectiveDynamicInput](docs/sdks/retrospectives/README.md#createincidentretrospectivedynamicinput) - Add a new dynamic input field to a retrospective's dynamic input group field
* [deleteIncidentRetrospectiveDynamicInput](docs/sdks/retrospectives/README.md#deleteincidentretrospectivedynamicinput) - Removes a dynamic input from a retrospective's dynamic input group field
* [listRetrospectives](docs/sdks/retrospectives/README.md#listretrospectives) - List retrospective reports
* [listPostMortemReports](docs/sdks/retrospectives/README.md#listpostmortemreports) - List retrospective reports
* [createPostMortemReport](docs/sdks/retrospectives/README.md#createpostmortemreport) - Create a retrospective report
* [getPostMortemReport](docs/sdks/retrospectives/README.md#getpostmortemreport) - Get a retrospective report
* [updatePostMortemReport](docs/sdks/retrospectives/README.md#updatepostmortemreport) - Update a retrospective report
* [listPostMortemReasons](docs/sdks/retrospectives/README.md#listpostmortemreasons) - List contributing factors for a retrospective report
* [createPostMortemReason](docs/sdks/retrospectives/README.md#createpostmortemreason) - Create a contributing factor for a retrospective report
* [deletePostMortemReason](docs/sdks/retrospectives/README.md#deletepostmortemreason) - Delete a contributing factor from a retrospective report
* [updatePostMortemReason](docs/sdks/retrospectives/README.md#updatepostmortemreason) - Update a contributing factor in a retrospective report
* [reorderPostMortemReasons](docs/sdks/retrospectives/README.md#reorderpostmortemreasons) - Reorder a contributing factor for a retrospective report
* [publishPostMortemReport](docs/sdks/retrospectives/README.md#publishpostmortemreport) - Publish a retrospective report
* [updatePostMortemField](docs/sdks/retrospectives/README.md#updatepostmortemfield) - Update a retrospective field
* [listPostMortemQuestions](docs/sdks/retrospectives/README.md#listpostmortemquestions) - List retrospective questions
* [updatePostMortemQuestions](docs/sdks/retrospectives/README.md#updatepostmortemquestions) - Update retrospective questions
* [getPostMortemQuestion](docs/sdks/retrospectives/README.md#getpostmortemquestion) - Get a retrospective question
* [listRetrospectiveTemplates](docs/sdks/retrospectives/README.md#listretrospectivetemplates) - List retrospective templates
* [createRetrospectiveTemplate](docs/sdks/retrospectives/README.md#createretrospectivetemplate) - Create a retrospective template
* [getRetrospectiveTemplate](docs/sdks/retrospectives/README.md#getretrospectivetemplate) - Get a retrospective template
* [deleteRetrospectiveTemplate](docs/sdks/retrospectives/README.md#deleteretrospectivetemplate) - Delete a retrospective template
* [updateRetrospectiveTemplate](docs/sdks/retrospectives/README.md#updateretrospectivetemplate) - Update a retrospective template

### [runbooks](docs/sdks/runbooks/README.md)

* [listRunbookActions](docs/sdks/runbooks/README.md#listrunbookactions) - List runbook actions
* [listRunbookExecutions](docs/sdks/runbooks/README.md#listrunbookexecutions) - List runbook executions
* [createRunbookExecution](docs/sdks/runbooks/README.md#createrunbookexecution) - Create a runbook execution
* [getRunbookExecution](docs/sdks/runbooks/README.md#getrunbookexecution) - Get a runbook execution
* [deleteRunbookExecution](docs/sdks/runbooks/README.md#deleterunbookexecution) - Terminate a runbook execution
* [updateRunbookExecutionStep](docs/sdks/runbooks/README.md#updaterunbookexecutionstep) - Update a runbook step execution
* [getRunbookExecutionStepScript](docs/sdks/runbooks/README.md#getrunbookexecutionstepscript) - Get a step's bash script
* [updateRunbookExecutionStepScript](docs/sdks/runbooks/README.md#updaterunbookexecutionstepscript) - Update a script step's execution status
* [getRunbookActionFieldOptions](docs/sdks/runbooks/README.md#getrunbookactionfieldoptions) - List select options for a runbook integration action field
* [listRunbooks](docs/sdks/runbooks/README.md#listrunbooks) - List runbooks
* [createRunbook](docs/sdks/runbooks/README.md#createrunbook) - Create a runbook
* [getRunbook](docs/sdks/runbooks/README.md#getrunbook) - Get a runbook
* [updateRunbook](docs/sdks/runbooks/README.md#updaterunbook) - Update a runbook
* [deleteRunbook](docs/sdks/runbooks/README.md#deleterunbook) - Delete a runbook
* [listRunbookAudits](docs/sdks/runbooks/README.md#listrunbookaudits) - List runbook audits

### [scim](docs/sdks/scim/README.md)

* [getScimGroup](docs/sdks/scim/README.md#getscimgroup) - Get a SCIM group
* [updateScimGroup](docs/sdks/scim/README.md#updatescimgroup) - Update a SCIM group and assign members
* [deleteScimGroup](docs/sdks/scim/README.md#deletescimgroup) - Delete a SCIM group
* [listScimGroups](docs/sdks/scim/README.md#listscimgroups) - List SCIM groups
* [createScimGroup](docs/sdks/scim/README.md#createscimgroup) - Create a SCIM group and assign members
* [getScimUser](docs/sdks/scim/README.md#getscimuser) - Get a SCIM user
* [updateScimUser](docs/sdks/scim/README.md#updatescimuser) - Update a User from SCIM data
* [deleteScimUser](docs/sdks/scim/README.md#deletescimuser) - Delete a User matching SCIM data
* [patchScimUser](docs/sdks/scim/README.md#patchscimuser) - Update a User from SCIM data
* [listScimUsers](docs/sdks/scim/README.md#listscimusers) - List SCIM users
* [createScimUser](docs/sdks/scim/README.md#createscimuser) - Create a User from SCIM data

### [signals](docs/sdks/signals/README.md)

* [listTeamEscalationPolicies](docs/sdks/signals/README.md#listteamescalationpolicies) - List escalation policies for a team
* [createTeamEscalationPolicy](docs/sdks/signals/README.md#createteamescalationpolicy) - Create an escalation policy for a team
* [getTeamEscalationPolicy](docs/sdks/signals/README.md#getteamescalationpolicy) - Get an escalation policy for a team
* [deleteTeamEscalationPolicy](docs/sdks/signals/README.md#deleteteamescalationpolicy) - Delete an escalation policy for a team
* [updateTeamEscalationPolicy](docs/sdks/signals/README.md#updateteamescalationpolicy) - Update an escalation policy for a team
* [listTeamOnCallSchedules](docs/sdks/signals/README.md#listteamoncallschedules) - List on-call schedules for a team
* [createTeamOnCallSchedule](docs/sdks/signals/README.md#createteamoncallschedule) - Create an on-call schedule for a team
* [getTeamOnCallSchedule](docs/sdks/signals/README.md#getteamoncallschedule) - Get an on-call schedule for a team
* [deleteTeamOnCallSchedule](docs/sdks/signals/README.md#deleteteamoncallschedule) - Delete an on-call schedule for a team
* [updateTeamOnCallSchedule](docs/sdks/signals/README.md#updateteamoncallschedule) - Update an on-call schedule for a team
* [createOnCallShift](docs/sdks/signals/README.md#createoncallshift) - Create a shift for an on-call schedule
* [getOnCallShift](docs/sdks/signals/README.md#getoncallshift) - Get an on-call shift for a team schedule
* [deleteOnCallShift](docs/sdks/signals/README.md#deleteoncallshift) - Delete an on-call shift from a team schedule
* [updateOnCallShift](docs/sdks/signals/README.md#updateoncallshift) - Update an on-call shift for a team schedule
* [listTeamSignalRules](docs/sdks/signals/README.md#listteamsignalrules) - List Signals rules
* [createTeamSignalRule](docs/sdks/signals/README.md#createteamsignalrule) - Create a Signals rule
* [getTeamSignalRule](docs/sdks/signals/README.md#getteamsignalrule) - Get a Signals rule
* [deleteTeamSignalRule](docs/sdks/signals/README.md#deleteteamsignalrule) - Delete a Signals rule
* [updateTeamSignalRule](docs/sdks/signals/README.md#updateteamsignalrule) - Update a Signals rule
* [listSignalsEventSources](docs/sdks/signals/README.md#listsignalseventsources) - List event sources for Signals
* [createSignalsEventSource](docs/sdks/signals/README.md#createsignalseventsource) - Create an event source for Signals
* [getSignalsEventSource](docs/sdks/signals/README.md#getsignalseventsource) - Get an event source for Signals
* [deleteSignalsEventSource](docs/sdks/signals/README.md#deletesignalseventsource) - Delete an event source for Signals
* [getSignalsHackerMode](docs/sdks/signals/README.md#getsignalshackermode) - Get hacker mode status
* [listSignalsAlertGroupingConfigurations](docs/sdks/signals/README.md#listsignalsalertgroupingconfigurations) - List alert grouping configurations.
* [createSignalsAlertGroupingConfiguration](docs/sdks/signals/README.md#createsignalsalertgroupingconfiguration) - Create an alert grouping configuration.
* [getSignalsAlertGroupingConfiguration](docs/sdks/signals/README.md#getsignalsalertgroupingconfiguration) - Get an alert grouping configuration.
* [deleteSignalsAlertGroupingConfiguration](docs/sdks/signals/README.md#deletesignalsalertgroupingconfiguration) - Delete an alert grouping configuration.
* [updateSignalsAlertGroupingConfiguration](docs/sdks/signals/README.md#updatesignalsalertgroupingconfiguration) - Update an alert grouping configuration.
* [listSignalsEmailTargets](docs/sdks/signals/README.md#listsignalsemailtargets) - List email targets for signals
* [createSignalsEmailTarget](docs/sdks/signals/README.md#createsignalsemailtarget) - Create an email target for signals
* [getSignalsEmailTarget](docs/sdks/signals/README.md#getsignalsemailtarget) - Get a signal email target
* [deleteSignalsEmailTarget](docs/sdks/signals/README.md#deletesignalsemailtarget) - Delete a signal email target
* [updateSignalsEmailTarget](docs/sdks/signals/README.md#updatesignalsemailtarget) - Update an email target
* [listSignalsWebhookTargets](docs/sdks/signals/README.md#listsignalswebhooktargets) - List webhook targets
* [createSignalsWebhookTarget](docs/sdks/signals/README.md#createsignalswebhooktarget) - Create a webhook target
* [getSignalsWebhookTarget](docs/sdks/signals/README.md#getsignalswebhooktarget) - Get a webhook target
* [deleteSignalsWebhookTarget](docs/sdks/signals/README.md#deletesignalswebhooktarget) - Delete a webhook target
* [updateSignalsWebhookTarget](docs/sdks/signals/README.md#updatesignalswebhooktarget) - Update a webhook target
* [listSignalsTransposers](docs/sdks/signals/README.md#listsignalstransposers) - List signal transposers
* [getSignalsIngestUrl](docs/sdks/signals/README.md#getsignalsingesturl) - Get the signals ingestion URL
* [debugSignalsExpression](docs/sdks/signals/README.md#debugsignalsexpression) - Debug Signals expressions
* [listOrganizationOnCallSchedules](docs/sdks/signals/README.md#listorganizationoncallschedules) - List who's on call for the organization

### [statusPages](docs/sdks/statuspages/README.md)

* [deleteIncidentStatusPage](docs/sdks/statuspages/README.md#deleteincidentstatuspage) - Remove a status page from an incident
* [listNuncConnections](docs/sdks/statuspages/README.md#listnuncconnections) - List status pages
* [createNuncConnection](docs/sdks/statuspages/README.md#createnuncconnection) - Create a status page
* [listEmailSubscribers](docs/sdks/statuspages/README.md#listemailsubscribers) - List status page subscribers
* [createEmailSubscriber](docs/sdks/statuspages/README.md#createemailsubscriber) - Add subscribers to a status page
* [deleteEmailSubscriber](docs/sdks/statuspages/README.md#deleteemailsubscriber) - Remove subscribers from a status page
* [getNuncConnection](docs/sdks/statuspages/README.md#getnuncconnection) - Get a status page
* [updateNuncConnection](docs/sdks/statuspages/README.md#updatenuncconnection) - Update a status page
* [deleteNuncConnection](docs/sdks/statuspages/README.md#deletenuncconnection) - Delete a status page
* [deleteNuncComponentGroup](docs/sdks/statuspages/README.md#deletenunccomponentgroup) - Delete a status page component group
* [updateNuncComponentGroup](docs/sdks/statuspages/README.md#updatenunccomponentgroup) - Update a status page component group
* [createNuncComponentGroup](docs/sdks/statuspages/README.md#createnunccomponentgroup) - Create a component group for a status page
* [deleteNuncLink](docs/sdks/statuspages/README.md#deletenunclink) - Delete a status page link
* [updateNuncLink](docs/sdks/statuspages/README.md#updatenunclink) - Update a status page link
* [createNuncLink](docs/sdks/statuspages/README.md#createnunclink) - Add link to a status page
* [updateNuncImage](docs/sdks/statuspages/README.md#updatenuncimage) - Upload an image for a status page
* [deleteNuncImage](docs/sdks/statuspages/README.md#deletenuncimage) - Delete an image from a status page
* [deleteNuncSubscription](docs/sdks/statuspages/README.md#deletenuncsubscription) - Unsubscribe from status page notifications
* [createNuncSubscription](docs/sdks/statuspages/README.md#createnuncsubscription) - Create a status page subscription

### [tasks](docs/sdks/tasks/README.md)

* [createIncidentTaskList](docs/sdks/tasks/README.md#createincidenttasklist) - Add tasks from a task list to an incident
* [listIncidentTasks](docs/sdks/tasks/README.md#listincidenttasks) - List tasks for an incident
* [createIncidentTask](docs/sdks/tasks/README.md#createincidenttask) - Create an incident task
* [getIncidentTask](docs/sdks/tasks/README.md#getincidenttask) - Get an incident task
* [deleteIncidentTask](docs/sdks/tasks/README.md#deleteincidenttask) - Delete an incident task
* [updateIncidentTask](docs/sdks/tasks/README.md#updateincidenttask) - Update an incident task
* [convertIncidentTask](docs/sdks/tasks/README.md#convertincidenttask) - Convert a task to a follow-up
* [listTaskLists](docs/sdks/tasks/README.md#listtasklists) - List task lists
* [createTaskList](docs/sdks/tasks/README.md#createtasklist) - Create a task list
* [getTaskList](docs/sdks/tasks/README.md#gettasklist) - Get a task list
* [deleteTaskList](docs/sdks/tasks/README.md#deletetasklist) - Delete a task list
* [updateTaskList](docs/sdks/tasks/README.md#updatetasklist) - Update a task list
* [listChecklistTemplates](docs/sdks/tasks/README.md#listchecklisttemplates) - List checklist templates
* [createChecklistTemplate](docs/sdks/tasks/README.md#createchecklisttemplate) - Create a checklist template
* [getChecklistTemplate](docs/sdks/tasks/README.md#getchecklisttemplate) - Get a checklist template
* [deleteChecklistTemplate](docs/sdks/tasks/README.md#deletechecklisttemplate) - Archive a checklist template
* [updateChecklistTemplate](docs/sdks/tasks/README.md#updatechecklisttemplate) - Update a checklist template

### [teams](docs/sdks/teams/README.md)

* [listTeams](docs/sdks/teams/README.md#listteams) - List teams
* [createTeam](docs/sdks/teams/README.md#createteam) - Create a team
* [getTeam](docs/sdks/teams/README.md#getteam) - Get a team
* [deleteTeam](docs/sdks/teams/README.md#deleteteam) - Archive a team
* [updateTeam](docs/sdks/teams/README.md#updateteam) - Update a team
* [listSchedules](docs/sdks/teams/README.md#listschedules) - List schedules

### [ticketing](docs/sdks/ticketing/README.md)

* [listTickets](docs/sdks/ticketing/README.md#listtickets) - List tickets
* [createTicket](docs/sdks/ticketing/README.md#createticket) - Create a ticket
* [getTicket](docs/sdks/ticketing/README.md#getticket) - Get a ticket
* [deleteTicket](docs/sdks/ticketing/README.md#deleteticket) - Archive a ticket
* [updateTicket](docs/sdks/ticketing/README.md#updateticket) - Update a ticket
* [listTicketingProjects](docs/sdks/ticketing/README.md#listticketingprojects) - List ticketing projects
* [getTicketingProject](docs/sdks/ticketing/README.md#getticketingproject) - Get a ticketing project
* [getConfigurationOptions](docs/sdks/ticketing/README.md#getconfigurationoptions) - List configuration options for a ticketing project
* [getOptionsForField](docs/sdks/ticketing/README.md#getoptionsforfield) - List a field's configuration options for a ticketing project
* [listAvailableTicketingFieldMaps](docs/sdks/ticketing/README.md#listavailableticketingfieldmaps) - List available fields for ticket field mapping
* [createTicketingFieldMap](docs/sdks/ticketing/README.md#createticketingfieldmap) - Create a field mapping for a ticketing project
* [getTicketingFieldMap](docs/sdks/ticketing/README.md#getticketingfieldmap) - Get a field map for a ticketing project
* [deleteTicketingFieldMap](docs/sdks/ticketing/README.md#deleteticketingfieldmap) - Archive a field map for a ticketing project
* [updateTicketingFieldMap](docs/sdks/ticketing/README.md#updateticketingfieldmap) - Update a field map for a ticketing project
* [listAvailableInboundFieldMaps](docs/sdks/ticketing/README.md#listavailableinboundfieldmaps) - List available fields for ticket field mapping
* [listInboundFieldMaps](docs/sdks/ticketing/README.md#listinboundfieldmaps) - List inbound field maps for a ticketing project
* [createInboundFieldMap](docs/sdks/ticketing/README.md#createinboundfieldmap) - Create inbound field map for a ticketing project
* [getInboundFieldMap](docs/sdks/ticketing/README.md#getinboundfieldmap) - Get inbound field map for a ticketing project
* [updateInboundFieldMap](docs/sdks/ticketing/README.md#updateinboundfieldmap) - Update inbound field map for a ticketing project
* [deleteInboundFieldMap](docs/sdks/ticketing/README.md#deleteinboundfieldmap) - Archive inbound field map for a ticketing project
* [createTicketingProjectConfig](docs/sdks/ticketing/README.md#createticketingprojectconfig) - Create a ticketing project configuration
* [getTicketingProjectConfig](docs/sdks/ticketing/README.md#getticketingprojectconfig) - Get configuration for a ticketing project
* [deleteTicketingProjectConfig](docs/sdks/ticketing/README.md#deleteticketingprojectconfig) - Archive a ticketing project configuration
* [updateTicketingProjectConfig](docs/sdks/ticketing/README.md#updateticketingprojectconfig) - Update configuration for a ticketing project
* [listTicketingPriorities](docs/sdks/ticketing/README.md#listticketingpriorities) - List ticketing priorities
* [createTicketingPriority](docs/sdks/ticketing/README.md#createticketingpriority) - Create a ticketing priority
* [getTicketingPriority](docs/sdks/ticketing/README.md#getticketingpriority) - Get a ticketing priority
* [deleteTicketingPriority](docs/sdks/ticketing/README.md#deleteticketingpriority) - Delete a ticketing priority
* [updateTicketingPriority](docs/sdks/ticketing/README.md#updateticketingpriority) - Update a ticketing priority
* [listTicketTags](docs/sdks/ticketing/README.md#listtickettags) - List ticket tags

### [users](docs/sdks/users/README.md)

* [listUsers](docs/sdks/users/README.md#listusers) - List users
* [getUser](docs/sdks/users/README.md#getuser) - Get a user
* [getCurrentUser](docs/sdks/users/README.md#getcurrentuser) - Get the currently authenticated user

### [webhooks](docs/sdks/webhooks/README.md)

* [listWebhooks](docs/sdks/webhooks/README.md#listwebhooks) - List webhooks
* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Create a webhook
* [listWebhookDeliveries](docs/sdks/webhooks/README.md#listwebhookdeliveries) - List webhook deliveries
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Delete a webhook
* [updateWebhook](docs/sdks/webhooks/README.md#updatewebhook) - Update a webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountSettingsGetAiPreferences`](docs/sdks/accountsettings/README.md#getaipreferences) - Get AI preferences
- [`accountSettingsGetBootstrap`](docs/sdks/accountsettings/README.md#getbootstrap) - Get initial application configuration
- [`accountSettingsListEntitlements`](docs/sdks/accountsettings/README.md#listentitlements) - List entitlements
- [`accountSettingsPing`](docs/sdks/accountsettings/README.md#ping) - Check API connectivity
- [`accountSettingsPingNoauth`](docs/sdks/accountsettings/README.md#pingnoauth) - Check API connectivity
- [`accountSettingsUpdateAiPreferences`](docs/sdks/accountsettings/README.md#updateaipreferences) - Update AI preferences
- [`alertsCreateIncidentAlert`](docs/sdks/alerts/README.md#createincidentalert) - Attach an alert to an incident
- [`alertsDeleteIncidentAlert`](docs/sdks/alerts/README.md#deleteincidentalert) - Remove an alert from an incident
- [`alertsGetAlert`](docs/sdks/alerts/README.md#getalert) - Get an alert
- [`alertsListAlerts`](docs/sdks/alerts/README.md#listalerts) - List alerts
- [`alertsListIncidentAlerts`](docs/sdks/alerts/README.md#listincidentalerts) - List alerts for an incident
- [`alertsListProcessingLogEntries`](docs/sdks/alerts/README.md#listprocessinglogentries) - List alert processing log entries
- [`alertsUpdateIncidentAlertPrimary`](docs/sdks/alerts/README.md#updateincidentalertprimary) - Set an alert as primary for an incident
- [`alertsUpdateSignalsAlert`](docs/sdks/alerts/README.md#updatesignalsalert) - Update a Signal alert
- [`audiencesArchiveAudience`](docs/sdks/audiences/README.md#archiveaudience) - Archive audience
- [`audiencesCreateAudience`](docs/sdks/audiences/README.md#createaudience) - Create audience
- [`audiencesGenerateAudienceSummary`](docs/sdks/audiences/README.md#generateaudiencesummary) - Generate summary
- [`audiencesGetAudience`](docs/sdks/audiences/README.md#getaudience) - Get audience
- [`audiencesGetAudienceSummary`](docs/sdks/audiences/README.md#getaudiencesummary) - Get latest summary
- [`audiencesGetMemberDefaultAudience`](docs/sdks/audiences/README.md#getmemberdefaultaudience) - Get default audience
- [`audiencesListAudiences`](docs/sdks/audiences/README.md#listaudiences) - List audiences
- [`audiencesListAudienceSummaries`](docs/sdks/audiences/README.md#listaudiencesummaries) - List audience summaries
- [`audiencesRestoreAudience`](docs/sdks/audiences/README.md#restoreaudience) - Restore audience
- [`audiencesSetMemberDefaultAudience`](docs/sdks/audiences/README.md#setmemberdefaultaudience) - Set default audience
- [`audiencesUpdateAudience`](docs/sdks/audiences/README.md#updateaudience) - Update audience
- [`auditEventsGetAuditEvent`](docs/sdks/auditevents/README.md#getauditevent) - Get a single audit event
- [`auditEventsListAuditEvents`](docs/sdks/auditevents/README.md#listauditevents) - List audit events
- [`callRoutesCreateTeamCallRoute`](docs/sdks/callroutes/README.md#createteamcallroute) - Create a call route for a team
- [`callRoutesDeleteCallRoute`](docs/sdks/callroutes/README.md#deletecallroute) - Delete a call route
- [`callRoutesGetCallRoute`](docs/sdks/callroutes/README.md#getcallroute) - Retrieve a call route
- [`callRoutesListCallRoutes`](docs/sdks/callroutes/README.md#listcallroutes) - List call routes
- [`callRoutesListTeamCallRoutes`](docs/sdks/callroutes/README.md#listteamcallroutes) - List call routes for a team
- [`callRoutesUpdateCallRoute`](docs/sdks/callroutes/README.md#updatecallroute) - Update a call route
- [`catalogEntriesCreateEnvironment`](docs/sdks/catalogentries/README.md#createenvironment) - Create an environment
- [`catalogEntriesCreateFunctionality`](docs/sdks/catalogentries/README.md#createfunctionality) - Create a functionality
- [`catalogEntriesCreateService`](docs/sdks/catalogentries/README.md#createservice) - Create a service
- [`catalogEntriesCreateServiceChecklistResponse`](docs/sdks/catalogentries/README.md#createservicechecklistresponse) - Record a response for a checklist item
- [`catalogEntriesCreateServiceDependency`](docs/sdks/catalogentries/README.md#createservicedependency) - Create a service dependency
- [`catalogEntriesCreateServiceLinks`](docs/sdks/catalogentries/README.md#createservicelinks) - Create multiple services linked to external services
- [`catalogEntriesDeleteEnvironment`](docs/sdks/catalogentries/README.md#deleteenvironment) - Archive an environment
- [`catalogEntriesDeleteFunctionality`](docs/sdks/catalogentries/README.md#deletefunctionality) - Archive a functionality
- [`catalogEntriesDeleteService`](docs/sdks/catalogentries/README.md#deleteservice) - Delete a service
- [`catalogEntriesDeleteServiceDependency`](docs/sdks/catalogentries/README.md#deleteservicedependency) - Delete a service dependency
- [`catalogEntriesDeleteServiceLink`](docs/sdks/catalogentries/README.md#deleteservicelink) - Delete a service link
- [`catalogEntriesGetEnvironment`](docs/sdks/catalogentries/README.md#getenvironment) - Get an environment
- [`catalogEntriesGetFunctionality`](docs/sdks/catalogentries/README.md#getfunctionality) - Get a functionality
- [`catalogEntriesGetService`](docs/sdks/catalogentries/README.md#getservice) - Get a service
- [`catalogEntriesGetServiceDependencies`](docs/sdks/catalogentries/README.md#getservicedependencies) - List dependencies for a service
- [`catalogEntriesGetServiceDependency`](docs/sdks/catalogentries/README.md#getservicedependency) - Get a service dependency
- [`catalogEntriesIngestCatalogData`](docs/sdks/catalogentries/README.md#ingestcatalogdata) - Ingest service catalog data
- [`catalogEntriesListEnvironments`](docs/sdks/catalogentries/README.md#listenvironments) - List environments
- [`catalogEntriesListFunctionalities`](docs/sdks/catalogentries/README.md#listfunctionalities) - List functionalities
- [`catalogEntriesListFunctionalityServices`](docs/sdks/catalogentries/README.md#listfunctionalityservices) - List services for a functionality
- [`catalogEntriesListInfrastructures`](docs/sdks/catalogentries/README.md#listinfrastructures) - Lists functionality, service and environment objects
- [`catalogEntriesListServiceAvailableDownstreamDependencies`](docs/sdks/catalogentries/README.md#listserviceavailabledownstreamdependencies) - List available downstream service dependencies
- [`catalogEntriesListServiceAvailableUpstreamDependencies`](docs/sdks/catalogentries/README.md#listserviceavailableupstreamdependencies) - List available upstream service dependencies
- [`catalogEntriesListServices`](docs/sdks/catalogentries/README.md#listservices) - List services
- [`catalogEntriesListUserOwnedServices`](docs/sdks/catalogentries/README.md#listuserownedservices) - List services owned by a user's teams
- [`catalogEntriesRefreshCatalog`](docs/sdks/catalogentries/README.md#refreshcatalog) - Refresh a service catalog
- [`catalogEntriesUpdateEnvironment`](docs/sdks/catalogentries/README.md#updateenvironment) - Update an environment
- [`catalogEntriesUpdateFunctionality`](docs/sdks/catalogentries/README.md#updatefunctionality) - Update a functionality
- [`catalogEntriesUpdateService`](docs/sdks/catalogentries/README.md#updateservice) - Update a service
- [`catalogEntriesUpdateServiceDependency`](docs/sdks/catalogentries/README.md#updateservicedependency) - Update a service dependency
- [`changesCreateChange`](docs/sdks/changes/README.md#createchange) - Create a new change entry
- [`changesCreateChangeEvent`](docs/sdks/changes/README.md#createchangeevent) - Create a change event
- [`changesCreateChangeIdentity`](docs/sdks/changes/README.md#createchangeidentity) - Create an identity for a change entry
- [`changesDeleteChange`](docs/sdks/changes/README.md#deletechange) - Archive a change entry
- [`changesDeleteChangeEvent`](docs/sdks/changes/README.md#deletechangeevent) - Delete a change event
- [`changesDeleteChangeIdentity`](docs/sdks/changes/README.md#deletechangeidentity) - Delete an identity from a change entry
- [`changesGetChangeEvent`](docs/sdks/changes/README.md#getchangeevent) - Get a change event
- [`changesListChangeEvents`](docs/sdks/changes/README.md#listchangeevents) - List change events
- [`changesListChangeIdentities`](docs/sdks/changes/README.md#listchangeidentities) - List identities for a change entry
- [`changesListChanges`](docs/sdks/changes/README.md#listchanges) - List changes
- [`changesListChangeTypes`](docs/sdks/changes/README.md#listchangetypes) - List change types
- [`changesUpdateChange`](docs/sdks/changes/README.md#updatechange) - Update a change entry
- [`changesUpdateChangeEvent`](docs/sdks/changes/README.md#updatechangeevent) - Update a change event
- [`changesUpdateChangeIdentity`](docs/sdks/changes/README.md#updatechangeidentity) - Update an identity for a change entry
- [`communicationCreateStatusUpdateTemplate`](docs/sdks/communication/README.md#createstatusupdatetemplate) - Create a status update template
- [`communicationDeleteStatusUpdateTemplate`](docs/sdks/communication/README.md#deletestatusupdatetemplate) - Delete a status update template
- [`communicationGetStatusUpdateTemplate`](docs/sdks/communication/README.md#getstatusupdatetemplate) - Get a status update template
- [`communicationListStatusUpdateTemplates`](docs/sdks/communication/README.md#liststatusupdatetemplates) - List status update templates
- [`communicationUpdateStatusUpdateTemplate`](docs/sdks/communication/README.md#updatestatusupdatetemplate) - Update a status update template
- [`conversationsCreateComment`](docs/sdks/conversations/README.md#createcomment) - Create a conversation comment
- [`conversationsCreateCommentReaction`](docs/sdks/conversations/README.md#createcommentreaction) - Create a reaction for a conversation comment
- [`conversationsDeleteComment`](docs/sdks/conversations/README.md#deletecomment) - Archive a conversation comment
- [`conversationsDeleteCommentReaction`](docs/sdks/conversations/README.md#deletecommentreaction) - Delete a reaction from a conversation comment
- [`conversationsGetComment`](docs/sdks/conversations/README.md#getcomment) - Get a conversation comment
- [`conversationsGetVoteStatus`](docs/sdks/conversations/README.md#getvotestatus) - Get votes
- [`conversationsListCommentReactions`](docs/sdks/conversations/README.md#listcommentreactions) - List reactions for a conversation comment
- [`conversationsListComments`](docs/sdks/conversations/README.md#listcomments) - List comments for a conversation
- [`conversationsUpdateComment`](docs/sdks/conversations/README.md#updatecomment) - Update a conversation comment
- [`conversationsUpdateVote`](docs/sdks/conversations/README.md#updatevote) - Update votes
- [`incidentsBulkUpdateIncidentMilestones`](docs/sdks/incidents/README.md#bulkupdateincidentmilestones) - Update milestone times
- [`incidentsCloseIncident`](docs/sdks/incidents/README.md#closeincident) - Close an incident
- [`incidentsCreateIncident`](docs/sdks/incidents/README.md#createincident) - Create an incident
- [`incidentsCreateIncidentAttachment`](docs/sdks/incidents/README.md#createincidentattachment) - Add an attachment to the incident timeline
- [`incidentsCreateIncidentChangeEvent`](docs/sdks/incidents/README.md#createincidentchangeevent) - Add a related change to an incident
- [`incidentsCreateIncidentChatMessage`](docs/sdks/incidents/README.md#createincidentchatmessage) - Add a chat message to an incident
- [`incidentsCreateIncidentImpact`](docs/sdks/incidents/README.md#createincidentimpact) - Add impacted infrastructure to an incident
- [`incidentsCreateIncidentLink`](docs/sdks/incidents/README.md#createincidentlink) - Add a link to an incident
- [`incidentsCreateIncidentNote`](docs/sdks/incidents/README.md#createincidentnote) - Add a note to an incident
- [`incidentsCreateIncidentRoleAssignment`](docs/sdks/incidents/README.md#createincidentroleassignment) - Assign a user to an incident
- [`incidentsCreateIncidentStatusPage`](docs/sdks/incidents/README.md#createincidentstatuspage) - Add a status page to an incident
- [`incidentsCreateIncidentTeamAssignment`](docs/sdks/incidents/README.md#createincidentteamassignment) - Assign a team to an incident
- [`incidentsCreateScheduledMaintenance`](docs/sdks/incidents/README.md#createscheduledmaintenance) - Create a scheduled maintenance event
- [`incidentsDeleteIncident`](docs/sdks/incidents/README.md#deleteincident) - Archive an incident
- [`incidentsDeleteIncidentChatMessage`](docs/sdks/incidents/README.md#deleteincidentchatmessage) - Delete a chat message from an incident
- [`incidentsDeleteIncidentEvent`](docs/sdks/incidents/README.md#deleteincidentevent) - Delete an incident event
- [`incidentsDeleteIncidentImpact`](docs/sdks/incidents/README.md#deleteincidentimpact) - Remove impacted infrastructure from an incident
- [`incidentsDeleteIncidentLink`](docs/sdks/incidents/README.md#deleteincidentlink) - Remove a link from an incident
- [`incidentsDeleteIncidentRoleAssignment`](docs/sdks/incidents/README.md#deleteincidentroleassignment) - Unassign a user from an incident
- [`incidentsDeleteIncidentTeamAssignment`](docs/sdks/incidents/README.md#deleteincidentteamassignment) - Unassign a team from an incident
- [`incidentsDeleteScheduledMaintenance`](docs/sdks/incidents/README.md#deletescheduledmaintenance) - Delete a scheduled maintenance event
- [`incidentsDeleteTranscriptEntry`](docs/sdks/incidents/README.md#deletetranscriptentry) - Delete a transcript from an incident
- [`incidentSettingsAppendFormDataOnSelectedValueGet`](docs/sdks/incidentsettings/README.md#appendformdataonselectedvalueget) - Get data for a form field on select
- [`incidentSettingsCreateCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#createcustomfielddefinition) - Create a custom field definition
- [`incidentSettingsCreateIncidentRole`](docs/sdks/incidentsettings/README.md#createincidentrole) - Create an incident role
- [`incidentSettingsCreateIncidentType`](docs/sdks/incidentsettings/README.md#createincidenttype) - Create an incident type
- [`incidentSettingsCreateLifecycleMeasurementDefinition`](docs/sdks/incidentsettings/README.md#createlifecyclemeasurementdefinition) - Create a measurement definition
- [`incidentSettingsCreateLifecycleMilestone`](docs/sdks/incidentsettings/README.md#createlifecyclemilestone) - Create a milestone
- [`incidentSettingsCreatePriority`](docs/sdks/incidentsettings/README.md#createpriority) - Create a priority
- [`incidentSettingsCreateSeverity`](docs/sdks/incidentsettings/README.md#createseverity) - Create a severity
- [`incidentSettingsCreateSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#createseveritymatrixcondition) - Create a severity matrix condition
- [`incidentSettingsCreateSeverityMatrixImpact`](docs/sdks/incidentsettings/README.md#createseveritymatriximpact) - Create a severity matrix impact
- [`incidentSettingsDeleteCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#deletecustomfielddefinition) - Delete a custom field definition
- [`incidentSettingsDeleteIncidentRole`](docs/sdks/incidentsettings/README.md#deleteincidentrole) - Archive an incident role
- [`incidentSettingsDeleteIncidentType`](docs/sdks/incidentsettings/README.md#deleteincidenttype) - Archive an incident type
- [`incidentSettingsDeleteLifecycleMeasurementDefinition`](docs/sdks/incidentsettings/README.md#deletelifecyclemeasurementdefinition) - Archive a measurement definition
- [`incidentSettingsDeleteLifecycleMilestone`](docs/sdks/incidentsettings/README.md#deletelifecyclemilestone) - Delete a milestone
- [`incidentSettingsDeletePriority`](docs/sdks/incidentsettings/README.md#deletepriority) - Delete a priority
- [`incidentSettingsDeleteSeverity`](docs/sdks/incidentsettings/README.md#deleteseverity) - Delete a severity
- [`incidentSettingsDeleteSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#deleteseveritymatrixcondition) - Delete a severity matrix condition
- [`incidentSettingsDeleteSeverityMatrixImpact`](docs/sdks/incidentsettings/README.md#deleteseveritymatriximpact) - Delete a severity matrix impact
- [`incidentSettingsGetFormConfiguration`](docs/sdks/incidentsettings/README.md#getformconfiguration) - Get a form configuration
- [`incidentSettingsGetIncidentRole`](docs/sdks/incidentsettings/README.md#getincidentrole) - Get an incident role
- [`incidentSettingsGetIncidentType`](docs/sdks/incidentsettings/README.md#getincidenttype) - Get an incident type
- [`incidentSettingsGetLifecycleMeasurementDefinition`](docs/sdks/incidentsettings/README.md#getlifecyclemeasurementdefinition) - Get a measurement definition
- [`incidentSettingsGetPriority`](docs/sdks/incidentsettings/README.md#getpriority) - Get a priority
- [`incidentSettingsGetSeverity`](docs/sdks/incidentsettings/README.md#getseverity) - Get a severity
- [`incidentSettingsGetSeverityMatrix`](docs/sdks/incidentsettings/README.md#getseveritymatrix) - Get severity matrix
- [`incidentSettingsGetSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#getseveritymatrixcondition) - Get a severity matrix condition
- [`incidentSettingsListCustomFieldDefinitions`](docs/sdks/incidentsettings/README.md#listcustomfielddefinitions) - List custom field definitions
- [`incidentSettingsListCustomFieldSelectOptions`](docs/sdks/incidentsettings/README.md#listcustomfieldselectoptions) - Get available values for a custom field
- [`incidentSettingsListIncidentRoles`](docs/sdks/incidentsettings/README.md#listincidentroles) - List incident roles
- [`incidentSettingsListIncidentTags`](docs/sdks/incidentsettings/README.md#listincidenttags) - List incident tags
- [`incidentSettingsListIncidentTypes`](docs/sdks/incidentsettings/README.md#listincidenttypes) - List incident types
- [`incidentSettingsListLifecycleMeasurementDefinitions`](docs/sdks/incidentsettings/README.md#listlifecyclemeasurementdefinitions) - List measurement definitions
- [`incidentSettingsListLifecyclePhases`](docs/sdks/incidentsettings/README.md#listlifecyclephases) - List phases and milestones
- [`incidentSettingsListPriorities`](docs/sdks/incidentsettings/README.md#listpriorities) - List priorities
- [`incidentSettingsListSeverities`](docs/sdks/incidentsettings/README.md#listseverities) - List severities
- [`incidentSettingsListSeverityMatrixConditions`](docs/sdks/incidentsettings/README.md#listseveritymatrixconditions) - List severity matrix conditions
- [`incidentSettingsListSeverityMatrixImpacts`](docs/sdks/incidentsettings/README.md#listseveritymatriximpacts) - List severity matrix impacts
- [`incidentSettingsUpdateCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#updatecustomfielddefinition) - Update a custom field definition
- [`incidentSettingsUpdateIncidentRole`](docs/sdks/incidentsettings/README.md#updateincidentrole) - Update an incident role
- [`incidentSettingsUpdateIncidentType`](docs/sdks/incidentsettings/README.md#updateincidenttype) - Update an incident type
- [`incidentSettingsUpdateLifecycleMeasurementDefinition`](docs/sdks/incidentsettings/README.md#updatelifecyclemeasurementdefinition) - Update a measurement definition
- [`incidentSettingsUpdateLifecycleMilestone`](docs/sdks/incidentsettings/README.md#updatelifecyclemilestone) - Update a milestone
- [`incidentSettingsUpdatePriority`](docs/sdks/incidentsettings/README.md#updatepriority) - Update a priority
- [`incidentSettingsUpdateSeverity`](docs/sdks/incidentsettings/README.md#updateseverity) - Update a severity
- [`incidentSettingsUpdateSeverityMatrix`](docs/sdks/incidentsettings/README.md#updateseveritymatrix) - Update severity matrix
- [`incidentSettingsUpdateSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#updateseveritymatrixcondition) - Update a severity matrix condition
- [`incidentSettingsUpdateSeverityMatrixImpact`](docs/sdks/incidentsettings/README.md#updateseveritymatriximpact) - Update a severity matrix impact
- [`incidentSettingsValidateIncidentTags`](docs/sdks/incidentsettings/README.md#validateincidenttags) - Validate incident tags
- [`incidentsGetAiIncidentSummaryVoteStatus`](docs/sdks/incidents/README.md#getaiincidentsummaryvotestatus) - Get the current user's vote status for an AI-generated incident summary
- [`incidentsGetConferenceBridgeTranslation`](docs/sdks/incidents/README.md#getconferencebridgetranslation) - Retrieve the translations for a specific conference bridge
- [`incidentsGetIncident`](docs/sdks/incidents/README.md#getincident) - Get an incident
- [`incidentsGetIncidentChannel`](docs/sdks/incidents/README.md#getincidentchannel) - Get chat channel information for an incident
- [`incidentsGetIncidentEvent`](docs/sdks/incidents/README.md#getincidentevent) - Get an incident event
- [`incidentsGetIncidentRelationships`](docs/sdks/incidents/README.md#getincidentrelationships) - List incident relationships
- [`incidentsGetIncidentUser`](docs/sdks/incidents/README.md#getincidentuser) - Get the current user's incident role
- [`incidentsGetScheduledMaintenance`](docs/sdks/incidents/README.md#getscheduledmaintenance) - Get a scheduled maintenance event
- [`incidentsListIncidentAttachments`](docs/sdks/incidents/README.md#listincidentattachments) - List attachments for an incident
- [`incidentsListIncidentChangeEvents`](docs/sdks/incidents/README.md#listincidentchangeevents) - List related changes on an incident
- [`incidentsListIncidentConferenceBridges`](docs/sdks/incidents/README.md#listincidentconferencebridges) - Retrieve all conference bridges for an incident
- [`incidentsListIncidentEvents`](docs/sdks/incidents/README.md#listincidentevents) - List events for an incident
- [`incidentsListIncidentImpacts`](docs/sdks/incidents/README.md#listincidentimpacts) - List impacted infrastructure for an incident
- [`incidentsListIncidentLinks`](docs/sdks/incidents/README.md#listincidentlinks) - List links on an incident
- [`incidentsListIncidentMilestones`](docs/sdks/incidents/README.md#listincidentmilestones) - List incident milestones
- [`incidentsListIncidentRoleAssignments`](docs/sdks/incidents/README.md#listincidentroleassignments) - List incident assignees
- [`incidentsListIncidents`](docs/sdks/incidents/README.md#listincidents) - List incidents
- [`incidentsListIncidentStatusPages`](docs/sdks/incidents/README.md#listincidentstatuspages) - List status pages for an incident
- [`incidentsListScheduledMaintenances`](docs/sdks/incidents/README.md#listscheduledmaintenances) - List scheduled maintenance events
- [`incidentsListSimilarIncidents`](docs/sdks/incidents/README.md#listsimilarincidents) - List similar incidents
- [`incidentsListTranscriptEntries`](docs/sdks/incidents/README.md#listtranscriptentries) - Lists all of the messages in the incident's transcript
- [`incidentsResolveIncident`](docs/sdks/incidents/README.md#resolveincident) - Resolve an incident
- [`incidentsUnarchiveIncident`](docs/sdks/incidents/README.md#unarchiveincident) - Unarchive an incident
- [`incidentsUpdateIncident`](docs/sdks/incidents/README.md#updateincident) - Update an incident
- [`incidentsUpdateIncidentChangeEvent`](docs/sdks/incidents/README.md#updateincidentchangeevent) - Update a change attached to an incident
- [`incidentsUpdateIncidentChatMessage`](docs/sdks/incidents/README.md#updateincidentchatmessage) - Update a chat message on an incident
- [`incidentsUpdateIncidentEvent`](docs/sdks/incidents/README.md#updateincidentevent) - Update an incident event
- [`incidentsUpdateIncidentImpactPatch`](docs/sdks/incidents/README.md#updateincidentimpactpatch) - Update impacts for an incident
- [`incidentsUpdateIncidentImpactPut`](docs/sdks/incidents/README.md#updateincidentimpactput) - Update impacts for an incident
- [`incidentsUpdateIncidentLink`](docs/sdks/incidents/README.md#updateincidentlink) - Update the external incident link
- [`incidentsUpdateIncidentNote`](docs/sdks/incidents/README.md#updateincidentnote) - Update a note
- [`incidentsUpdateScheduledMaintenance`](docs/sdks/incidents/README.md#updatescheduledmaintenance) - Update a scheduled maintenance event
- [`incidentsUpdateTranscriptAttribution`](docs/sdks/incidents/README.md#updatetranscriptattribution) - Update the attribution of a transcript
- [`incidentsVoteAiIncidentSummary`](docs/sdks/incidents/README.md#voteaiincidentsummary) - Vote on an AI-generated incident summary
- [`integrationsCreateConnection`](docs/sdks/integrations/README.md#createconnection) - Create a new integration connection
- [`integrationsCreateSlackEmojiAction`](docs/sdks/integrations/README.md#createslackemojiaction) - Create a new Slack emoji action
- [`integrationsDeleteSlackEmojiAction`](docs/sdks/integrations/README.md#deleteslackemojiaction) - Delete a Slack emoji action
- [`integrationsDeleteStatuspageConnection`](docs/sdks/integrations/README.md#deletestatuspageconnection) - Delete a Statuspage connection
- [`integrationsGetAwsCloudtrailBatch`](docs/sdks/integrations/README.md#getawscloudtrailbatch) - Get a CloudTrail batch
- [`integrationsGetAwsConnection`](docs/sdks/integrations/README.md#getawsconnection) - Get an AWS connection
- [`integrationsGetIntegration`](docs/sdks/integrations/README.md#getintegration) - Get an integration
- [`integrationsGetSlackEmojiAction`](docs/sdks/integrations/README.md#getslackemojiaction) - Get a Slack emoji action
- [`integrationsGetStatuspageConnection`](docs/sdks/integrations/README.md#getstatuspageconnection) - Get a Statuspage connection
- [`integrationsGetZendeskCustomerSupportIssue`](docs/sdks/integrations/README.md#getzendeskcustomersupportissue) - Search for Zendesk tickets
- [`integrationsListAuthedProviders`](docs/sdks/integrations/README.md#listauthedproviders) - Lists the available and configured integrations
- [`integrationsListAwsCloudtrailBatches`](docs/sdks/integrations/README.md#listawscloudtrailbatches) - List CloudTrail batches
- [`integrationsListAwsCloudtrailBatchEvents`](docs/sdks/integrations/README.md#listawscloudtrailbatchevents) - List events for an AWS CloudTrail batch
- [`integrationsListAwsConnections`](docs/sdks/integrations/README.md#listawsconnections) - List AWS connections
- [`integrationsListConnections`](docs/sdks/integrations/README.md#listconnections) - List integration connections
- [`integrationsListConnectionStatuses`](docs/sdks/integrations/README.md#listconnectionstatuses) - Get integration connection status
- [`integrationsListConnectionStatusesBySlug`](docs/sdks/integrations/README.md#listconnectionstatusesbyslug) - Get an integration connection status
- [`integrationsListConnectionStatusesBySlugAndId`](docs/sdks/integrations/README.md#listconnectionstatusesbyslugandid) - Get an integration connection status
- [`integrationsListFieldMapAvailableFields`](docs/sdks/integrations/README.md#listfieldmapavailablefields) - List available fields for field mapping
- [`integrationsListIntegrations`](docs/sdks/integrations/README.md#listintegrations) - List integrations
- [`integrationsListSlackEmojiActions`](docs/sdks/integrations/README.md#listslackemojiactions) - List Slack emoji actions
- [`integrationsListSlackUsergroups`](docs/sdks/integrations/README.md#listslackusergroups) - List Slack user groups
- [`integrationsListSlackWorkspaces`](docs/sdks/integrations/README.md#listslackworkspaces) - List Slack workspaces
- [`integrationsListStatuspageConnectionPages`](docs/sdks/integrations/README.md#liststatuspageconnectionpages) - List StatusPage pages for a connection
- [`integrationsListStatuspageConnections`](docs/sdks/integrations/README.md#liststatuspageconnections) - List Statuspage connections
- [`integrationsRefreshConnection`](docs/sdks/integrations/README.md#refreshconnection) - Refresh an integration connection
- [`integrationsSearchConfluenceSpaces`](docs/sdks/integrations/README.md#searchconfluencespaces) - List Confluence spaces
- [`integrationsSearchZendeskTickets`](docs/sdks/integrations/README.md#searchzendesktickets) - Search for Zendesk tickets
- [`integrationsUpdateAuthedProvider`](docs/sdks/integrations/README.md#updateauthedprovider) - Get an authed provider
- [`integrationsUpdateAwsCloudtrailBatch`](docs/sdks/integrations/README.md#updateawscloudtrailbatch) - Update a CloudTrail batch
- [`integrationsUpdateAwsConnection`](docs/sdks/integrations/README.md#updateawsconnection) - Update an AWS connection
- [`integrationsUpdateConnection`](docs/sdks/integrations/README.md#updateconnection) - Update an integration connection
- [`integrationsUpdateFieldMap`](docs/sdks/integrations/README.md#updatefieldmap) - Update field mapping
- [`integrationsUpdateSlackEmojiAction`](docs/sdks/integrations/README.md#updateslackemojiaction) - Update a Slack emoji action
- [`integrationsUpdateStatuspageConnection`](docs/sdks/integrations/README.md#updatestatuspageconnection) - Update a Statuspage connection
- [`metricsReportingCreateSavedSearch`](docs/sdks/metricsreporting/README.md#createsavedsearch) - Create a saved search
- [`metricsReportingDeleteSavedSearch`](docs/sdks/metricsreporting/README.md#deletesavedsearch) - Delete a saved search
- [`metricsReportingGetMeanTimeReport`](docs/sdks/metricsreporting/README.md#getmeantimereport) - Get mean time metrics for incidents
- [`metricsReportingGetSavedSearch`](docs/sdks/metricsreporting/README.md#getsavedsearch) - Get a saved search
- [`metricsReportingGetSignalsGroupedMetrics`](docs/sdks/metricsreporting/README.md#getsignalsgroupedmetrics) - Generate grouped alert metrics
- [`metricsReportingGetSignalsMttxAnalytics`](docs/sdks/metricsreporting/README.md#getsignalsmttxanalytics) - Get MTTX analytics for signals
- [`metricsReportingGetSignalsNoiseAnalytics`](docs/sdks/metricsreporting/README.md#getsignalsnoiseanalytics) - Get noise analytics for signals
- [`metricsReportingGetSignalsTimeseriesAnalytics`](docs/sdks/metricsreporting/README.md#getsignalstimeseriesanalytics) - Generate timeseries alert metrics
- [`metricsReportingListIncidentMetrics`](docs/sdks/metricsreporting/README.md#listincidentmetrics) - List incident metrics and analytics
- [`metricsReportingListInfrastructureMetrics`](docs/sdks/metricsreporting/README.md#listinfrastructuremetrics) - Get metrics for a component
- [`metricsReportingListInfrastructureTypeMetrics`](docs/sdks/metricsreporting/README.md#listinfrastructuretypemetrics) - List metrics for a component type
- [`metricsReportingListRetrospectiveMetrics`](docs/sdks/metricsreporting/README.md#listretrospectivemetrics) - List retrospective metrics
- [`metricsReportingListSavedSearches`](docs/sdks/metricsreporting/README.md#listsavedsearches) - List saved searches
- [`metricsReportingListUserInvolvementMetrics`](docs/sdks/metricsreporting/README.md#listuserinvolvementmetrics) - List user metrics
- [`metricsReportingUpdateSavedSearch`](docs/sdks/metricsreporting/README.md#updatesavedsearch) - Update a saved search
- [`retrospectivesCreateIncidentRetrospective`](docs/sdks/retrospectives/README.md#createincidentretrospective) - Create a new retrospective on the incident using the template
- [`retrospectivesCreateIncidentRetrospectiveDynamicInput`](docs/sdks/retrospectives/README.md#createincidentretrospectivedynamicinput) - Add a new dynamic input field to a retrospective's dynamic input group field
- [`retrospectivesCreateIncidentRetrospectiveField`](docs/sdks/retrospectives/README.md#createincidentretrospectivefield) - Appends a new incident retrospective field to an incident retrospective
- [`retrospectivesCreatePostMortemReason`](docs/sdks/retrospectives/README.md#createpostmortemreason) - Create a contributing factor for a retrospective report
- [`retrospectivesCreatePostMortemReport`](docs/sdks/retrospectives/README.md#createpostmortemreport) - Create a retrospective report
- [`retrospectivesCreateRetrospectiveTemplate`](docs/sdks/retrospectives/README.md#createretrospectivetemplate) - Create a retrospective template
- [`retrospectivesDeleteIncidentRetrospectiveDynamicInput`](docs/sdks/retrospectives/README.md#deleteincidentretrospectivedynamicinput) - Removes a dynamic input from a retrospective's dynamic input group field
- [`retrospectivesDeletePostMortemReason`](docs/sdks/retrospectives/README.md#deletepostmortemreason) - Delete a contributing factor from a retrospective report
- [`retrospectivesDeleteRetrospectiveTemplate`](docs/sdks/retrospectives/README.md#deleteretrospectivetemplate) - Delete a retrospective template
- [`retrospectivesExportIncidentRetrospectives`](docs/sdks/retrospectives/README.md#exportincidentretrospectives) - Export an incident's retrospective(s)
- [`retrospectivesGetIncidentRetrospectiveField`](docs/sdks/retrospectives/README.md#getincidentretrospectivefield) - Get a retrospective field
- [`retrospectivesGetPostMortemQuestion`](docs/sdks/retrospectives/README.md#getpostmortemquestion) - Get a retrospective question
- [`retrospectivesGetPostMortemReport`](docs/sdks/retrospectives/README.md#getpostmortemreport) - Get a retrospective report
- [`retrospectivesGetRetrospectiveTemplate`](docs/sdks/retrospectives/README.md#getretrospectivetemplate) - Get a retrospective template
- [`retrospectivesListIncidentRetrospectives`](docs/sdks/retrospectives/README.md#listincidentretrospectives) - All attached retrospectives for an incident
- [`retrospectivesListPostMortemQuestions`](docs/sdks/retrospectives/README.md#listpostmortemquestions) - List retrospective questions
- [`retrospectivesListPostMortemReasons`](docs/sdks/retrospectives/README.md#listpostmortemreasons) - List contributing factors for a retrospective report
- [`retrospectivesListPostMortemReports`](docs/sdks/retrospectives/README.md#listpostmortemreports) - List retrospective reports
- [`retrospectivesListRetrospectives`](docs/sdks/retrospectives/README.md#listretrospectives) - List retrospective reports
- [`retrospectivesListRetrospectiveTemplates`](docs/sdks/retrospectives/README.md#listretrospectivetemplates) - List retrospective templates
- [`retrospectivesPublishPostMortemReport`](docs/sdks/retrospectives/README.md#publishpostmortemreport) - Publish a retrospective report
- [`retrospectivesReorderPostMortemReasons`](docs/sdks/retrospectives/README.md#reorderpostmortemreasons) - Reorder a contributing factor for a retrospective report
- [`retrospectivesShareIncidentRetrospectives`](docs/sdks/retrospectives/README.md#shareincidentretrospectives) - Share an incident's retrospective
- [`retrospectivesUpdateIncidentRetrospective`](docs/sdks/retrospectives/README.md#updateincidentretrospective) - Update a retrospective on the incident
- [`retrospectivesUpdateIncidentRetrospectiveField`](docs/sdks/retrospectives/README.md#updateincidentretrospectivefield) - Update the value on a retrospective field
- [`retrospectivesUpdatePostMortemField`](docs/sdks/retrospectives/README.md#updatepostmortemfield) - Update a retrospective field
- [`retrospectivesUpdatePostMortemQuestions`](docs/sdks/retrospectives/README.md#updatepostmortemquestions) - Update retrospective questions
- [`retrospectivesUpdatePostMortemReason`](docs/sdks/retrospectives/README.md#updatepostmortemreason) - Update a contributing factor in a retrospective report
- [`retrospectivesUpdatePostMortemReport`](docs/sdks/retrospectives/README.md#updatepostmortemreport) - Update a retrospective report
- [`retrospectivesUpdateRetrospectiveTemplate`](docs/sdks/retrospectives/README.md#updateretrospectivetemplate) - Update a retrospective template
- [`runbooksCreateRunbook`](docs/sdks/runbooks/README.md#createrunbook) - Create a runbook
- [`runbooksCreateRunbookExecution`](docs/sdks/runbooks/README.md#createrunbookexecution) - Create a runbook execution
- [`runbooksDeleteRunbook`](docs/sdks/runbooks/README.md#deleterunbook) - Delete a runbook
- [`runbooksDeleteRunbookExecution`](docs/sdks/runbooks/README.md#deleterunbookexecution) - Terminate a runbook execution
- [`runbooksGetRunbook`](docs/sdks/runbooks/README.md#getrunbook) - Get a runbook
- [`runbooksGetRunbookActionFieldOptions`](docs/sdks/runbooks/README.md#getrunbookactionfieldoptions) - List select options for a runbook integration action field
- [`runbooksGetRunbookExecution`](docs/sdks/runbooks/README.md#getrunbookexecution) - Get a runbook execution
- [`runbooksGetRunbookExecutionStepScript`](docs/sdks/runbooks/README.md#getrunbookexecutionstepscript) - Get a step's bash script
- [`runbooksListRunbookActions`](docs/sdks/runbooks/README.md#listrunbookactions) - List runbook actions
- [`runbooksListRunbookAudits`](docs/sdks/runbooks/README.md#listrunbookaudits) - List runbook audits
- [`runbooksListRunbookExecutions`](docs/sdks/runbooks/README.md#listrunbookexecutions) - List runbook executions
- [`runbooksListRunbooks`](docs/sdks/runbooks/README.md#listrunbooks) - List runbooks
- [`runbooksUpdateRunbook`](docs/sdks/runbooks/README.md#updaterunbook) - Update a runbook
- [`runbooksUpdateRunbookExecutionStep`](docs/sdks/runbooks/README.md#updaterunbookexecutionstep) - Update a runbook step execution
- [`runbooksUpdateRunbookExecutionStepScript`](docs/sdks/runbooks/README.md#updaterunbookexecutionstepscript) - Update a script step's execution status
- [`scimCreateSCIMGroup`](docs/sdks/scim/README.md#createscimgroup) - Create a SCIM group and assign members
- [`scimCreateSCIMUser`](docs/sdks/scim/README.md#createscimuser) - Create a User from SCIM data
- [`scimDeleteSCIMGroup`](docs/sdks/scim/README.md#deletescimgroup) - Delete a SCIM group
- [`scimDeleteSCIMUser`](docs/sdks/scim/README.md#deletescimuser) - Delete a User matching SCIM data
- [`scimGetSCIMGroup`](docs/sdks/scim/README.md#getscimgroup) - Get a SCIM group
- [`scimGetSCIMUser`](docs/sdks/scim/README.md#getscimuser) - Get a SCIM user
- [`scimListSCIMGroups`](docs/sdks/scim/README.md#listscimgroups) - List SCIM groups
- [`scimListSCIMUsers`](docs/sdks/scim/README.md#listscimusers) - List SCIM users
- [`scimPatchSCIMUser`](docs/sdks/scim/README.md#patchscimuser) - Update a User from SCIM data
- [`scimUpdateSCIMGroup`](docs/sdks/scim/README.md#updatescimgroup) - Update a SCIM group and assign members
- [`scimUpdateSCIMUser`](docs/sdks/scim/README.md#updatescimuser) - Update a User from SCIM data
- [`signalsCreateOnCallShift`](docs/sdks/signals/README.md#createoncallshift) - Create a shift for an on-call schedule
- [`signalsCreateSignalsAlertGroupingConfiguration`](docs/sdks/signals/README.md#createsignalsalertgroupingconfiguration) - Create an alert grouping configuration.
- [`signalsCreateSignalsEmailTarget`](docs/sdks/signals/README.md#createsignalsemailtarget) - Create an email target for signals
- [`signalsCreateSignalsEventSource`](docs/sdks/signals/README.md#createsignalseventsource) - Create an event source for Signals
- [`signalsCreateSignalsWebhookTarget`](docs/sdks/signals/README.md#createsignalswebhooktarget) - Create a webhook target
- [`signalsCreateTeamEscalationPolicy`](docs/sdks/signals/README.md#createteamescalationpolicy) - Create an escalation policy for a team
- [`signalsCreateTeamOnCallSchedule`](docs/sdks/signals/README.md#createteamoncallschedule) - Create an on-call schedule for a team
- [`signalsCreateTeamSignalRule`](docs/sdks/signals/README.md#createteamsignalrule) - Create a Signals rule
- [`signalsDebugSignalsExpression`](docs/sdks/signals/README.md#debugsignalsexpression) - Debug Signals expressions
- [`signalsDeleteOnCallShift`](docs/sdks/signals/README.md#deleteoncallshift) - Delete an on-call shift from a team schedule
- [`signalsDeleteSignalsAlertGroupingConfiguration`](docs/sdks/signals/README.md#deletesignalsalertgroupingconfiguration) - Delete an alert grouping configuration.
- [`signalsDeleteSignalsEmailTarget`](docs/sdks/signals/README.md#deletesignalsemailtarget) - Delete a signal email target
- [`signalsDeleteSignalsEventSource`](docs/sdks/signals/README.md#deletesignalseventsource) - Delete an event source for Signals
- [`signalsDeleteSignalsWebhookTarget`](docs/sdks/signals/README.md#deletesignalswebhooktarget) - Delete a webhook target
- [`signalsDeleteTeamEscalationPolicy`](docs/sdks/signals/README.md#deleteteamescalationpolicy) - Delete an escalation policy for a team
- [`signalsDeleteTeamOnCallSchedule`](docs/sdks/signals/README.md#deleteteamoncallschedule) - Delete an on-call schedule for a team
- [`signalsDeleteTeamSignalRule`](docs/sdks/signals/README.md#deleteteamsignalrule) - Delete a Signals rule
- [`signalsGetOnCallShift`](docs/sdks/signals/README.md#getoncallshift) - Get an on-call shift for a team schedule
- [`signalsGetSignalsAlertGroupingConfiguration`](docs/sdks/signals/README.md#getsignalsalertgroupingconfiguration) - Get an alert grouping configuration.
- [`signalsGetSignalsEmailTarget`](docs/sdks/signals/README.md#getsignalsemailtarget) - Get a signal email target
- [`signalsGetSignalsEventSource`](docs/sdks/signals/README.md#getsignalseventsource) - Get an event source for Signals
- [`signalsGetSignalsHackerMode`](docs/sdks/signals/README.md#getsignalshackermode) - Get hacker mode status
- [`signalsGetSignalsIngestUrl`](docs/sdks/signals/README.md#getsignalsingesturl) - Get the signals ingestion URL
- [`signalsGetSignalsWebhookTarget`](docs/sdks/signals/README.md#getsignalswebhooktarget) - Get a webhook target
- [`signalsGetTeamEscalationPolicy`](docs/sdks/signals/README.md#getteamescalationpolicy) - Get an escalation policy for a team
- [`signalsGetTeamOnCallSchedule`](docs/sdks/signals/README.md#getteamoncallschedule) - Get an on-call schedule for a team
- [`signalsGetTeamSignalRule`](docs/sdks/signals/README.md#getteamsignalrule) - Get a Signals rule
- [`signalsListOrganizationOnCallSchedules`](docs/sdks/signals/README.md#listorganizationoncallschedules) - List who's on call for the organization
- [`signalsListSignalsAlertGroupingConfigurations`](docs/sdks/signals/README.md#listsignalsalertgroupingconfigurations) - List alert grouping configurations.
- [`signalsListSignalsEmailTargets`](docs/sdks/signals/README.md#listsignalsemailtargets) - List email targets for signals
- [`signalsListSignalsEventSources`](docs/sdks/signals/README.md#listsignalseventsources) - List event sources for Signals
- [`signalsListSignalsTransposers`](docs/sdks/signals/README.md#listsignalstransposers) - List signal transposers
- [`signalsListSignalsWebhookTargets`](docs/sdks/signals/README.md#listsignalswebhooktargets) - List webhook targets
- [`signalsListTeamEscalationPolicies`](docs/sdks/signals/README.md#listteamescalationpolicies) - List escalation policies for a team
- [`signalsListTeamOnCallSchedules`](docs/sdks/signals/README.md#listteamoncallschedules) - List on-call schedules for a team
- [`signalsListTeamSignalRules`](docs/sdks/signals/README.md#listteamsignalrules) - List Signals rules
- [`signalsUpdateOnCallShift`](docs/sdks/signals/README.md#updateoncallshift) - Update an on-call shift for a team schedule
- [`signalsUpdateSignalsAlertGroupingConfiguration`](docs/sdks/signals/README.md#updatesignalsalertgroupingconfiguration) - Update an alert grouping configuration.
- [`signalsUpdateSignalsEmailTarget`](docs/sdks/signals/README.md#updatesignalsemailtarget) - Update an email target
- [`signalsUpdateSignalsWebhookTarget`](docs/sdks/signals/README.md#updatesignalswebhooktarget) - Update a webhook target
- [`signalsUpdateTeamEscalationPolicy`](docs/sdks/signals/README.md#updateteamescalationpolicy) - Update an escalation policy for a team
- [`signalsUpdateTeamOnCallSchedule`](docs/sdks/signals/README.md#updateteamoncallschedule) - Update an on-call schedule for a team
- [`signalsUpdateTeamSignalRule`](docs/sdks/signals/README.md#updateteamsignalrule) - Update a Signals rule
- [`statusPagesCreateEmailSubscriber`](docs/sdks/statuspages/README.md#createemailsubscriber) - Add subscribers to a status page
- [`statusPagesCreateNuncComponentGroup`](docs/sdks/statuspages/README.md#createnunccomponentgroup) - Create a component group for a status page
- [`statusPagesCreateNuncConnection`](docs/sdks/statuspages/README.md#createnuncconnection) - Create a status page
- [`statusPagesCreateNuncLink`](docs/sdks/statuspages/README.md#createnunclink) - Add link to a status page
- [`statusPagesCreateNuncSubscription`](docs/sdks/statuspages/README.md#createnuncsubscription) - Create a status page subscription
- [`statusPagesDeleteEmailSubscriber`](docs/sdks/statuspages/README.md#deleteemailsubscriber) - Remove subscribers from a status page
- [`statusPagesDeleteIncidentStatusPage`](docs/sdks/statuspages/README.md#deleteincidentstatuspage) - Remove a status page from an incident
- [`statusPagesDeleteNuncComponentGroup`](docs/sdks/statuspages/README.md#deletenunccomponentgroup) - Delete a status page component group
- [`statusPagesDeleteNuncConnection`](docs/sdks/statuspages/README.md#deletenuncconnection) - Delete a status page
- [`statusPagesDeleteNuncImage`](docs/sdks/statuspages/README.md#deletenuncimage) - Delete an image from a status page
- [`statusPagesDeleteNuncLink`](docs/sdks/statuspages/README.md#deletenunclink) - Delete a status page link
- [`statusPagesDeleteNuncSubscription`](docs/sdks/statuspages/README.md#deletenuncsubscription) - Unsubscribe from status page notifications
- [`statusPagesGetNuncConnection`](docs/sdks/statuspages/README.md#getnuncconnection) - Get a status page
- [`statusPagesListEmailSubscribers`](docs/sdks/statuspages/README.md#listemailsubscribers) - List status page subscribers
- [`statusPagesListNuncConnections`](docs/sdks/statuspages/README.md#listnuncconnections) - List status pages
- [`statusPagesUpdateNuncComponentGroup`](docs/sdks/statuspages/README.md#updatenunccomponentgroup) - Update a status page component group
- [`statusPagesUpdateNuncConnection`](docs/sdks/statuspages/README.md#updatenuncconnection) - Update a status page
- [`statusPagesUpdateNuncImage`](docs/sdks/statuspages/README.md#updatenuncimage) - Upload an image for a status page
- [`statusPagesUpdateNuncLink`](docs/sdks/statuspages/README.md#updatenunclink) - Update a status page link
- [`tasksConvertIncidentTask`](docs/sdks/tasks/README.md#convertincidenttask) - Convert a task to a follow-up
- [`tasksCreateChecklistTemplate`](docs/sdks/tasks/README.md#createchecklisttemplate) - Create a checklist template
- [`tasksCreateIncidentTask`](docs/sdks/tasks/README.md#createincidenttask) - Create an incident task
- [`tasksCreateIncidentTaskList`](docs/sdks/tasks/README.md#createincidenttasklist) - Add tasks from a task list to an incident
- [`tasksCreateTaskList`](docs/sdks/tasks/README.md#createtasklist) - Create a task list
- [`tasksDeleteChecklistTemplate`](docs/sdks/tasks/README.md#deletechecklisttemplate) - Archive a checklist template
- [`tasksDeleteIncidentTask`](docs/sdks/tasks/README.md#deleteincidenttask) - Delete an incident task
- [`tasksDeleteTaskList`](docs/sdks/tasks/README.md#deletetasklist) - Delete a task list
- [`tasksGetChecklistTemplate`](docs/sdks/tasks/README.md#getchecklisttemplate) - Get a checklist template
- [`tasksGetIncidentTask`](docs/sdks/tasks/README.md#getincidenttask) - Get an incident task
- [`tasksGetTaskList`](docs/sdks/tasks/README.md#gettasklist) - Get a task list
- [`tasksListChecklistTemplates`](docs/sdks/tasks/README.md#listchecklisttemplates) - List checklist templates
- [`tasksListIncidentTasks`](docs/sdks/tasks/README.md#listincidenttasks) - List tasks for an incident
- [`tasksListTaskLists`](docs/sdks/tasks/README.md#listtasklists) - List task lists
- [`tasksUpdateChecklistTemplate`](docs/sdks/tasks/README.md#updatechecklisttemplate) - Update a checklist template
- [`tasksUpdateIncidentTask`](docs/sdks/tasks/README.md#updateincidenttask) - Update an incident task
- [`tasksUpdateTaskList`](docs/sdks/tasks/README.md#updatetasklist) - Update a task list
- [`teamsCreateTeam`](docs/sdks/teams/README.md#createteam) - Create a team
- [`teamsDeleteTeam`](docs/sdks/teams/README.md#deleteteam) - Archive a team
- [`teamsGetTeam`](docs/sdks/teams/README.md#getteam) - Get a team
- [`teamsListSchedules`](docs/sdks/teams/README.md#listschedules) - List schedules
- [`teamsListTeams`](docs/sdks/teams/README.md#listteams) - List teams
- [`teamsUpdateTeam`](docs/sdks/teams/README.md#updateteam) - Update a team
- [`ticketingCreateInboundFieldMap`](docs/sdks/ticketing/README.md#createinboundfieldmap) - Create inbound field map for a ticketing project
- [`ticketingCreateTicket`](docs/sdks/ticketing/README.md#createticket) - Create a ticket
- [`ticketingCreateTicketingFieldMap`](docs/sdks/ticketing/README.md#createticketingfieldmap) - Create a field mapping for a ticketing project
- [`ticketingCreateTicketingPriority`](docs/sdks/ticketing/README.md#createticketingpriority) - Create a ticketing priority
- [`ticketingCreateTicketingProjectConfig`](docs/sdks/ticketing/README.md#createticketingprojectconfig) - Create a ticketing project configuration
- [`ticketingDeleteInboundFieldMap`](docs/sdks/ticketing/README.md#deleteinboundfieldmap) - Archive inbound field map for a ticketing project
- [`ticketingDeleteTicket`](docs/sdks/ticketing/README.md#deleteticket) - Archive a ticket
- [`ticketingDeleteTicketingFieldMap`](docs/sdks/ticketing/README.md#deleteticketingfieldmap) - Archive a field map for a ticketing project
- [`ticketingDeleteTicketingPriority`](docs/sdks/ticketing/README.md#deleteticketingpriority) - Delete a ticketing priority
- [`ticketingDeleteTicketingProjectConfig`](docs/sdks/ticketing/README.md#deleteticketingprojectconfig) - Archive a ticketing project configuration
- [`ticketingGetConfigurationOptions`](docs/sdks/ticketing/README.md#getconfigurationoptions) - List configuration options for a ticketing project
- [`ticketingGetInboundFieldMap`](docs/sdks/ticketing/README.md#getinboundfieldmap) - Get inbound field map for a ticketing project
- [`ticketingGetOptionsForField`](docs/sdks/ticketing/README.md#getoptionsforfield) - List a field's configuration options for a ticketing project
- [`ticketingGetTicket`](docs/sdks/ticketing/README.md#getticket) - Get a ticket
- [`ticketingGetTicketingFieldMap`](docs/sdks/ticketing/README.md#getticketingfieldmap) - Get a field map for a ticketing project
- [`ticketingGetTicketingPriority`](docs/sdks/ticketing/README.md#getticketingpriority) - Get a ticketing priority
- [`ticketingGetTicketingProject`](docs/sdks/ticketing/README.md#getticketingproject) - Get a ticketing project
- [`ticketingGetTicketingProjectConfig`](docs/sdks/ticketing/README.md#getticketingprojectconfig) - Get configuration for a ticketing project
- [`ticketingListAvailableInboundFieldMaps`](docs/sdks/ticketing/README.md#listavailableinboundfieldmaps) - List available fields for ticket field mapping
- [`ticketingListAvailableTicketingFieldMaps`](docs/sdks/ticketing/README.md#listavailableticketingfieldmaps) - List available fields for ticket field mapping
- [`ticketingListInboundFieldMaps`](docs/sdks/ticketing/README.md#listinboundfieldmaps) - List inbound field maps for a ticketing project
- [`ticketingListTicketingPriorities`](docs/sdks/ticketing/README.md#listticketingpriorities) - List ticketing priorities
- [`ticketingListTicketingProjects`](docs/sdks/ticketing/README.md#listticketingprojects) - List ticketing projects
- [`ticketingListTickets`](docs/sdks/ticketing/README.md#listtickets) - List tickets
- [`ticketingListTicketTags`](docs/sdks/ticketing/README.md#listtickettags) - List ticket tags
- [`ticketingUpdateInboundFieldMap`](docs/sdks/ticketing/README.md#updateinboundfieldmap) - Update inbound field map for a ticketing project
- [`ticketingUpdateTicket`](docs/sdks/ticketing/README.md#updateticket) - Update a ticket
- [`ticketingUpdateTicketingFieldMap`](docs/sdks/ticketing/README.md#updateticketingfieldmap) - Update a field map for a ticketing project
- [`ticketingUpdateTicketingPriority`](docs/sdks/ticketing/README.md#updateticketingpriority) - Update a ticketing priority
- [`ticketingUpdateTicketingProjectConfig`](docs/sdks/ticketing/README.md#updateticketingprojectconfig) - Update configuration for a ticketing project
- [`usersGetCurrentUser`](docs/sdks/users/README.md#getcurrentuser) - Get the currently authenticated user
- [`usersGetUser`](docs/sdks/users/README.md#getuser) - Get a user
- [`usersListUsers`](docs/sdks/users/README.md#listusers) - List users
- [`webhooksCreateWebhook`](docs/sdks/webhooks/README.md#createwebhook) - Create a webhook
- [`webhooksDeleteWebhook`](docs/sdks/webhooks/README.md#deletewebhook) - Delete a webhook
- [`webhooksGetWebhook`](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
- [`webhooksListWebhookDeliveries`](docs/sdks/webhooks/README.md#listwebhookdeliveries) - List webhook deliveries
- [`webhooksListWebhooks`](docs/sdks/webhooks/README.md#listwebhooks) - List webhooks
- [`webhooksUpdateWebhook`](docs/sdks/webhooks/README.md#updatewebhook) - Update a webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";
import { openAsBlob } from "node:fs";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentAttachment({
    incidentId: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`FirehydrantError`](./src/models/errors/firehydranterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";
import * as errors from "firehydrant-typescript-sdk/models/errors";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await firehydrant.catalogEntries.createService({
      name: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.FirehydrantError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorEntity) {
        console.log(error.data$.detail); // string
        console.log(error.data$.messages); // string[]
        console.log(error.data$.meta); // errors.Meta
        console.log(error.data$.code); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`FirehydrantError`](./src/models/errors/firehydranterror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`FirehydrantError`](./src/models/errors/firehydranterror.ts)**:
* [`ErrorEntity`](./src/models/errors/errorentity.ts): ErrorEntity model. Applicable to 12 of 427 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  serverURL: "https://api.firehydrant.io/",
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";
import { HTTPClient } from "firehydrant-typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Firehydrant({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const sdk = new Firehydrant({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `FIREHYDRANT_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=firehydrant-typescript-sdk&utm_campaign=typescript)
