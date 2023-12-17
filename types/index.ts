import { ReactNode } from 'react';
import { ImageProps } from 'next/image';
import * as Contentful from './contentful';
import { HubSpotFormDetails } from '@lib/utilities/hubSpot';


type Children = ReactNode;
type Preview = boolean;

type PreviewObj = { preview: Preview; }
type ChildrenObj = { children: Children; }

type LandingPage = Contentful.TypeXdLandingPage<undefined, undefined>

/** pages */
export type IndexPageProps = {page: LandingPage} & PreviewObj;
export type SlugPageProps = IndexPageProps;

/** components */
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

export type LandingPageProps = LandingPage & PreviewObj;
