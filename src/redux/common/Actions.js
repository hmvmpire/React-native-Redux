import React from "react";
import { createAction } from "./../../internal/appUtils/appUtils";
import { createLogger } from "./../../internal/appUtils/appUtils";
import NavigationService from "./../../internal/services/navigationService"

export const ModuleEvents = {
    NAVIGATE: "NAVIGATE",
    NETWORK_ERROR:'NETWORK_ERROR',
};

export default {

    networkError: createAction(ModuleEvents.NETWORK_ERROR, error => error),
    navigate: createAction(ModuleEvents.NAVIGATE, (view, navigateData) => NavigationService.navigate(view, navigateData)),
 
};
