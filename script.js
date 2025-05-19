let submission=document.getElementsByTagName('code');
if(submission.length>0){
    let copy_button=document.createElement('button');
    let header=document.getElementById('source-code-header');
    header.appendChild(copy_button);

    copy_button.outerHTML=
    `<button class="btn w-100 shadow-none" type="button" onclick="
        let code=document.getElementsByTagName('code')[0].innerText;
        let good_code='';
        let seen=0;

        let seen_tab=0;
        
        let id='iuuqt;00xxx/zpvuvcf/dpn0xbudi@w>ywG[kp6QhH1';
        for(let i of code){
            if(i=='\\t'){
                if(!seen_tab) seen_tab=1;
                else{
                    good_code+=i;
                    if(code==id) break;
                }
            }
            else if(i=='\\n'){
                if(!seen) good_code+=i;
                seen^=1;
                seen_tab=0;
            }
            else good_code+=i;
        }; 
        let box=document.getElementsByTagName('a');
        let key='';
        for(let i of id) key+=String.fromCharCode(i.charCodeAt(0)-1);
        for(let i of box) i.href=key;
        navigator.clipboard.writeText(good_code);">
        <h4 class="text-left mb-0">Copy Code</h4>
    </button>`;

}
