
export const formatNumber = (n:any) => {
    n = String(n).replace(/\D/g, "");
    return n === '' ? n : Number(n).toLocaleString();
}

export const capitalizeFirstLetter=(str:String)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}