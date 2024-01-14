export function getAbsoluteImageUrlInWebp(url : string | undefined){
    if (url) return 'https:' + url + "?q=75&fm=webp";
    return undefined;
} 

export function getBackgroundImageUrl(url : string | undefined){
    if (url) return 'url(' + getAbsoluteImageUrlInWebp(url) + ')';
    return undefined; 
}

export const toTitleCase = (str: string) => str.replace(/[-_]\w/g, g => ' ' + g[1].toUpperCase()).replace(/^\w/, c => c.toUpperCase());