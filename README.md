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


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [firehydrant-typescript-sdk](#firehydrant-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/firehydrant/firehydrant-typescript-sdk
```

### PNPM

```bash
pnpm add https://github.com/firehydrant/firehydrant-typescript-sdk
```

### Bun

```bash
bun add https://github.com/firehydrant/firehydrant-typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/firehydrant/firehydrant-typescript-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable               |
| -------- | ------ | ------- | ---------------------------------- |
| `apiKey` | apiKey | API key | `FIREHYDRANTTYPESCRIPTSDK_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences();

  // Handle the result
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

* [getAiPreferences](docs/sdks/accountsettings/README.md#getaipreferences) - Get AI preferences
* [updateAiPreferences](docs/sdks/accountsettings/README.md#updateaipreferences) - Update AI preferences
* [voteOnIncidentSummary](docs/sdks/accountsettings/README.md#voteonincidentsummary) - Vote on an AI-generated incident summary
* [getBootstrap](docs/sdks/accountsettings/README.md#getbootstrap) - Get initial application configuration and settings
* [listEntitlements](docs/sdks/accountsettings/README.md#listentitlements) - List entitlements
* [ping](docs/sdks/accountsettings/README.md#ping) - Check API connectivity
* [getSavedSearch](docs/sdks/accountsettings/README.md#getsavedsearch) - Get a saved search
* [deleteSavedSearch](docs/sdks/accountsettings/README.md#deletesavedsearch) - Delete a saved search
* [updateSavedSearch](docs/sdks/accountsettings/README.md#updatesavedsearch) - Update a saved search

### [alerts](docs/sdks/alerts/README.md)

* [list](docs/sdks/alerts/README.md#list) - List alerts
* [get](docs/sdks/alerts/README.md#get) - Get an alert
* [listForIncident](docs/sdks/alerts/README.md#listforincident) - List alerts for an incident
* [create](docs/sdks/alerts/README.md#create) - Attach alerts to an incident
* [listProcessingLogs](docs/sdks/alerts/README.md#listprocessinglogs) - List alert processing log entries

### [awsCloudtrailBatchEvents](docs/sdks/awscloudtrailbatchevents/README.md)

* [list](docs/sdks/awscloudtrailbatchevents/README.md#list) - List events for an AWS CloudTrail batch

### [awsConnections](docs/sdks/awsconnections/README.md)

* [list](docs/sdks/awsconnections/README.md#list) - List AWS integration connections
* [get](docs/sdks/awsconnections/README.md#get) - Get an AWS connection

### [changes](docs/sdks/changes/README.md)

* [listTypes](docs/sdks/changes/README.md#listtypes) - List change types
* [list](docs/sdks/changes/README.md#list) - List changes
* [create](docs/sdks/changes/README.md#create) - Create a change
* [listEvents](docs/sdks/changes/README.md#listevents) - List change events
* [createEvent](docs/sdks/changes/README.md#createevent) - Create a change event
* [getEvent](docs/sdks/changes/README.md#getevent) - Get a change event
* [deleteEvent](docs/sdks/changes/README.md#deleteevent) - Delete a change event
* [updateEvent](docs/sdks/changes/README.md#updateevent) - Update a change event
* [delete](docs/sdks/changes/README.md#delete) - Archive a change
* [update](docs/sdks/changes/README.md#update) - Update a change
* [listIdentities](docs/sdks/changes/README.md#listidentities) - List identities for a change
* [createIdentity](docs/sdks/changes/README.md#createidentity) - Create an identity for a change
* [deleteIdentity](docs/sdks/changes/README.md#deleteidentity) - Delete an identity from a change
* [updateIdentity](docs/sdks/changes/README.md#updateidentity) - Update an identity for a change
* [get](docs/sdks/changes/README.md#get) - Get a scheduled maintenance event
* [updateScheduledMaintenance](docs/sdks/changes/README.md#updatescheduledmaintenance) - Update a scheduled maintenance event

### [checklistTemplates](docs/sdks/checklisttemplates/README.md)

* [get](docs/sdks/checklisttemplates/README.md#get) - Get a checklist template

### [communication](docs/sdks/communication/README.md)

* [listTemplates](docs/sdks/communication/README.md#listtemplates) - List status update templates
* [getTemplate](docs/sdks/communication/README.md#gettemplate) - Get a status update template
* [deleteStatusUpdateTemplate](docs/sdks/communication/README.md#deletestatusupdatetemplate) - Delete a status update template
* [updateTemplate](docs/sdks/communication/README.md#updatetemplate) - Update a status update template

### [confluence](docs/sdks/confluence/README.md)

* [listSpaces](docs/sdks/confluence/README.md#listspaces) - List Confluence spaces

### [conversations](docs/sdks/conversations/README.md)

* [listComments](docs/sdks/conversations/README.md#listcomments) - List comments for a conversation
* [createComment](docs/sdks/conversations/README.md#createcomment) - Create a comment for a conversation
* [getComment](docs/sdks/conversations/README.md#getcomment) - Get a conversation comment
* [deleteComment](docs/sdks/conversations/README.md#deletecomment) - Delete a conversation comment
* [updateComment](docs/sdks/conversations/README.md#updatecomment) - Update a conversation comment
* [listCommentReactions](docs/sdks/conversations/README.md#listcommentreactions) - List reactions for a conversation comment
* [createCommentReaction](docs/sdks/conversations/README.md#createcommentreaction) - Create a reaction for a conversation comment
* [deleteCommentReaction](docs/sdks/conversations/README.md#deletecommentreaction) - Delete a reaction from a conversation comment

### [environments](docs/sdks/environments/README.md)

* [list](docs/sdks/environments/README.md#list) - List environments
* [create](docs/sdks/environments/README.md#create) - Create an environment
* [get](docs/sdks/environments/README.md#get) - Get an environment
* [delete](docs/sdks/environments/README.md#delete) - Archive an environment
* [update](docs/sdks/environments/README.md#update) - Update an environment


### [functionalities](docs/sdks/functionalities/README.md)

* [list](docs/sdks/functionalities/README.md#list) - List functionalities
* [create](docs/sdks/functionalities/README.md#create) - Create a functionality
* [get](docs/sdks/functionalities/README.md#get) - Get a functionality
* [delete](docs/sdks/functionalities/README.md#delete) - Archive a functionality
* [update](docs/sdks/functionalities/README.md#update) - Update a functionality
* [listServices](docs/sdks/functionalities/README.md#listservices) - List services for a functionality

### [incidents](docs/sdks/incidents/README.md)

* [getAiSummaryVoteStatus](docs/sdks/incidents/README.md#getaisummaryvotestatus) - Get the vote status for an AI-generated incident summary
* [list](docs/sdks/incidents/README.md#list) - List incidents
* [create](docs/sdks/incidents/README.md#create) - Create an incident
* [get](docs/sdks/incidents/README.md#get) - Get an incident
* [archive](docs/sdks/incidents/README.md#archive) - Archive an incident
* [update](docs/sdks/incidents/README.md#update) - Update an incident
* [deleteAlert](docs/sdks/incidents/README.md#deletealert) - Delete an alert from an incident
* [setAlertAsPrimary](docs/sdks/incidents/README.md#setalertasprimary) - Set an alert as primary for an incident
* [listAttachments](docs/sdks/incidents/README.md#listattachments) - List attachments for an incident
* [createAttachment](docs/sdks/incidents/README.md#createattachment) - Create an attachment for an incident
* [getChannel](docs/sdks/incidents/README.md#getchannel) - Get chat channel information for an incident
* [close](docs/sdks/incidents/README.md#close) - Close an incident
* [listEvents](docs/sdks/incidents/README.md#listevents) - List events for an incident
* [getEvent](docs/sdks/incidents/README.md#getevent) - Get an incident event
* [deleteEvent](docs/sdks/incidents/README.md#deleteevent) - Delete an incident event
* [updateEvent](docs/sdks/incidents/README.md#updateevent) - Update an incident event
* [updateEventVotes](docs/sdks/incidents/README.md#updateeventvotes) - Update votes for an incident event
* [getEventVoteStatus](docs/sdks/incidents/README.md#geteventvotestatus) - Get vote counts for an incident event
* [createGenericChatMessage](docs/sdks/incidents/README.md#creategenericchatmessage) - Create a chat message for an incident
* [deleteChatMessage](docs/sdks/incidents/README.md#deletechatmessage) - Delete a chat message from an incident
* [updateChatMessage](docs/sdks/incidents/README.md#updatechatmessage) - Update a chat message in an incident
* [updateImpacts](docs/sdks/incidents/README.md#updateimpacts) - Replace all impacts for an incident
* [partialUpdateImpacts](docs/sdks/incidents/README.md#partialupdateimpacts) - Update impacts for an incident
* [listImpact](docs/sdks/incidents/README.md#listimpact) - List impacted infrastructure for an incident
* [createImpact](docs/sdks/incidents/README.md#createimpact) - Add impacted infrastructure to an incident
* [deleteImpact](docs/sdks/incidents/README.md#deleteimpact) - Remove impacted infrastructure from an incident
* [listLinks](docs/sdks/incidents/README.md#listlinks) - List links for an incident
* [createLink](docs/sdks/incidents/README.md#createlink) - Create a link for an incident
* [updateLink](docs/sdks/incidents/README.md#updatelink) - Update an external link for an incident
* [deleteLink](docs/sdks/incidents/README.md#deletelink) - Delete an external link from an incident
* [listMilestones](docs/sdks/incidents/README.md#listmilestones) - List milestones for an incident
* [updateMilestonesBulk](docs/sdks/incidents/README.md#updatemilestonesbulk) - Bulk update milestone timestamps for an incident
* [createNote](docs/sdks/incidents/README.md#createnote) - Create a note for an incident
* [updateNote](docs/sdks/incidents/README.md#updatenote) - Update a note for an incident
* [listRelatedChangeEvents](docs/sdks/incidents/README.md#listrelatedchangeevents) - List related changes for an incident
* [createRelatedChange](docs/sdks/incidents/README.md#createrelatedchange) - Add a related change to an incident
* [updateRelatedChangeEvent](docs/sdks/incidents/README.md#updaterelatedchangeevent) - Update a related change event for an incident
* [getRelationships](docs/sdks/incidents/README.md#getrelationships) - List incident relationships
* [resolve](docs/sdks/incidents/README.md#resolve) - Resolve an incident
* [listRoleAssignments](docs/sdks/incidents/README.md#listroleassignments) - List role assignments for an incident
* [createRoleAssignment](docs/sdks/incidents/README.md#createroleassignment) - Create a role assignment for an incident
* [deleteRoleAssignment](docs/sdks/incidents/README.md#deleteroleassignment) - Delete a role assignment from an incident
* [listSimilar](docs/sdks/incidents/README.md#listsimilar) - List similar incidents
* [listStatusPages](docs/sdks/incidents/README.md#liststatuspages) - List status pages for an incident
* [addStatusPage](docs/sdks/incidents/README.md#addstatuspage) - Add a status page to an incident
* [createTaskList](docs/sdks/incidents/README.md#createtasklist) - Add tasks from a task list to an incident
* [createTeamAssignment](docs/sdks/incidents/README.md#createteamassignment) - Assign a team to an incident
* [deleteTeamAssignment](docs/sdks/incidents/README.md#deleteteamassignment) - Remove a team assignment from an incident
* [getTranscript](docs/sdks/incidents/README.md#gettranscript) - List transcript messages for an incident
* [deleteTranscript](docs/sdks/incidents/README.md#deletetranscript) - Delete a transcript from an incident
* [unarchive](docs/sdks/incidents/README.md#unarchive) - Unarchive an incident
* [getUserRole](docs/sdks/incidents/README.md#getuserrole) - Get a user's role in an incident

### [incidentSettings](docs/sdks/incidentsettings/README.md)

* [listCustomFieldDefinitions](docs/sdks/incidentsettings/README.md#listcustomfielddefinitions) - List custom field definitions
* [createCustomFieldDefinition](docs/sdks/incidentsettings/README.md#createcustomfielddefinition) - Create a custom field definition
* [deleteCustomFieldDefinition](docs/sdks/incidentsettings/README.md#deletecustomfielddefinition) - Delete a custom field definition
* [updateCustomFieldDefinition](docs/sdks/incidentsettings/README.md#updatecustomfielddefinition) - Update a custom field definition
* [listSelectOptions](docs/sdks/incidentsettings/README.md#listselectoptions) - List select options for a custom field
* [getFormConfiguration](docs/sdks/incidentsettings/README.md#getformconfiguration) - Get a form configuration
* [listRoles](docs/sdks/incidentsettings/README.md#listroles) - List incident roles
* [createIncidentRole](docs/sdks/incidentsettings/README.md#createincidentrole) - Create an incident role
* [getIncidentRole](docs/sdks/incidentsettings/README.md#getincidentrole) - Get an incident role
* [deleteRole](docs/sdks/incidentsettings/README.md#deleterole) - Archive an incident role
* [updateIncidentRole](docs/sdks/incidentsettings/README.md#updateincidentrole) - Update an incident role
* [listIncidentTags](docs/sdks/incidentsettings/README.md#listincidenttags) - List incident tags
* [validateIncidentTags](docs/sdks/incidentsettings/README.md#validateincidenttags) - Validate incident tags
* [listIncidentTypes](docs/sdks/incidentsettings/README.md#listincidenttypes) - List incident types
* [createIncidentType](docs/sdks/incidentsettings/README.md#createincidenttype) - Create an incident type
* [getIncidentType](docs/sdks/incidentsettings/README.md#getincidenttype) - Get an incident type
* [archiveIncidentType](docs/sdks/incidentsettings/README.md#archiveincidenttype) - Archive an incident type
* [updateType](docs/sdks/incidentsettings/README.md#updatetype) - Update an incident type
* [createMilestone](docs/sdks/incidentsettings/README.md#createmilestone) - Create a milestone for an incident lifecycle
* [deleteLifecycleMilestone](docs/sdks/incidentsettings/README.md#deletelifecyclemilestone) - Delete a lifecycle milestone
* [updateLifecycleMilestone](docs/sdks/incidentsettings/README.md#updatelifecyclemilestone) - Update a lifecycle milestone
* [listLifecyclePhases](docs/sdks/incidentsettings/README.md#listlifecyclephases) - List lifecycle phases and milestones
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
* [updateCondition](docs/sdks/incidentsettings/README.md#updatecondition) - Update a severity matrix condition
* [listSeverityMatrixImpacts](docs/sdks/incidentsettings/README.md#listseveritymatriximpacts) - List severity matrix impacts
* [createImpact](docs/sdks/incidentsettings/README.md#createimpact) - Create a severity matrix impact
* [deleteSeverityMatrixImpact](docs/sdks/incidentsettings/README.md#deleteseveritymatriximpact) - Delete an impact from the severity matrix
* [updateImpact](docs/sdks/incidentsettings/README.md#updateimpact) - Update an impact in the severity matrix
* [listTicketingPriorities](docs/sdks/incidentsettings/README.md#listticketingpriorities) - List ticketing priorities
* [createTicketingPriority](docs/sdks/incidentsettings/README.md#createticketingpriority) - Create a ticketing priority

### [infrastructures](docs/sdks/infrastructures/README.md)

* [list](docs/sdks/infrastructures/README.md#list) - List catalog entries

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List all available integrations
* [listCloudtrailBatches](docs/sdks/integrations/README.md#listcloudtrailbatches) - List AWS CloudTrail batches
* [updateCloudTrailBatch](docs/sdks/integrations/README.md#updatecloudtrailbatch) - Update an AWS CloudTrail batch
* [listConnections](docs/sdks/integrations/README.md#listconnections) - List integration connections
* [createConnection](docs/sdks/integrations/README.md#createconnection) - Create a new integration connection
* [updateConnection](docs/sdks/integrations/README.md#updateconnection) - Update an integration connection
* [refreshConnection](docs/sdks/integrations/README.md#refreshconnection) - Refresh an integration connection
* [updateFieldMap](docs/sdks/integrations/README.md#updatefieldmap) - Update a field mapping configuration
* [getFieldMapAvailableFields](docs/sdks/integrations/README.md#getfieldmapavailablefields) - List available fields for field mapping
* [listEmojiActions](docs/sdks/integrations/README.md#listemojiactions) - List Slack emoji actions
* [getStatus](docs/sdks/integrations/README.md#getstatus) - Get an integration status
* [getStatuspageConnection](docs/sdks/integrations/README.md#getstatuspageconnection) - Get a Statuspage connection
* [deleteStatuspageConnection](docs/sdks/integrations/README.md#deletestatuspageconnection) - Delete a Statuspage connection
* [get](docs/sdks/integrations/README.md#get) - Get an integration
* [deletePriority](docs/sdks/integrations/README.md#deletepriority) - Delete a ticketing priority
* [updatePriority](docs/sdks/integrations/README.md#updatepriority) - Update a ticketing priority
* [listProjects](docs/sdks/integrations/README.md#listprojects) - List ticketing projects
* [getProjectConfigurationOptions](docs/sdks/integrations/README.md#getprojectconfigurationoptions) - List configuration options for a ticketing project
* [getProjectFieldOptions](docs/sdks/integrations/README.md#getprojectfieldoptions) - List configuration options for a ticketing project field
* [createFieldMap](docs/sdks/integrations/README.md#createfieldmap) - Create a field mapping for a ticketing project
* [getAvailableFields](docs/sdks/integrations/README.md#getavailablefields) - List available fields for ticket field mapping
* [deleteFieldMap](docs/sdks/integrations/README.md#deletefieldmap) - Delete a field map for a ticketing project
* [updateTicketingFieldMap](docs/sdks/integrations/README.md#updateticketingfieldmap) - Update a field map for a ticketing project
* [deleteProjectConfig](docs/sdks/integrations/README.md#deleteprojectconfig) - Delete a ticketing project configuration
* [getTicket](docs/sdks/integrations/README.md#getticket) - Get a ticket

#### [integrations.aws](docs/sdks/aws/README.md)

* [getCloudTrailBatch](docs/sdks/aws/README.md#getcloudtrailbatch) - Get an AWS CloudTrail batch
* [updateConnection](docs/sdks/aws/README.md#updateconnection) - Update an AWS connection

#### [integrations.slack](docs/sdks/firehydranttypescriptsdkslack/README.md)

* [getEmojiAction](docs/sdks/firehydranttypescriptsdkslack/README.md#getemojiaction) - Get a Slack emoji action
* [deleteEmojiAction](docs/sdks/firehydranttypescriptsdkslack/README.md#deleteemojiaction) - Delete a Slack emoji action
* [listWorkspaces](docs/sdks/firehydranttypescriptsdkslack/README.md#listworkspaces) - List Slack workspaces for a connection

#### [integrations.statuspage](docs/sdks/firehydranttypescriptsdkstatuspage/README.md)

* [listConnections](docs/sdks/firehydranttypescriptsdkstatuspage/README.md#listconnections) - List Statuspage connections
* [listPages](docs/sdks/firehydranttypescriptsdkstatuspage/README.md#listpages) - List StatusPage pages for a connection

#### [integrations.ticketing](docs/sdks/firehydranttypescriptsdkticketing/README.md)

* [getProject](docs/sdks/firehydranttypescriptsdkticketing/README.md#getproject) - Get a ticketing project
* [listTags](docs/sdks/firehydranttypescriptsdkticketing/README.md#listtags) - List ticket tags

### [maintenances](docs/sdks/maintenances/README.md)

* [list](docs/sdks/maintenances/README.md#list) - List scheduled maintenance events
* [create](docs/sdks/maintenances/README.md#create) - Create a scheduled maintenance event
* [delete](docs/sdks/maintenances/README.md#delete) - Delete a scheduled maintenance event

### [metrics](docs/sdks/metrics/README.md)

* [getInfrastructure](docs/sdks/metrics/README.md#getinfrastructure) - Get metrics for a specific catalog entry

### [metricsReporting](docs/sdks/metricsreporting/README.md)

* [listMeasurementDefinitions](docs/sdks/metricsreporting/README.md#listmeasurementdefinitions) - List measurement definitions
* [createMeasurementDefinition](docs/sdks/metricsreporting/README.md#createmeasurementdefinition) - Create a measurement definition
* [getMeasurementDefinition](docs/sdks/metricsreporting/README.md#getmeasurementdefinition) - Get a measurement definition
* [deleteMeasurementDefinition](docs/sdks/metricsreporting/README.md#deletemeasurementdefinition) - Archive a measurement definition
* [updateMeasurementDefinition](docs/sdks/metricsreporting/README.md#updatemeasurementdefinition) - Update a measurement definition
* [listIncidentMetrics](docs/sdks/metricsreporting/README.md#listincidentmetrics) - List incident metrics and analytics
* [listRetrospectives](docs/sdks/metricsreporting/README.md#listretrospectives) - List retrospective metrics for a date range
* [listUserInvolvementMetrics](docs/sdks/metricsreporting/README.md#listuserinvolvementmetrics) - List user involvement metrics
* [listInfrastructureMetrics](docs/sdks/metricsreporting/README.md#listinfrastructuremetrics) - List metrics for all services, environments, functionalities, or customers
* [getMeanTime](docs/sdks/metricsreporting/README.md#getmeantime) - Get mean time metrics for incidents
* [listSavedSearches](docs/sdks/metricsreporting/README.md#listsavedsearches) - List saved searches
* [createSavedSearch](docs/sdks/metricsreporting/README.md#createsavedsearch) - Create a saved search

### [onCallSchedules](docs/sdks/oncallschedules/README.md)

* [delete](docs/sdks/oncallschedules/README.md#delete) - Delete an on-call schedule for a team

### [projectConfigurations](docs/sdks/projectconfigurations/README.md)

* [create](docs/sdks/projectconfigurations/README.md#create) - Create a ticketing project configuration
* [get](docs/sdks/projectconfigurations/README.md#get) - Get a ticketing project configuration

### [retrospectives](docs/sdks/retrospectives/README.md)

* [listQuestions](docs/sdks/retrospectives/README.md#listquestions) - List retrospective questions
* [updateQuestions](docs/sdks/retrospectives/README.md#updatequestions) - Update retrospective questions
* [getQuestion](docs/sdks/retrospectives/README.md#getquestion) - Get a retrospective question
* [listReports](docs/sdks/retrospectives/README.md#listreports) - List retrospective reports
* [createReport](docs/sdks/retrospectives/README.md#createreport) - Create a retrospective report
* [getReport](docs/sdks/retrospectives/README.md#getreport) - Get a retrospective report
* [updateReport](docs/sdks/retrospectives/README.md#updatereport) - Update a retrospective report
* [updateField](docs/sdks/retrospectives/README.md#updatefield) - Update a retrospective field
* [publishReport](docs/sdks/retrospectives/README.md#publishreport) - Publish a retrospective report
* [listReportReasons](docs/sdks/retrospectives/README.md#listreportreasons) - List contributing factors for a retrospective report
* [createReason](docs/sdks/retrospectives/README.md#createreason) - Create a contributing factor for a retrospective report
* [updateReportReasonOrder](docs/sdks/retrospectives/README.md#updatereportreasonorder) - Update the order of contributing factors in a retrospective report
* [deleteReason](docs/sdks/retrospectives/README.md#deletereason) - Delete a contributing factor from a retrospective report
* [updateReason](docs/sdks/retrospectives/README.md#updatereason) - Update a contributing factor in a retrospective report

### [runbooks](docs/sdks/runbooks/README.md)

* [listAudits](docs/sdks/runbooks/README.md#listaudits) - List runbook audits
* [list](docs/sdks/runbooks/README.md#list) - List runbooks
* [create](docs/sdks/runbooks/README.md#create) - Create a runbook
* [listActions](docs/sdks/runbooks/README.md#listactions) - List runbook actions
* [listExecutions](docs/sdks/runbooks/README.md#listexecutions) - List runbook executions
* [createExecution](docs/sdks/runbooks/README.md#createexecution) - Create a runbook execution
* [getExecution](docs/sdks/runbooks/README.md#getexecution) - Get a runbook execution
* [updateExecutionStep](docs/sdks/runbooks/README.md#updateexecutionstep) - Update a runbook execution step
* [getExecutionStepScript](docs/sdks/runbooks/README.md#getexecutionstepscript) - Get a runbook execution step script
* [updateExecutionStepScriptState](docs/sdks/runbooks/README.md#updateexecutionstepscriptstate) - Update the script state for a runbook execution step
* [updateExecutionStepVotes](docs/sdks/runbooks/README.md#updateexecutionstepvotes) - Update votes for a runbook execution step
* [getStepVoteStatus](docs/sdks/runbooks/README.md#getstepvotestatus) - Get vote counts for a runbook step
* [updateExecutionVotes](docs/sdks/runbooks/README.md#updateexecutionvotes) - Vote on a runbook execution
* [getExecutionVoteStatus](docs/sdks/runbooks/README.md#getexecutionvotestatus) - Get vote counts for a runbook execution
* [listSelectOptions](docs/sdks/runbooks/README.md#listselectoptions) - List select options for a runbook integration action field
* [get](docs/sdks/runbooks/README.md#get) - Get a runbook
* [update](docs/sdks/runbooks/README.md#update) - Update a runbook
* [delete](docs/sdks/runbooks/README.md#delete) - Delete a runbook

#### [runbooks.executions](docs/sdks/executions/README.md)

* [delete](docs/sdks/executions/README.md#delete) - Terminate a runbook execution

### [scim](docs/sdks/scim/README.md)

* [listGroups](docs/sdks/scim/README.md#listgroups) - List teams via SCIM
* [create](docs/sdks/scim/README.md#create) - Create a team via SCIM
* [getGroup](docs/sdks/scim/README.md#getgroup) - Get a SCIM group
* [updateGroup](docs/sdks/scim/README.md#updategroup) - Update a SCIM group
* [deleteGroup](docs/sdks/scim/README.md#deletegroup) - Delete a SCIM group
* [listUsers](docs/sdks/scim/README.md#listusers) - List users via SCIM
* [createUser](docs/sdks/scim/README.md#createuser) - Create a user via SCIM
* [getUser](docs/sdks/scim/README.md#getuser) - Get a SCIM user
* [replaceUser](docs/sdks/scim/README.md#replaceuser) - Replace a SCIM user
* [deleteUser](docs/sdks/scim/README.md#deleteuser) - Delete a SCIM user
* [updateUser](docs/sdks/scim/README.md#updateuser) - Update a SCIM user

### [services](docs/sdks/services/README.md)

* [createDependency](docs/sdks/services/README.md#createdependency) - Create a dependency relationship between services
* [getDependency](docs/sdks/services/README.md#getdependency) - Get a service dependency
* [deleteDependency](docs/sdks/services/README.md#deletedependency) - Delete a service dependency
* [update](docs/sdks/services/README.md#update) - Update a service dependency
* [list](docs/sdks/services/README.md#list) - List services
* [create](docs/sdks/services/README.md#create) - Create a service
* [createLinks](docs/sdks/services/README.md#createlinks) - Create multiple services and link them to external services
* [get](docs/sdks/services/README.md#get) - Get a service
* [delete](docs/sdks/services/README.md#delete) - Delete a service
* [patch](docs/sdks/services/README.md#patch) - Update a service
* [getAvailableDownstreamDependencies](docs/sdks/services/README.md#getavailabledownstreamdependencies) - List available downstream service dependencies
* [listAvailableUpstreamDependencies](docs/sdks/services/README.md#listavailableupstreamdependencies) - List available upstream service dependencies
* [createChecklistResponse](docs/sdks/services/README.md#createchecklistresponse) - Create a checklist response for a service
* [listDependencies](docs/sdks/services/README.md#listdependencies) - List dependencies for a service
* [deleteLink](docs/sdks/services/README.md#deletelink) - Delete a service link
* [listForUser](docs/sdks/services/README.md#listforuser) - List services for a user's teams

#### [services.catalogs](docs/sdks/catalogs/README.md)

* [ingest](docs/sdks/catalogs/README.md#ingest) - Ingest service catalog data
* [refresh](docs/sdks/catalogs/README.md#refresh) - Refresh a service catalog

### [signals](docs/sdks/signals/README.md)

* [listGroupedMetrics](docs/sdks/signals/README.md#listgroupedmetrics) - List grouped signal alert metrics
* [getMttxAnalytics](docs/sdks/signals/README.md#getmttxanalytics) - Get MTTX analytics for signals
* [getAnalyticsTimeseries](docs/sdks/signals/README.md#getanalyticstimeseries) - List timeseries metrics for signal alerts
* [debug](docs/sdks/signals/README.md#debug) - Debug a signal
* [listEmailTargets](docs/sdks/signals/README.md#listemailtargets) - List email targets for signals
* [createEmailTarget](docs/sdks/signals/README.md#createemailtarget) - Create an email target for signals
* [getEmailTarget](docs/sdks/signals/README.md#getemailtarget) - Get a signal email target
* [deleteEmailTarget](docs/sdks/signals/README.md#deleteemailtarget) - Delete a signal email target
* [updateEmailTarget](docs/sdks/signals/README.md#updateemailtarget) - Update a signal email target
* [listEventSources](docs/sdks/signals/README.md#listeventsources) - List event sources for signals
* [getIngestUrl](docs/sdks/signals/README.md#getingesturl) - Get signal ingestion URL
* [listTransposers](docs/sdks/signals/README.md#listtransposers) - List signal transposers
* [listWebhookTargets](docs/sdks/signals/README.md#listwebhooktargets) - List webhook targets for signals
* [createWebhookTarget](docs/sdks/signals/README.md#createwebhooktarget) - Create a webhook target for signals
* [getWebhookTarget](docs/sdks/signals/README.md#getwebhooktarget) - Get a webhook target
* [deleteWebhookTarget](docs/sdks/signals/README.md#deletewebhooktarget) - Delete a webhook target
* [updateWebhookTarget](docs/sdks/signals/README.md#updatewebhooktarget) - Update a webhook target
* [listOnCall](docs/sdks/signals/README.md#listoncall) - List on-call schedules
* [listEscalationPolicies](docs/sdks/signals/README.md#listescalationpolicies) - List escalation policies for a team
* [deleteEscalationPolicy](docs/sdks/signals/README.md#deleteescalationpolicy) - Delete an escalation policy for a team
* [getOnCallSchedule](docs/sdks/signals/README.md#getoncallschedule) - Get an on-call schedule for a team
* [updateOnCallSchedule](docs/sdks/signals/README.md#updateoncallschedule) - Update an on-call schedule for a team
* [listRules](docs/sdks/signals/README.md#listrules) - List signal rules for a team
* [createRule](docs/sdks/signals/README.md#createrule) - Create a signal rule for a team
* [getRule](docs/sdks/signals/README.md#getrule) - Get a signal rule
* [deleteRule](docs/sdks/signals/README.md#deleterule) - Delete a signal rule
* [updateRule](docs/sdks/signals/README.md#updaterule) - Update a signal rule

#### [signals.teams](docs/sdks/firehydranttypescriptsdksignalsteams/README.md)

* [getEscalationPolicy](docs/sdks/firehydranttypescriptsdksignalsteams/README.md#getescalationpolicy) - Get an escalation policy for a team

### [slack](docs/sdks/slack/README.md)

* [createEmojiAction](docs/sdks/slack/README.md#createemojiaction) - Create a Slack emoji action
* [updateEmojiAction](docs/sdks/slack/README.md#updateemojiaction) - Update a Slack emoji action
* [listUsergroups](docs/sdks/slack/README.md#listusergroups) - List Slack usergroups

### [statuspage](docs/sdks/statuspage/README.md)

* [updateConnection](docs/sdks/statuspage/README.md#updateconnection) - Update a Statuspage connection

### [statusPages](docs/sdks/statuspages/README.md)

* [deleteIncident](docs/sdks/statuspages/README.md#deleteincident) - Remove a status page from an incident
* [createSubscription](docs/sdks/statuspages/README.md#createsubscription) - Create a status page subscription
* [deleteSubscription](docs/sdks/statuspages/README.md#deletesubscription) - Unsubscribe from status page notifications
* [list](docs/sdks/statuspages/README.md#list) - List status pages
* [create](docs/sdks/statuspages/README.md#create) - Create a status page
* [get](docs/sdks/statuspages/README.md#get) - Get a status page
* [update](docs/sdks/statuspages/README.md#update) - Update a status page
* [delete](docs/sdks/statuspages/README.md#delete) - Delete a status page
* [createComponentGroup](docs/sdks/statuspages/README.md#createcomponentgroup) - Create a component group for a status page
* [deleteComponentGroup](docs/sdks/statuspages/README.md#deletecomponentgroup) - Delete a status page component group
* [updateComponentGroup](docs/sdks/statuspages/README.md#updatecomponentgroup) - Update a status page component group
* [updateImage](docs/sdks/statuspages/README.md#updateimage) - Upload an image for a status page
* [deleteImage](docs/sdks/statuspages/README.md#deleteimage) - Delete an image from a status page
* [createLink](docs/sdks/statuspages/README.md#createlink) - Create a link for a status page
* [deleteLink](docs/sdks/statuspages/README.md#deletelink) - Delete a status page link
* [updateLink](docs/sdks/statuspages/README.md#updatelink) - Update a status page link
* [listSubscribers](docs/sdks/statuspages/README.md#listsubscribers) - List status page subscribers
* [createSubscribers](docs/sdks/statuspages/README.md#createsubscribers) - Add subscribers to a status page
* [deleteSubscribers](docs/sdks/statuspages/README.md#deletesubscribers) - Remove subscribers from a status page

### [statusUpdateTemplates](docs/sdks/statusupdatetemplates/README.md)

* [create](docs/sdks/statusupdatetemplates/README.md#create) - Create a status update template

### [system](docs/sdks/system/README.md)

* [ping](docs/sdks/system/README.md#ping) - Check API connectivity

### [tasks](docs/sdks/tasks/README.md)

* [listChecklistTemplates](docs/sdks/tasks/README.md#listchecklisttemplates) - List checklist templates
* [createChecklistTemplate](docs/sdks/tasks/README.md#createchecklisttemplate) - Create a checklist template
* [deleteChecklistTemplate](docs/sdks/tasks/README.md#deletechecklisttemplate) - Archive a checklist template
* [updateChecklistTemplate](docs/sdks/tasks/README.md#updatechecklisttemplate) - Update a checklist template
* [listForIncident](docs/sdks/tasks/README.md#listforincident) - List tasks for an incident
* [create](docs/sdks/tasks/README.md#create) - Create a task for an incident
* [getForIncident](docs/sdks/tasks/README.md#getforincident) - Get a task for an incident
* [delete](docs/sdks/tasks/README.md#delete) - Delete a task from an incident
* [updateTask](docs/sdks/tasks/README.md#updatetask) - Update a task for an incident
* [convertToFollowup](docs/sdks/tasks/README.md#converttofollowup) - Convert a task to a follow-up
* [listTasks](docs/sdks/tasks/README.md#listtasks) - List task lists
* [createList](docs/sdks/tasks/README.md#createlist) - Create a task list
* [get](docs/sdks/tasks/README.md#get) - Get a task list
* [update](docs/sdks/tasks/README.md#update) - Update a task list

#### [tasks.list](docs/sdks/list/README.md)

* [delete](docs/sdks/list/README.md#delete) - Delete a task list

### [teams](docs/sdks/teams/README.md)

* [listSchedules](docs/sdks/teams/README.md#listschedules) - List schedules
* [list](docs/sdks/teams/README.md#list) - List teams
* [create](docs/sdks/teams/README.md#create) - Create a team
* [get](docs/sdks/teams/README.md#get) - Get a team
* [archive](docs/sdks/teams/README.md#archive) - Archive a team
* [update](docs/sdks/teams/README.md#update) - Update a team
* [listOnCallSchedules](docs/sdks/teams/README.md#listoncallschedules) - List on-call schedules for a team
* [createOnCallSchedule](docs/sdks/teams/README.md#createoncallschedule) - Create an on-call schedule for a team
* [getScheduleShift](docs/sdks/teams/README.md#getscheduleshift) - Get an on-call shift for a team schedule
* [deleteScheduleShift](docs/sdks/teams/README.md#deletescheduleshift) - Delete an on-call shift from a team schedule
* [updateScheduleShift](docs/sdks/teams/README.md#updatescheduleshift) - Update an on-call shift in a team schedule
* [createEscalationPolicy](docs/sdks/teams/README.md#createescalationpolicy) - Create an escalation policy for a team
* [updateEscalationPolicy](docs/sdks/teams/README.md#updateescalationpolicy) - Update an escalation policy for a team
* [createShift](docs/sdks/teams/README.md#createshift) - Create a shift for an on-call schedule

### [ticketing](docs/sdks/ticketing/README.md)

* [getFieldMap](docs/sdks/ticketing/README.md#getfieldmap) - Get a field map for a ticketing project
* [updateProjectConfig](docs/sdks/ticketing/README.md#updateprojectconfig) - Update a ticketing project configuration

### [ticketingPriorities](docs/sdks/ticketingpriorities/README.md)

* [get](docs/sdks/ticketingpriorities/README.md#get) - Get a ticketing priority

### [tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List tickets
* [create](docs/sdks/tickets/README.md#create) - Create a ticket
* [delete](docs/sdks/tickets/README.md#delete) - Delete a ticket
* [update](docs/sdks/tickets/README.md#update) - Update a ticket

### [users](docs/sdks/users/README.md)

* [getCurrent](docs/sdks/users/README.md#getcurrent) - Get the currently authenticated user
* [list](docs/sdks/users/README.md#list) - List users
* [get](docs/sdks/users/README.md#get) - Get a user

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook
* [update](docs/sdks/webhooks/README.md#update) - Update a webhook
* [listDeliveries](docs/sdks/webhooks/README.md#listdeliveries) - List webhook deliveries

### [zendesk](docs/sdks/zendesk/README.md)

* [searchTickets](docs/sdks/zendesk/README.md#searchtickets) - Search for Zendesk tickets

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

- [`accountSettingsDeleteSavedSearch`](docs/sdks/accountsettings/README.md#deletesavedsearch) - Delete a saved search
- [`accountSettingsGetAiPreferences`](docs/sdks/accountsettings/README.md#getaipreferences) - Get AI preferences
- [`accountSettingsGetBootstrap`](docs/sdks/accountsettings/README.md#getbootstrap) - Get initial application configuration and settings
- [`accountSettingsGetSavedSearch`](docs/sdks/accountsettings/README.md#getsavedsearch) - Get a saved search
- [`accountSettingsListEntitlements`](docs/sdks/accountsettings/README.md#listentitlements) - List entitlements
- [`accountSettingsPing`](docs/sdks/accountsettings/README.md#ping) - Check API connectivity
- [`accountSettingsUpdateAiPreferences`](docs/sdks/accountsettings/README.md#updateaipreferences) - Update AI preferences
- [`accountSettingsUpdateSavedSearch`](docs/sdks/accountsettings/README.md#updatesavedsearch) - Update a saved search
- [`accountSettingsVoteOnIncidentSummary`](docs/sdks/accountsettings/README.md#voteonincidentsummary) - Vote on an AI-generated incident summary
- [`alertsCreate`](docs/sdks/alerts/README.md#create) - Attach alerts to an incident
- [`alertsGet`](docs/sdks/alerts/README.md#get) - Get an alert
- [`alertsList`](docs/sdks/alerts/README.md#list) - List alerts
- [`alertsListForIncident`](docs/sdks/alerts/README.md#listforincident) - List alerts for an incident
- [`alertsListProcessingLogs`](docs/sdks/alerts/README.md#listprocessinglogs) - List alert processing log entries
- [`awsCloudtrailBatchEventsList`](docs/sdks/awscloudtrailbatchevents/README.md#list) - List events for an AWS CloudTrail batch
- [`awsConnectionsGet`](docs/sdks/awsconnections/README.md#get) - Get an AWS connection
- [`awsConnectionsList`](docs/sdks/awsconnections/README.md#list) - List AWS integration connections
- [`changesCreate`](docs/sdks/changes/README.md#create) - Create a change
- [`changesCreateEvent`](docs/sdks/changes/README.md#createevent) - Create a change event
- [`changesCreateIdentity`](docs/sdks/changes/README.md#createidentity) - Create an identity for a change
- [`changesDelete`](docs/sdks/changes/README.md#delete) - Archive a change
- [`changesDeleteEvent`](docs/sdks/changes/README.md#deleteevent) - Delete a change event
- [`changesDeleteIdentity`](docs/sdks/changes/README.md#deleteidentity) - Delete an identity from a change
- [`changesGet`](docs/sdks/changes/README.md#get) - Get a scheduled maintenance event
- [`changesGetEvent`](docs/sdks/changes/README.md#getevent) - Get a change event
- [`changesList`](docs/sdks/changes/README.md#list) - List changes
- [`changesListEvents`](docs/sdks/changes/README.md#listevents) - List change events
- [`changesListIdentities`](docs/sdks/changes/README.md#listidentities) - List identities for a change
- [`changesListTypes`](docs/sdks/changes/README.md#listtypes) - List change types
- [`changesUpdate`](docs/sdks/changes/README.md#update) - Update a change
- [`changesUpdateEvent`](docs/sdks/changes/README.md#updateevent) - Update a change event
- [`changesUpdateIdentity`](docs/sdks/changes/README.md#updateidentity) - Update an identity for a change
- [`changesUpdateScheduledMaintenance`](docs/sdks/changes/README.md#updatescheduledmaintenance) - Update a scheduled maintenance event
- [`checklistTemplatesGet`](docs/sdks/checklisttemplates/README.md#get) - Get a checklist template
- [`communicationDeleteStatusUpdateTemplate`](docs/sdks/communication/README.md#deletestatusupdatetemplate) - Delete a status update template
- [`communicationGetTemplate`](docs/sdks/communication/README.md#gettemplate) - Get a status update template
- [`communicationListTemplates`](docs/sdks/communication/README.md#listtemplates) - List status update templates
- [`communicationUpdateTemplate`](docs/sdks/communication/README.md#updatetemplate) - Update a status update template
- [`confluenceListSpaces`](docs/sdks/confluence/README.md#listspaces) - List Confluence spaces
- [`conversationsCreateComment`](docs/sdks/conversations/README.md#createcomment) - Create a comment for a conversation
- [`conversationsCreateCommentReaction`](docs/sdks/conversations/README.md#createcommentreaction) - Create a reaction for a conversation comment
- [`conversationsDeleteComment`](docs/sdks/conversations/README.md#deletecomment) - Delete a conversation comment
- [`conversationsDeleteCommentReaction`](docs/sdks/conversations/README.md#deletecommentreaction) - Delete a reaction from a conversation comment
- [`conversationsGetComment`](docs/sdks/conversations/README.md#getcomment) - Get a conversation comment
- [`conversationsListCommentReactions`](docs/sdks/conversations/README.md#listcommentreactions) - List reactions for a conversation comment
- [`conversationsListComments`](docs/sdks/conversations/README.md#listcomments) - List comments for a conversation
- [`conversationsUpdateComment`](docs/sdks/conversations/README.md#updatecomment) - Update a conversation comment
- [`environmentsCreate`](docs/sdks/environments/README.md#create) - Create an environment
- [`environmentsDelete`](docs/sdks/environments/README.md#delete) - Archive an environment
- [`environmentsGet`](docs/sdks/environments/README.md#get) - Get an environment
- [`environmentsList`](docs/sdks/environments/README.md#list) - List environments
- [`environmentsUpdate`](docs/sdks/environments/README.md#update) - Update an environment
- [`functionalitiesCreate`](docs/sdks/functionalities/README.md#create) - Create a functionality
- [`functionalitiesDelete`](docs/sdks/functionalities/README.md#delete) - Archive a functionality
- [`functionalitiesGet`](docs/sdks/functionalities/README.md#get) - Get a functionality
- [`functionalitiesList`](docs/sdks/functionalities/README.md#list) - List functionalities
- [`functionalitiesListServices`](docs/sdks/functionalities/README.md#listservices) - List services for a functionality
- [`functionalitiesUpdate`](docs/sdks/functionalities/README.md#update) - Update a functionality
- [`incidentsAddStatusPage`](docs/sdks/incidents/README.md#addstatuspage) - Add a status page to an incident
- [`incidentsArchive`](docs/sdks/incidents/README.md#archive) - Archive an incident
- [`incidentsClose`](docs/sdks/incidents/README.md#close) - Close an incident
- [`incidentsCreate`](docs/sdks/incidents/README.md#create) - Create an incident
- [`incidentsCreateAttachment`](docs/sdks/incidents/README.md#createattachment) - Create an attachment for an incident
- [`incidentsCreateGenericChatMessage`](docs/sdks/incidents/README.md#creategenericchatmessage) - Create a chat message for an incident
- [`incidentsCreateImpact`](docs/sdks/incidents/README.md#createimpact) - Add impacted infrastructure to an incident
- [`incidentsCreateLink`](docs/sdks/incidents/README.md#createlink) - Create a link for an incident
- [`incidentsCreateNote`](docs/sdks/incidents/README.md#createnote) - Create a note for an incident
- [`incidentsCreateRelatedChange`](docs/sdks/incidents/README.md#createrelatedchange) - Add a related change to an incident
- [`incidentsCreateRoleAssignment`](docs/sdks/incidents/README.md#createroleassignment) - Create a role assignment for an incident
- [`incidentsCreateTaskList`](docs/sdks/incidents/README.md#createtasklist) - Add tasks from a task list to an incident
- [`incidentsCreateTeamAssignment`](docs/sdks/incidents/README.md#createteamassignment) - Assign a team to an incident
- [`incidentsDeleteAlert`](docs/sdks/incidents/README.md#deletealert) - Delete an alert from an incident
- [`incidentsDeleteChatMessage`](docs/sdks/incidents/README.md#deletechatmessage) - Delete a chat message from an incident
- [`incidentsDeleteEvent`](docs/sdks/incidents/README.md#deleteevent) - Delete an incident event
- [`incidentsDeleteImpact`](docs/sdks/incidents/README.md#deleteimpact) - Remove impacted infrastructure from an incident
- [`incidentsDeleteLink`](docs/sdks/incidents/README.md#deletelink) - Delete an external link from an incident
- [`incidentsDeleteRoleAssignment`](docs/sdks/incidents/README.md#deleteroleassignment) - Delete a role assignment from an incident
- [`incidentsDeleteTeamAssignment`](docs/sdks/incidents/README.md#deleteteamassignment) - Remove a team assignment from an incident
- [`incidentsDeleteTranscript`](docs/sdks/incidents/README.md#deletetranscript) - Delete a transcript from an incident
- [`incidentSettingsArchiveIncidentType`](docs/sdks/incidentsettings/README.md#archiveincidenttype) - Archive an incident type
- [`incidentSettingsCreateCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#createcustomfielddefinition) - Create a custom field definition
- [`incidentSettingsCreateImpact`](docs/sdks/incidentsettings/README.md#createimpact) - Create a severity matrix impact
- [`incidentSettingsCreateIncidentRole`](docs/sdks/incidentsettings/README.md#createincidentrole) - Create an incident role
- [`incidentSettingsCreateIncidentType`](docs/sdks/incidentsettings/README.md#createincidenttype) - Create an incident type
- [`incidentSettingsCreateMilestone`](docs/sdks/incidentsettings/README.md#createmilestone) - Create a milestone for an incident lifecycle
- [`incidentSettingsCreatePriority`](docs/sdks/incidentsettings/README.md#createpriority) - Create a priority
- [`incidentSettingsCreateSeverity`](docs/sdks/incidentsettings/README.md#createseverity) - Create a severity
- [`incidentSettingsCreateSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#createseveritymatrixcondition) - Create a severity matrix condition
- [`incidentSettingsCreateTicketingPriority`](docs/sdks/incidentsettings/README.md#createticketingpriority) - Create a ticketing priority
- [`incidentSettingsDeleteCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#deletecustomfielddefinition) - Delete a custom field definition
- [`incidentSettingsDeleteLifecycleMilestone`](docs/sdks/incidentsettings/README.md#deletelifecyclemilestone) - Delete a lifecycle milestone
- [`incidentSettingsDeletePriority`](docs/sdks/incidentsettings/README.md#deletepriority) - Delete a priority
- [`incidentSettingsDeleteRole`](docs/sdks/incidentsettings/README.md#deleterole) - Archive an incident role
- [`incidentSettingsDeleteSeverity`](docs/sdks/incidentsettings/README.md#deleteseverity) - Delete a severity
- [`incidentSettingsDeleteSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#deleteseveritymatrixcondition) - Delete a severity matrix condition
- [`incidentSettingsDeleteSeverityMatrixImpact`](docs/sdks/incidentsettings/README.md#deleteseveritymatriximpact) - Delete an impact from the severity matrix
- [`incidentSettingsGetFormConfiguration`](docs/sdks/incidentsettings/README.md#getformconfiguration) - Get a form configuration
- [`incidentSettingsGetIncidentRole`](docs/sdks/incidentsettings/README.md#getincidentrole) - Get an incident role
- [`incidentSettingsGetIncidentType`](docs/sdks/incidentsettings/README.md#getincidenttype) - Get an incident type
- [`incidentSettingsGetPriority`](docs/sdks/incidentsettings/README.md#getpriority) - Get a priority
- [`incidentSettingsGetSeverity`](docs/sdks/incidentsettings/README.md#getseverity) - Get a severity
- [`incidentSettingsGetSeverityMatrix`](docs/sdks/incidentsettings/README.md#getseveritymatrix) - Get severity matrix
- [`incidentSettingsGetSeverityMatrixCondition`](docs/sdks/incidentsettings/README.md#getseveritymatrixcondition) - Get a severity matrix condition
- [`incidentSettingsListCustomFieldDefinitions`](docs/sdks/incidentsettings/README.md#listcustomfielddefinitions) - List custom field definitions
- [`incidentSettingsListIncidentTags`](docs/sdks/incidentsettings/README.md#listincidenttags) - List incident tags
- [`incidentSettingsListIncidentTypes`](docs/sdks/incidentsettings/README.md#listincidenttypes) - List incident types
- [`incidentSettingsListLifecyclePhases`](docs/sdks/incidentsettings/README.md#listlifecyclephases) - List lifecycle phases and milestones
- [`incidentSettingsListPriorities`](docs/sdks/incidentsettings/README.md#listpriorities) - List priorities
- [`incidentSettingsListRoles`](docs/sdks/incidentsettings/README.md#listroles) - List incident roles
- [`incidentSettingsListSelectOptions`](docs/sdks/incidentsettings/README.md#listselectoptions) - List select options for a custom field
- [`incidentSettingsListSeverities`](docs/sdks/incidentsettings/README.md#listseverities) - List severities
- [`incidentSettingsListSeverityMatrixConditions`](docs/sdks/incidentsettings/README.md#listseveritymatrixconditions) - List severity matrix conditions
- [`incidentSettingsListSeverityMatrixImpacts`](docs/sdks/incidentsettings/README.md#listseveritymatriximpacts) - List severity matrix impacts
- [`incidentSettingsListTicketingPriorities`](docs/sdks/incidentsettings/README.md#listticketingpriorities) - List ticketing priorities
- [`incidentSettingsUpdateCondition`](docs/sdks/incidentsettings/README.md#updatecondition) - Update a severity matrix condition
- [`incidentSettingsUpdateCustomFieldDefinition`](docs/sdks/incidentsettings/README.md#updatecustomfielddefinition) - Update a custom field definition
- [`incidentSettingsUpdateImpact`](docs/sdks/incidentsettings/README.md#updateimpact) - Update an impact in the severity matrix
- [`incidentSettingsUpdateIncidentRole`](docs/sdks/incidentsettings/README.md#updateincidentrole) - Update an incident role
- [`incidentSettingsUpdateLifecycleMilestone`](docs/sdks/incidentsettings/README.md#updatelifecyclemilestone) - Update a lifecycle milestone
- [`incidentSettingsUpdatePriority`](docs/sdks/incidentsettings/README.md#updatepriority) - Update a priority
- [`incidentSettingsUpdateSeverity`](docs/sdks/incidentsettings/README.md#updateseverity) - Update a severity
- [`incidentSettingsUpdateSeverityMatrix`](docs/sdks/incidentsettings/README.md#updateseveritymatrix) - Update severity matrix
- [`incidentSettingsUpdateType`](docs/sdks/incidentsettings/README.md#updatetype) - Update an incident type
- [`incidentSettingsValidateIncidentTags`](docs/sdks/incidentsettings/README.md#validateincidenttags) - Validate incident tags
- [`incidentsGet`](docs/sdks/incidents/README.md#get) - Get an incident
- [`incidentsGetAiSummaryVoteStatus`](docs/sdks/incidents/README.md#getaisummaryvotestatus) - Get the vote status for an AI-generated incident summary
- [`incidentsGetChannel`](docs/sdks/incidents/README.md#getchannel) - Get chat channel information for an incident
- [`incidentsGetEvent`](docs/sdks/incidents/README.md#getevent) - Get an incident event
- [`incidentsGetEventVoteStatus`](docs/sdks/incidents/README.md#geteventvotestatus) - Get vote counts for an incident event
- [`incidentsGetRelationships`](docs/sdks/incidents/README.md#getrelationships) - List incident relationships
- [`incidentsGetTranscript`](docs/sdks/incidents/README.md#gettranscript) - List transcript messages for an incident
- [`incidentsGetUserRole`](docs/sdks/incidents/README.md#getuserrole) - Get a user's role in an incident
- [`incidentsList`](docs/sdks/incidents/README.md#list) - List incidents
- [`incidentsListAttachments`](docs/sdks/incidents/README.md#listattachments) - List attachments for an incident
- [`incidentsListEvents`](docs/sdks/incidents/README.md#listevents) - List events for an incident
- [`incidentsListImpact`](docs/sdks/incidents/README.md#listimpact) - List impacted infrastructure for an incident
- [`incidentsListLinks`](docs/sdks/incidents/README.md#listlinks) - List links for an incident
- [`incidentsListMilestones`](docs/sdks/incidents/README.md#listmilestones) - List milestones for an incident
- [`incidentsListRelatedChangeEvents`](docs/sdks/incidents/README.md#listrelatedchangeevents) - List related changes for an incident
- [`incidentsListRoleAssignments`](docs/sdks/incidents/README.md#listroleassignments) - List role assignments for an incident
- [`incidentsListSimilar`](docs/sdks/incidents/README.md#listsimilar) - List similar incidents
- [`incidentsListStatusPages`](docs/sdks/incidents/README.md#liststatuspages) - List status pages for an incident
- [`incidentsPartialUpdateImpacts`](docs/sdks/incidents/README.md#partialupdateimpacts) - Update impacts for an incident
- [`incidentsResolve`](docs/sdks/incidents/README.md#resolve) - Resolve an incident
- [`incidentsSetAlertAsPrimary`](docs/sdks/incidents/README.md#setalertasprimary) - Set an alert as primary for an incident
- [`incidentsUnarchive`](docs/sdks/incidents/README.md#unarchive) - Unarchive an incident
- [`incidentsUpdate`](docs/sdks/incidents/README.md#update) - Update an incident
- [`incidentsUpdateChatMessage`](docs/sdks/incidents/README.md#updatechatmessage) - Update a chat message in an incident
- [`incidentsUpdateEvent`](docs/sdks/incidents/README.md#updateevent) - Update an incident event
- [`incidentsUpdateEventVotes`](docs/sdks/incidents/README.md#updateeventvotes) - Update votes for an incident event
- [`incidentsUpdateImpacts`](docs/sdks/incidents/README.md#updateimpacts) - Replace all impacts for an incident
- [`incidentsUpdateLink`](docs/sdks/incidents/README.md#updatelink) - Update an external link for an incident
- [`incidentsUpdateMilestonesBulk`](docs/sdks/incidents/README.md#updatemilestonesbulk) - Bulk update milestone timestamps for an incident
- [`incidentsUpdateNote`](docs/sdks/incidents/README.md#updatenote) - Update a note for an incident
- [`incidentsUpdateRelatedChangeEvent`](docs/sdks/incidents/README.md#updaterelatedchangeevent) - Update a related change event for an incident
- [`infrastructuresList`](docs/sdks/infrastructures/README.md#list) - List catalog entries
- [`integrationsAwsGetCloudTrailBatch`](docs/sdks/aws/README.md#getcloudtrailbatch) - Get an AWS CloudTrail batch
- [`integrationsAwsUpdateConnection`](docs/sdks/aws/README.md#updateconnection) - Update an AWS connection
- [`integrationsCreateConnection`](docs/sdks/integrations/README.md#createconnection) - Create a new integration connection
- [`integrationsCreateFieldMap`](docs/sdks/integrations/README.md#createfieldmap) - Create a field mapping for a ticketing project
- [`integrationsDeleteFieldMap`](docs/sdks/integrations/README.md#deletefieldmap) - Delete a field map for a ticketing project
- [`integrationsDeletePriority`](docs/sdks/integrations/README.md#deletepriority) - Delete a ticketing priority
- [`integrationsDeleteProjectConfig`](docs/sdks/integrations/README.md#deleteprojectconfig) - Delete a ticketing project configuration
- [`integrationsDeleteStatuspageConnection`](docs/sdks/integrations/README.md#deletestatuspageconnection) - Delete a Statuspage connection
- [`integrationsGet`](docs/sdks/integrations/README.md#get) - Get an integration
- [`integrationsGetAvailableFields`](docs/sdks/integrations/README.md#getavailablefields) - List available fields for ticket field mapping
- [`integrationsGetFieldMapAvailableFields`](docs/sdks/integrations/README.md#getfieldmapavailablefields) - List available fields for field mapping
- [`integrationsGetProjectConfigurationOptions`](docs/sdks/integrations/README.md#getprojectconfigurationoptions) - List configuration options for a ticketing project
- [`integrationsGetProjectFieldOptions`](docs/sdks/integrations/README.md#getprojectfieldoptions) - List configuration options for a ticketing project field
- [`integrationsGetStatus`](docs/sdks/integrations/README.md#getstatus) - Get an integration status
- [`integrationsGetStatuspageConnection`](docs/sdks/integrations/README.md#getstatuspageconnection) - Get a Statuspage connection
- [`integrationsGetTicket`](docs/sdks/integrations/README.md#getticket) - Get a ticket
- [`integrationsList`](docs/sdks/integrations/README.md#list) - List all available integrations
- [`integrationsListCloudtrailBatches`](docs/sdks/integrations/README.md#listcloudtrailbatches) - List AWS CloudTrail batches
- [`integrationsListConnections`](docs/sdks/integrations/README.md#listconnections) - List integration connections
- [`integrationsListEmojiActions`](docs/sdks/integrations/README.md#listemojiactions) - List Slack emoji actions
- [`integrationsListProjects`](docs/sdks/integrations/README.md#listprojects) - List ticketing projects
- [`integrationsRefreshConnection`](docs/sdks/integrations/README.md#refreshconnection) - Refresh an integration connection
- [`integrationsSlackDeleteEmojiAction`](docs/sdks/firehydranttypescriptsdkslack/README.md#deleteemojiaction) - Delete a Slack emoji action
- [`integrationsSlackGetEmojiAction`](docs/sdks/firehydranttypescriptsdkslack/README.md#getemojiaction) - Get a Slack emoji action
- [`integrationsSlackListWorkspaces`](docs/sdks/firehydranttypescriptsdkslack/README.md#listworkspaces) - List Slack workspaces for a connection
- [`integrationsStatuspageListConnections`](docs/sdks/firehydranttypescriptsdkstatuspage/README.md#listconnections) - List Statuspage connections
- [`integrationsStatuspageListPages`](docs/sdks/firehydranttypescriptsdkstatuspage/README.md#listpages) - List StatusPage pages for a connection
- [`integrationsTicketingGetProject`](docs/sdks/firehydranttypescriptsdkticketing/README.md#getproject) - Get a ticketing project
- [`integrationsTicketingListTags`](docs/sdks/firehydranttypescriptsdkticketing/README.md#listtags) - List ticket tags
- [`integrationsUpdateCloudTrailBatch`](docs/sdks/integrations/README.md#updatecloudtrailbatch) - Update an AWS CloudTrail batch
- [`integrationsUpdateConnection`](docs/sdks/integrations/README.md#updateconnection) - Update an integration connection
- [`integrationsUpdateFieldMap`](docs/sdks/integrations/README.md#updatefieldmap) - Update a field mapping configuration
- [`integrationsUpdatePriority`](docs/sdks/integrations/README.md#updatepriority) - Update a ticketing priority
- [`integrationsUpdateTicketingFieldMap`](docs/sdks/integrations/README.md#updateticketingfieldmap) - Update a field map for a ticketing project
- [`maintenancesCreate`](docs/sdks/maintenances/README.md#create) - Create a scheduled maintenance event
- [`maintenancesDelete`](docs/sdks/maintenances/README.md#delete) - Delete a scheduled maintenance event
- [`maintenancesList`](docs/sdks/maintenances/README.md#list) - List scheduled maintenance events
- [`metricsGetInfrastructure`](docs/sdks/metrics/README.md#getinfrastructure) - Get metrics for a specific catalog entry
- [`metricsReportingCreateMeasurementDefinition`](docs/sdks/metricsreporting/README.md#createmeasurementdefinition) - Create a measurement definition
- [`metricsReportingCreateSavedSearch`](docs/sdks/metricsreporting/README.md#createsavedsearch) - Create a saved search
- [`metricsReportingDeleteMeasurementDefinition`](docs/sdks/metricsreporting/README.md#deletemeasurementdefinition) - Archive a measurement definition
- [`metricsReportingGetMeanTime`](docs/sdks/metricsreporting/README.md#getmeantime) - Get mean time metrics for incidents
- [`metricsReportingGetMeasurementDefinition`](docs/sdks/metricsreporting/README.md#getmeasurementdefinition) - Get a measurement definition
- [`metricsReportingListIncidentMetrics`](docs/sdks/metricsreporting/README.md#listincidentmetrics) - List incident metrics and analytics
- [`metricsReportingListInfrastructureMetrics`](docs/sdks/metricsreporting/README.md#listinfrastructuremetrics) - List metrics for all services, environments, functionalities, or customers
- [`metricsReportingListMeasurementDefinitions`](docs/sdks/metricsreporting/README.md#listmeasurementdefinitions) - List measurement definitions
- [`metricsReportingListRetrospectives`](docs/sdks/metricsreporting/README.md#listretrospectives) - List retrospective metrics for a date range
- [`metricsReportingListSavedSearches`](docs/sdks/metricsreporting/README.md#listsavedsearches) - List saved searches
- [`metricsReportingListUserInvolvementMetrics`](docs/sdks/metricsreporting/README.md#listuserinvolvementmetrics) - List user involvement metrics
- [`metricsReportingUpdateMeasurementDefinition`](docs/sdks/metricsreporting/README.md#updatemeasurementdefinition) - Update a measurement definition
- [`onCallSchedulesDelete`](docs/sdks/oncallschedules/README.md#delete) - Delete an on-call schedule for a team
- [`projectConfigurationsCreate`](docs/sdks/projectconfigurations/README.md#create) - Create a ticketing project configuration
- [`projectConfigurationsGet`](docs/sdks/projectconfigurations/README.md#get) - Get a ticketing project configuration
- [`retrospectivesCreateReason`](docs/sdks/retrospectives/README.md#createreason) - Create a contributing factor for a retrospective report
- [`retrospectivesCreateReport`](docs/sdks/retrospectives/README.md#createreport) - Create a retrospective report
- [`retrospectivesDeleteReason`](docs/sdks/retrospectives/README.md#deletereason) - Delete a contributing factor from a retrospective report
- [`retrospectivesGetQuestion`](docs/sdks/retrospectives/README.md#getquestion) - Get a retrospective question
- [`retrospectivesGetReport`](docs/sdks/retrospectives/README.md#getreport) - Get a retrospective report
- [`retrospectivesListQuestions`](docs/sdks/retrospectives/README.md#listquestions) - List retrospective questions
- [`retrospectivesListReportReasons`](docs/sdks/retrospectives/README.md#listreportreasons) - List contributing factors for a retrospective report
- [`retrospectivesListReports`](docs/sdks/retrospectives/README.md#listreports) - List retrospective reports
- [`retrospectivesPublishReport`](docs/sdks/retrospectives/README.md#publishreport) - Publish a retrospective report
- [`retrospectivesUpdateField`](docs/sdks/retrospectives/README.md#updatefield) - Update a retrospective field
- [`retrospectivesUpdateQuestions`](docs/sdks/retrospectives/README.md#updatequestions) - Update retrospective questions
- [`retrospectivesUpdateReason`](docs/sdks/retrospectives/README.md#updatereason) - Update a contributing factor in a retrospective report
- [`retrospectivesUpdateReport`](docs/sdks/retrospectives/README.md#updatereport) - Update a retrospective report
- [`retrospectivesUpdateReportReasonOrder`](docs/sdks/retrospectives/README.md#updatereportreasonorder) - Update the order of contributing factors in a retrospective report
- [`runbooksCreate`](docs/sdks/runbooks/README.md#create) - Create a runbook
- [`runbooksCreateExecution`](docs/sdks/runbooks/README.md#createexecution) - Create a runbook execution
- [`runbooksDelete`](docs/sdks/runbooks/README.md#delete) - Delete a runbook
- [`runbooksExecutionsDelete`](docs/sdks/executions/README.md#delete) - Terminate a runbook execution
- [`runbooksGet`](docs/sdks/runbooks/README.md#get) - Get a runbook
- [`runbooksGetExecution`](docs/sdks/runbooks/README.md#getexecution) - Get a runbook execution
- [`runbooksGetExecutionStepScript`](docs/sdks/runbooks/README.md#getexecutionstepscript) - Get a runbook execution step script
- [`runbooksGetExecutionVoteStatus`](docs/sdks/runbooks/README.md#getexecutionvotestatus) - Get vote counts for a runbook execution
- [`runbooksGetStepVoteStatus`](docs/sdks/runbooks/README.md#getstepvotestatus) - Get vote counts for a runbook step
- [`runbooksList`](docs/sdks/runbooks/README.md#list) - List runbooks
- [`runbooksListActions`](docs/sdks/runbooks/README.md#listactions) - List runbook actions
- [`runbooksListAudits`](docs/sdks/runbooks/README.md#listaudits) - List runbook audits
- [`runbooksListExecutions`](docs/sdks/runbooks/README.md#listexecutions) - List runbook executions
- [`runbooksListSelectOptions`](docs/sdks/runbooks/README.md#listselectoptions) - List select options for a runbook integration action field
- [`runbooksUpdate`](docs/sdks/runbooks/README.md#update) - Update a runbook
- [`runbooksUpdateExecutionStep`](docs/sdks/runbooks/README.md#updateexecutionstep) - Update a runbook execution step
- [`runbooksUpdateExecutionStepScriptState`](docs/sdks/runbooks/README.md#updateexecutionstepscriptstate) - Update the script state for a runbook execution step
- [`runbooksUpdateExecutionStepVotes`](docs/sdks/runbooks/README.md#updateexecutionstepvotes) - Update votes for a runbook execution step
- [`runbooksUpdateExecutionVotes`](docs/sdks/runbooks/README.md#updateexecutionvotes) - Vote on a runbook execution
- [`scimCreate`](docs/sdks/scim/README.md#create) - Create a team via SCIM
- [`scimCreateUser`](docs/sdks/scim/README.md#createuser) - Create a user via SCIM
- [`scimDeleteGroup`](docs/sdks/scim/README.md#deletegroup) - Delete a SCIM group
- [`scimDeleteUser`](docs/sdks/scim/README.md#deleteuser) - Delete a SCIM user
- [`scimGetGroup`](docs/sdks/scim/README.md#getgroup) - Get a SCIM group
- [`scimGetUser`](docs/sdks/scim/README.md#getuser) - Get a SCIM user
- [`scimListGroups`](docs/sdks/scim/README.md#listgroups) - List teams via SCIM
- [`scimListUsers`](docs/sdks/scim/README.md#listusers) - List users via SCIM
- [`scimReplaceUser`](docs/sdks/scim/README.md#replaceuser) - Replace a SCIM user
- [`scimUpdateGroup`](docs/sdks/scim/README.md#updategroup) - Update a SCIM group
- [`scimUpdateUser`](docs/sdks/scim/README.md#updateuser) - Update a SCIM user
- [`servicesCatalogsIngest`](docs/sdks/catalogs/README.md#ingest) - Ingest service catalog data
- [`servicesCatalogsRefresh`](docs/sdks/catalogs/README.md#refresh) - Refresh a service catalog
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create a service
- [`servicesCreateChecklistResponse`](docs/sdks/services/README.md#createchecklistresponse) - Create a checklist response for a service
- [`servicesCreateDependency`](docs/sdks/services/README.md#createdependency) - Create a dependency relationship between services
- [`servicesCreateLinks`](docs/sdks/services/README.md#createlinks) - Create multiple services and link them to external services
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete a service
- [`servicesDeleteDependency`](docs/sdks/services/README.md#deletedependency) - Delete a service dependency
- [`servicesDeleteLink`](docs/sdks/services/README.md#deletelink) - Delete a service link
- [`servicesGet`](docs/sdks/services/README.md#get) - Get a service
- [`servicesGetAvailableDownstreamDependencies`](docs/sdks/services/README.md#getavailabledownstreamdependencies) - List available downstream service dependencies
- [`servicesGetDependency`](docs/sdks/services/README.md#getdependency) - Get a service dependency
- [`servicesList`](docs/sdks/services/README.md#list) - List services
- [`servicesListAvailableUpstreamDependencies`](docs/sdks/services/README.md#listavailableupstreamdependencies) - List available upstream service dependencies
- [`servicesListDependencies`](docs/sdks/services/README.md#listdependencies) - List dependencies for a service
- [`servicesListForUser`](docs/sdks/services/README.md#listforuser) - List services for a user's teams
- [`servicesPatch`](docs/sdks/services/README.md#patch) - Update a service
- [`servicesUpdate`](docs/sdks/services/README.md#update) - Update a service dependency
- [`signalsCreateEmailTarget`](docs/sdks/signals/README.md#createemailtarget) - Create an email target for signals
- [`signalsCreateRule`](docs/sdks/signals/README.md#createrule) - Create a signal rule for a team
- [`signalsCreateWebhookTarget`](docs/sdks/signals/README.md#createwebhooktarget) - Create a webhook target for signals
- [`signalsDebug`](docs/sdks/signals/README.md#debug) - Debug a signal
- [`signalsDeleteEmailTarget`](docs/sdks/signals/README.md#deleteemailtarget) - Delete a signal email target
- [`signalsDeleteEscalationPolicy`](docs/sdks/signals/README.md#deleteescalationpolicy) - Delete an escalation policy for a team
- [`signalsDeleteRule`](docs/sdks/signals/README.md#deleterule) - Delete a signal rule
- [`signalsDeleteWebhookTarget`](docs/sdks/signals/README.md#deletewebhooktarget) - Delete a webhook target
- [`signalsGetAnalyticsTimeseries`](docs/sdks/signals/README.md#getanalyticstimeseries) - List timeseries metrics for signal alerts
- [`signalsGetEmailTarget`](docs/sdks/signals/README.md#getemailtarget) - Get a signal email target
- [`signalsGetIngestUrl`](docs/sdks/signals/README.md#getingesturl) - Get signal ingestion URL
- [`signalsGetMttxAnalytics`](docs/sdks/signals/README.md#getmttxanalytics) - Get MTTX analytics for signals
- [`signalsGetOnCallSchedule`](docs/sdks/signals/README.md#getoncallschedule) - Get an on-call schedule for a team
- [`signalsGetRule`](docs/sdks/signals/README.md#getrule) - Get a signal rule
- [`signalsGetWebhookTarget`](docs/sdks/signals/README.md#getwebhooktarget) - Get a webhook target
- [`signalsListEmailTargets`](docs/sdks/signals/README.md#listemailtargets) - List email targets for signals
- [`signalsListEscalationPolicies`](docs/sdks/signals/README.md#listescalationpolicies) - List escalation policies for a team
- [`signalsListEventSources`](docs/sdks/signals/README.md#listeventsources) - List event sources for signals
- [`signalsListGroupedMetrics`](docs/sdks/signals/README.md#listgroupedmetrics) - List grouped signal alert metrics
- [`signalsListOnCall`](docs/sdks/signals/README.md#listoncall) - List on-call schedules
- [`signalsListRules`](docs/sdks/signals/README.md#listrules) - List signal rules for a team
- [`signalsListTransposers`](docs/sdks/signals/README.md#listtransposers) - List signal transposers
- [`signalsListWebhookTargets`](docs/sdks/signals/README.md#listwebhooktargets) - List webhook targets for signals
- [`signalsTeamsGetEscalationPolicy`](docs/sdks/firehydranttypescriptsdksignalsteams/README.md#getescalationpolicy) - Get an escalation policy for a team
- [`signalsUpdateEmailTarget`](docs/sdks/signals/README.md#updateemailtarget) - Update a signal email target
- [`signalsUpdateOnCallSchedule`](docs/sdks/signals/README.md#updateoncallschedule) - Update an on-call schedule for a team
- [`signalsUpdateRule`](docs/sdks/signals/README.md#updaterule) - Update a signal rule
- [`signalsUpdateWebhookTarget`](docs/sdks/signals/README.md#updatewebhooktarget) - Update a webhook target
- [`slackCreateEmojiAction`](docs/sdks/slack/README.md#createemojiaction) - Create a Slack emoji action
- [`slackListUsergroups`](docs/sdks/slack/README.md#listusergroups) - List Slack usergroups
- [`slackUpdateEmojiAction`](docs/sdks/slack/README.md#updateemojiaction) - Update a Slack emoji action
- [`statusPagesCreate`](docs/sdks/statuspages/README.md#create) - Create a status page
- [`statusPagesCreateComponentGroup`](docs/sdks/statuspages/README.md#createcomponentgroup) - Create a component group for a status page
- [`statusPagesCreateLink`](docs/sdks/statuspages/README.md#createlink) - Create a link for a status page
- [`statusPagesCreateSubscribers`](docs/sdks/statuspages/README.md#createsubscribers) - Add subscribers to a status page
- [`statusPagesCreateSubscription`](docs/sdks/statuspages/README.md#createsubscription) - Create a status page subscription
- [`statusPagesDelete`](docs/sdks/statuspages/README.md#delete) - Delete a status page
- [`statusPagesDeleteComponentGroup`](docs/sdks/statuspages/README.md#deletecomponentgroup) - Delete a status page component group
- [`statusPagesDeleteImage`](docs/sdks/statuspages/README.md#deleteimage) - Delete an image from a status page
- [`statusPagesDeleteIncident`](docs/sdks/statuspages/README.md#deleteincident) - Remove a status page from an incident
- [`statusPagesDeleteLink`](docs/sdks/statuspages/README.md#deletelink) - Delete a status page link
- [`statusPagesDeleteSubscribers`](docs/sdks/statuspages/README.md#deletesubscribers) - Remove subscribers from a status page
- [`statusPagesDeleteSubscription`](docs/sdks/statuspages/README.md#deletesubscription) - Unsubscribe from status page notifications
- [`statusPagesGet`](docs/sdks/statuspages/README.md#get) - Get a status page
- [`statusPagesList`](docs/sdks/statuspages/README.md#list) - List status pages
- [`statusPagesListSubscribers`](docs/sdks/statuspages/README.md#listsubscribers) - List status page subscribers
- [`statusPagesUpdate`](docs/sdks/statuspages/README.md#update) - Update a status page
- [`statusPagesUpdateComponentGroup`](docs/sdks/statuspages/README.md#updatecomponentgroup) - Update a status page component group
- [`statusPagesUpdateImage`](docs/sdks/statuspages/README.md#updateimage) - Upload an image for a status page
- [`statusPagesUpdateLink`](docs/sdks/statuspages/README.md#updatelink) - Update a status page link
- [`statuspageUpdateConnection`](docs/sdks/statuspage/README.md#updateconnection) - Update a Statuspage connection
- [`statusUpdateTemplatesCreate`](docs/sdks/statusupdatetemplates/README.md#create) - Create a status update template
- [`systemPing`](docs/sdks/system/README.md#ping) - Check API connectivity
- [`tasksConvertToFollowup`](docs/sdks/tasks/README.md#converttofollowup) - Convert a task to a follow-up
- [`tasksCreate`](docs/sdks/tasks/README.md#create) - Create a task for an incident
- [`tasksCreateChecklistTemplate`](docs/sdks/tasks/README.md#createchecklisttemplate) - Create a checklist template
- [`tasksCreateList`](docs/sdks/tasks/README.md#createlist) - Create a task list
- [`tasksDelete`](docs/sdks/tasks/README.md#delete) - Delete a task from an incident
- [`tasksDeleteChecklistTemplate`](docs/sdks/tasks/README.md#deletechecklisttemplate) - Archive a checklist template
- [`tasksGet`](docs/sdks/tasks/README.md#get) - Get a task list
- [`tasksGetForIncident`](docs/sdks/tasks/README.md#getforincident) - Get a task for an incident
- [`tasksListChecklistTemplates`](docs/sdks/tasks/README.md#listchecklisttemplates) - List checklist templates
- [`tasksListDelete`](docs/sdks/list/README.md#delete) - Delete a task list
- [`tasksListForIncident`](docs/sdks/tasks/README.md#listforincident) - List tasks for an incident
- [`tasksListTasks`](docs/sdks/tasks/README.md#listtasks) - List task lists
- [`tasksUpdate`](docs/sdks/tasks/README.md#update) - Update a task list
- [`tasksUpdateChecklistTemplate`](docs/sdks/tasks/README.md#updatechecklisttemplate) - Update a checklist template
- [`tasksUpdateTask`](docs/sdks/tasks/README.md#updatetask) - Update a task for an incident
- [`teamsArchive`](docs/sdks/teams/README.md#archive) - Archive a team
- [`teamsCreate`](docs/sdks/teams/README.md#create) - Create a team
- [`teamsCreateEscalationPolicy`](docs/sdks/teams/README.md#createescalationpolicy) - Create an escalation policy for a team
- [`teamsCreateOnCallSchedule`](docs/sdks/teams/README.md#createoncallschedule) - Create an on-call schedule for a team
- [`teamsCreateShift`](docs/sdks/teams/README.md#createshift) - Create a shift for an on-call schedule
- [`teamsDeleteScheduleShift`](docs/sdks/teams/README.md#deletescheduleshift) - Delete an on-call shift from a team schedule
- [`teamsGet`](docs/sdks/teams/README.md#get) - Get a team
- [`teamsGetScheduleShift`](docs/sdks/teams/README.md#getscheduleshift) - Get an on-call shift for a team schedule
- [`teamsList`](docs/sdks/teams/README.md#list) - List teams
- [`teamsListOnCallSchedules`](docs/sdks/teams/README.md#listoncallschedules) - List on-call schedules for a team
- [`teamsListSchedules`](docs/sdks/teams/README.md#listschedules) - List schedules
- [`teamsUpdate`](docs/sdks/teams/README.md#update) - Update a team
- [`teamsUpdateEscalationPolicy`](docs/sdks/teams/README.md#updateescalationpolicy) - Update an escalation policy for a team
- [`teamsUpdateScheduleShift`](docs/sdks/teams/README.md#updatescheduleshift) - Update an on-call shift in a team schedule
- [`ticketingGetFieldMap`](docs/sdks/ticketing/README.md#getfieldmap) - Get a field map for a ticketing project
- [`ticketingPrioritiesGet`](docs/sdks/ticketingpriorities/README.md#get) - Get a ticketing priority
- [`ticketingUpdateProjectConfig`](docs/sdks/ticketing/README.md#updateprojectconfig) - Update a ticketing project configuration
- [`ticketsCreate`](docs/sdks/tickets/README.md#create) - Create a ticket
- [`ticketsDelete`](docs/sdks/tickets/README.md#delete) - Delete a ticket
- [`ticketsList`](docs/sdks/tickets/README.md#list) - List tickets
- [`ticketsUpdate`](docs/sdks/tickets/README.md#update) - Update a ticket
- [`usersGet`](docs/sdks/users/README.md#get) - Get a user
- [`usersGetCurrent`](docs/sdks/users/README.md#getcurrent) - Get the currently authenticated user
- [`usersList`](docs/sdks/users/README.md#list) - List users
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksListDeliveries`](docs/sdks/webhooks/README.md#listdeliveries) - List webhook deliveries
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a webhook
- [`zendeskSearchTickets`](docs/sdks/zendesk/README.md#searchtickets) - Search for Zendesk tickets

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
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";
import { openAsBlob } from "node:fs";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidents.createAttachment({
    incidentId: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
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
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences({
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

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
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
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getAiPreferences` method may throw the following errors:

| Error Type                 | Status Code                       | Content Type     |
| -------------------------- | --------------------------------- | ---------------- |
| errors.BadRequest          | 400, 413, 414, 415, 422, 431, 510 | application/json |
| errors.Unauthorized        | 401, 403, 407, 511                | application/json |
| errors.NotFound            | 404, 501, 505                     | application/json |
| errors.Timeout             | 408, 504                          | application/json |
| errors.RateLimited         | 429                               | application/json |
| errors.InternalServerError | 500, 502, 503, 506, 507, 508      | application/json |
| errors.APIError            | 4XX, 5XX                          | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";
import {
  BadRequest,
  InternalServerError,
  NotFound,
  RateLimited,
  SDKValidationError,
  Timeout,
  Unauthorized,
} from "firehydrant-typescript-sdk/models/errors";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await firehydrantTypescriptSDK.accountSettings.getAiPreferences();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof Timeout): {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case (err instanceof RateLimited): {
        // Handle err.data$: RateLimitedData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  serverURL: "https://api.firehydrant.io/",
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences();

  // Handle the result
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
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";
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

const sdk = new FirehydrantTypescriptSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const sdk = new FirehydrantTypescriptSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `FIREHYDRANTTYPESCRIPTSDK_DEBUG` to true.
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
