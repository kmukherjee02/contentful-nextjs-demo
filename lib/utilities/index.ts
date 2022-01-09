export function getAbsoluteImageUrlInWebp(url : string){
    if (url) return 'https:' + url + "?q=75&fm=webp";
    return undefined;
} 

export function getBackgroundImageUrl(url : string){
    if (url) return 'bg-[url(' + getAbsoluteImageUrlInWebp(url) + ')]';
    return undefined; 
}