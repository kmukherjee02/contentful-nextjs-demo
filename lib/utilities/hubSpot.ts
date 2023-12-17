declare const hbspt : any 

export interface HubSpotFormDetails {
    css : string;
    region: string;
    portalId: string;
    formId: string;
    target: string
}

export function hubSpotFormCreate(formDetail : unknown){
    if(typeof hbspt !== "undefined") {
        hbspt.forms.create(formDetail as HubSpotFormDetails)
    }
}