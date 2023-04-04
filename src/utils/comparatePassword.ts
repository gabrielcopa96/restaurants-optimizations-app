export const comparatePaassword = ():boolean =>{
    const password = document.querySelector<HTMLInputElement>("#password");
    const password2 = document.querySelector<HTMLInputElement>("#password2");
    let valor:boolean = false
    if(password !== null && password2!==null){
        valor = password.value === password2.value; 
    }
    return valor
}