import React from "react";
import { Actions } from "./../../internal/modules/Actions";
import { createAction } from "./../../internal/appUtils/appUtils";
import { createLogger } from "./../../internal/appUtils/appUtils";
import { ModuleEvents } from './Actions';


const logger = createLogger("[Common][Handler]");

export default {
    [ModuleEvents.SET_NUMBER]: ({dispatch, payload, appState}) => {
        dispatch(Actions.common.navigate("CreatePromotionScreen"))
    },
    [ModuleEvents.USER_TYPE_FOR_ACTION]:({dispatch,payload,appState})=>{
        if(payload){ 
                  switch(payload){
                     case 'Manager':{
                        dispatch(Actions.common.navigate("ClubBankForm"))
                        break;
                     }
                     case 'Staff':{
                        //dispatch(Actions.common.navigate("CreatePromotionScreen"))
                     }
                     case 'Promoter':{
                        dispatch(Actions.common.navigate("ClubClaimForm1"))
                        break;
                     }
                    } 
                }
    }

};
