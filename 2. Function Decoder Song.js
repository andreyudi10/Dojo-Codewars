function songDecoder(song){
    let index=0
    let songdecode=""
    while (index < song.length-1){
      for (let i = index ; i < song.length ; i++){
        if (song[i]==="W"){
          if(song[i+1]==="U"){
            if (song[i+2]=== "B"){
              if(index+3<song.length){              
                if(index+2<song.length){
                index+=1
                break;
                } 
              index+=2
              break;             
            }
            index+=3
            break;
          }
        }else if(song[i]!=="W" ||
               song[i]!=="U" ||
               song[i]!=="B" ){
        songdecode+=song[i]
        index+=1
        break;}
    }    
    }
    
  
  }
  return songdecode
}
  
  console.log(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
  console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
  console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");