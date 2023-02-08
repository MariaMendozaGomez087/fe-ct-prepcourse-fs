//var suma = 0;
//suma = suma + 1;
//console.log(suma);
//suma = suma + 1;
//console.log(suma);
//suma = suma + 1;
//console.log(suma);
//suma = suma + 1;
//console.log(suma);


//for (var i = 0; i< 5; i++) {
  //  console.log(i);
//}



//function encontrarVocalA(string){  
 //   for (var i = 0; i<string.length; i++)  {
 //       if(string[i] === 'a'){
 //          return 'encontramos la vocal a'                   
//       }
 //  }     
  //  return 'El string que recibimos por parametros no tiene la vocal a'       
//}function deletrea 
//console.log(encontrarVocalA('Ana'));


//function cuentaRegresiva(num){
//    for (var i = num; i >= 5; i-)  {
//        console.log(i);
//   }         
//}
//cuentaRegresiva(20)



//function deletrear (string){
    //for(var i = 0; i < string.length; i++ ){
       // console.log(string[i])
   // }
//}
//deletrear('Abril')


//function contarLetra(string,letra){
    //var contador_letra = 0;
    //for (var i = 0; i < string.length ; i++){
        //if(string[i] === letra){
            //contador_letra = contador_letra + 1;
            //console.log(contador_letra)
        //}
    //}    
    //return contador_letra;
//}
//contarLetra('Mariana', 'a')


//for(var i = 0; i >=0; i++){
   // console.log(i)
//}

//function mientrasMenor6(){
   // var count = 1;
   // while(count < 6){
       // console.log('count es: ' + count)
       // count++
    //}
    //return count;
//}
//console.log(mientrasMenor6())


function semaforo(color){    
    switch(color){    
        case 'amarillo': 
            console.log('los autos se preparan para avanzar')
            break;
        case 'verde': 
            console.log('los autos avanzan')
            break;
        case 'rojo': 
            console.log('los autos se detienen')
            break;
        default:
            console.log('este color no es de semaforo')
    }
}
semaforo('azul')


