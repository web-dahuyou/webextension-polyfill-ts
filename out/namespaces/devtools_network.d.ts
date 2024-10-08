//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.devtools.network
 */
export namespace DevtoolsNetwork {
    /**
     * Represents a network request for a document resource (script, image and so on). See HAR Specification for reference.
     */
    interface Request {
        /**
         * Returns content of the response body.
         *
         * @returns A function that receives the response body when the request completes.
         */
        getContent(): Promise<[string, string]>;
    }

    /**
     * A HAR log. See HAR specification for details.
     */
    interface GetHARCallbackHarLogType {
        [s: string]: unknown;
    }

    interface Static {
        /**
         * Returns HAR log that contains all known network requests.
         *
         * @returns A function that receives the HAR log when the request completes.
         */
        getHAR(): Promise<GetHARCallbackHarLogType>;

        /**
         * Fired when a network request is finished and all request data are available.
         *
         * @param request Description of a network request in the form of a HAR entry. See HAR specification for details.
         */
        onRequestFinished: Events.Event<(request: Request) => void>;

        /**
         * Fired when the inspected window navigates to a new page.
         *
         * @param url URL of the new page.
         */
        onNavigated: Events.Event<(url: string) => void>;
    }
}
