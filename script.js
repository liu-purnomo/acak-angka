function generate() {

  let awal = document.getElementById("awal").value
  let akhir = document.getElementById("akhir").value

  let min = Number(awal)
  let max = Number(akhir)
  
  let hasil = Math.floor(Math.random() * max) + min
  
  if(min >= max || awal === akhir){
    document.getElementById("result").innerHTML = "Angka akhir harus lebih besar";
  }else if(awal === '' || akhir === ''){
    document.getElementById("result").innerHTML = "Angka tidak boleh kosong";
  }else if(hasil < min || hasil > max){
    document.getElementById("result").innerHTML = min+1;
  }else{
    document.getElementById("result").innerHTML = hasil;
  }
}