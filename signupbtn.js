function enable(){
    let check=document.getElementById('check');
    let btn=document.getElementById('btn');
    if(check.checked){
        btn.removeAttribute('disabled');
    }
    else{
        btn.disabled='true';
    }
}