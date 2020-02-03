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