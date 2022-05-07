var arr = [  'neko' , ' shinobu' , 'megumin' , 'bully' , 'cuddle' , 'cry' , 'hug' , 'awoo' , 'kiss' , 'lick' , 'pat' , 'smug' , 'bonk' , 'yeet' , 'blush' , 'smile' , 'wave' , 'highfive' , 'handhold' , 'nom' , 'bite' , 'glomp' , 'slap' , 'kill' , 'kick' , 'happy' , 'wink' , 'poke' , 'dance' , ' cringe ']
let arlength = arr.length
console.log(arlength)
let slect = document.getElementById("car") ;
let text = document.getElementById("text")
// var html = slect.innerHTML



  for(var i=0 ; i < arr.length; i++ ){
    let html = slect.innerHTML
 slect.innerHTML= html +`  <option value="${arr[i]} ">${arr[i] } </option> `
    }
    function greet() {
        var value = text.value
        console.log(value);
        var val =slect.value
        console.log(val);
        return value,val
    }
    
    
    let fetchbtn = document.getElementById('fetchbtn')
    fetchbtn.addEventListener('click' , greet)
    fetchbtn.addEventListener('click' , buttonHandler)
    function buttonHandler (){
    let val =slect.value
    const xhr = new XMLHttpRequest()
    // open xhr object (getting the jeson file nothing change😎😎)
    xhr.open('get' ,`https://api.waifu.pics/sfw/${val}`, 'true');

    xhr.onprogress = function(){
        console.log('every thiong is fine')
    }
    xhr.onload = function(){ 
        if (this.status ===200){
// quates = this.responseText ,
parsed =JSON.parse(this.responseText) 
console.log(parsed , typeof parsed)
let printit =document.getElementById('fetchcont')
let url = parsed['url']
console.log(url);
 var print = `<img class="img"  src=" ${url}" alt="not found">`
console.log(typeof print ,print)
// let to =JSON.stringify.print
// console.log(print)
console.log("every thing is good")
setTimeout(() => {
    printit.innerHTML = print
}, 2000);
}
        else{console.log('some problem has occered')}
    }
    xhr.send()

}