let t = document.getElementById("grade").innerText
let s = document.getElementById("windspeed").innerText

if (t <= 50 && s >3 ){
    let factor = 35.74 + 0.6215 * t - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
    document.getElementById("windchill").innerText = factor.toFixed(1)
}else{
    document.getElementById("windchill").innerText = "N/A"
}


