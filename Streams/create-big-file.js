const {writeFileSync}=require('fs')

for(let i=0;i<200000;i++){
    writeFileSync('../content/bigFile.txt',`hello ${i}\n`,{flag:'a'})
}