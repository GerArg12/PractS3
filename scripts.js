function sumar() {
    var n1 = Number((document.getElementById("inpt1")).value)
    var n2 = Number((document.getElementById("inpt2")).value)
    var lb1 = document.getElementById("result")
    lb1.innerHTML = ("El resultado es "+ (n1+n2))
    //console.log(n1 + n2)
    //document.write(n1 + n2)

}

function datos() {
    var str1 = (document.getElementById("inpt1")).value
    var str2 = (document.getElementById("inpt2")).value
    if (isNaN(str1) || isNaN(str2))
    document.write(str1 + str2)


}