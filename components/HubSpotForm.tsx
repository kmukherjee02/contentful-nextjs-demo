import { useEffect } from "react";
import { hubSpotFormCreate } from '@lib/utilities/hubSpot';
import { HubSpotFormProps } from "types";

export function HubSpotForm({ formDetail, height } : HubSpotFormProps) {
    useEffect(() => {
        hubSpotFormCreate(formDetail)
    }, [formDetail])

    return (
        <div className="flex justify-center" style={{minHeight: `${height}` + 'px'}}>
            <div className="my-[1rem]">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="form pb-4"></div>
                </div>
            </div>
        </div>
    )
}