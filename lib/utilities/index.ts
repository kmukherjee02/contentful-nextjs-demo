export function getAbsolutelyImageUrl(url : string){
    if (url) return 'https:' + url;
    return undefined;
} 

export function getBackgroundImageUrl(url : string){
    if (url) return 'bg-[url(' + getAbsolutelyImageUrl(url) + ')]';
    return undefined; 
}