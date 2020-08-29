// this code try to match given string (word) in another string (sentence)
//then give sentence without that word

//ex
//input
// "malramkaramkamalmalram" //sentence included word that want to be removed 
//"mal" //word to be detected
//expected output
//"ramkaramkaram"

//process
function removedKnownWord(sentence,word){
  let x=sentence
  let y=word
  let p=y.length
  
  let k=[]
  for (let i = 0 ; i < x.length ; i++ ) {
      r=""
      for ( let j = i ; j < i+p ; j++ ){ // generate word by array
        r += x[j]            
      }
      if( i < x.length - (p-1)) 
        k.push(r)
      }

  let l=""
  for( let i = 0 ; i < x.length ; i++ ) {
    if ( k[i] !== y ) {
      l += x[i]
    }else{
      i+=(p-1) //ini generalin
    }    
  }
  return l
}

console.log(removedKnownWord("ramararamamaraka","ma"))
console.log(removedKnownWord("wubiwubwub amwubwub the wub best","wub"))


