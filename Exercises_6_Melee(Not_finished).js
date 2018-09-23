
/*
Algoritma
1. Diberikan input string
2. Lakukan Perulangan dr i=0, i<str.length, pd string per hurufnya. 
    Lalu ketika looping bertemu (,), push ke array1.
    Didapat:
    ['Razor-Ranged',
     'Invoker-Ranged',...dst   ]

3. Skrg bagaimana caranya kita menghilangkan strip(-), jd:
    [['Razor', 'Ranged'],
      ['Invoker', 'Ranged], dst... ]

4. Lakukan pengkondisian:
    Jika indeks ke i dan ke j sama dengan ranged, maka push indeks ke i dan ke 0 ke array.
    Jika indeks ke i dan ke j sama dengan melle, maka push indeks ke i dan ke 0 itu ke array.
    *Berhubung kelasnya cmn 2, maka deklar array di awal sudah isinya [[],[]]

5. Tampilkan arr final itu 

*/
function meleeRangedGrouping (str) {
    var kata=''
    var kata2=''
    var array1=[]
    var array2=[]
    for (var i=0; i<str.length; i++){
        if(str[i]!==','){
            if(i!==str.length-1){
                kata=kata+str[i]
            }
            else{
                kata=kata+str[i]
                array1.push(kata)
            }
        }
        else {
            array1.push(kata)
            kata=''
        } 
    }
    // return array1
    for(var i=0; i<array1.length;i++){
        array2.push([])
        for (var j=0; j<array1[i].length; j++){
            if(array1[i][j]!=='-'){
                kata2=kata2+array1[i][j]
            }
            else if(array1[i][j]==='-'){
                array2[i].push(kata2)
                kata2=''
            }
            else if(j===array1[i].length-1){
                kata2=kata2+array1[i][j]
                array2[i].push(kata2)
            }
        }
    }
    return array2
  }
        
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []