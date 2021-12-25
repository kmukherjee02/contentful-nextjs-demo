export function getAbsolutelyImageUrl(url){
    if (url) return 'https:' + url;
    return undefined;
} 

export function getBackgroundImageUrl(url){
    if (url) return 'bg-[url(' + getAbsolutelyImageUrl(url) + ')]';
    return undefined; 
}