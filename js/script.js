console.log("hejsan");

p.addEventListener("change", e => {
    console.log ("P: ", e.target.value)
})

q.addEventListener("change", e => {
    console.log ("q: ", e.target.value)
})

function readValue (){
    const p=parseInt( document.getElementById("p").value);
    const q= parseInt(document.getElementById("q").value);
    
    formel(p,q);
}
function readValuek (){
    const y1=parseInt( document.getElementById("y1").value);
    const x1=parseInt( document.getElementById("x1").value);
    const y2=parseInt( document.getElementById("y2").value);
    const x2=parseInt( document.getElementById("x2").value);
    formelk (y1,x1,y2,x2);
}
/*
  public static void Formel (int p, int q){
    double del1 = p * -0.5;
    double del2 = Math.Pow (p * 0.5 , 2) - q;

    double svar1 = del1 + Math.Sqrt(del2);
    double svar2 = del1 - Math.Sqrt(del2);

    Console.WriteLine (svar1);
    Console.WriteLine (svar2);
*/

function formel (p,q){
    var del1 = p * -0.5;
    var del2 = Math.pow (p * 0.5 , 2) - q;

    var svar1 = del1 + Math.sqrt(del2);
    var svar2 = del1 - Math.sqrt(del2);

    document.getElementById("svar1").innerHTML = svar1;
    document.getElementById("svar2").innerHTML = svar2;
}

function formelk (y1,x1,y2,x2){
    var k = (y2-y1)/ (x2-x1);
  // y = kx + m
  // m = y - k
    var m = y1-(k*x1);

    document.getElementById("k").innerHTML = k;
    document.getElementById("m").innerHTML = m;
}