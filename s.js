
function sumaAsyn(a,b,callback){
  let suma = a+b;
  callback(suma)
}
sumaAsyn(2,3, function(res){
  console.log(res)
})