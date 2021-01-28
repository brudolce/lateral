export const ratioMask = (n:number|undefined):string =>{
    let res = ((n||0)*100)+''
    return parseInt(res) + '% similar'   
}

export const dateMask = (s:string|undefined):string =>{
    let date = new Date(s||'').toDateString().split(' ')
    let res = `${date[2]}.${date[1]}.${date[3]?.substring(2)}`
    return res
}