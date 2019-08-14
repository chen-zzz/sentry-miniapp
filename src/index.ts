// import { getGlobalObject } from "@sentry/utils";

// let window = getGlobalObject() as { [key: string]: any };
// // tslint:disable-next-line: strict-type-predicates
// if (typeof window === 'undefined') {
//   // eslint-disable-next-line
//   window = {

//   };
// }

export {
  Breadcrumb,
  Request,
  SdkInfo,
  Event,
  Exception,
  Response,
  Severity,
  StackFrame,
  Stacktrace,
  Status,
  Thread,
  User
} from "@sentry/types";

export {
  addGlobalEventProcessor,
  addBreadcrumb,
  captureException,
  captureEvent,
  captureMessage,
  configureScope,
  getHubFromCarrier,
  getCurrentHub,
  Hub,
  Scope,
  setContext,
  setExtra,
  setExtras,
  setTag,
  setTags,
  setUser,
  Span,
  withScope
} from "@sentry/core";

export { SDK_NAME, SDK_VERSION } from "./version";
export {
  defaultIntegrations,
  forceLoad,
  init,
  lastEventId,
  onLoad,
  showReportDialog,
  flush,
  close,
  wrap
} from "./sdk";
export { MiniappOptions } from "./backend";
export { MiniappClient, ReportDialogOptions } from "./client";

import * as Integrations from "./integrations/index";
import * as Transports from "./transports/index";

export { Integrations, Transports };
