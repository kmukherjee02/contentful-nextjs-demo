import { ReactNode } from "react";
import { ImageProps } from "next/image";
import { HubSpotFormDetails } from "@lib/utilities/hubSpot";

type Children = ReactNode;
type Preview = boolean;

type PreviewObj = { preview: Preview; }
type ChildrenObj = { children: Children; }

export type AlertProps = PreviewObj;
export type ContainerProps = ChildrenObj;
export type ContentfulImageProps = ImageProps;
export type DateProps = {
    dateString: string;
}
export type HubSpotFormProps = {
    formDetail: HubSpotFormDetails,
    height: string
}
export type LayoutProps = PreviewObj & ChildrenObj;
export type PageNotFoundProps = PreviewObj;
