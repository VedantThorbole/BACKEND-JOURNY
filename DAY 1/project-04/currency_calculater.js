const usd_convert_inr = 200;

function inrToUsd(usd_convert_inr) {
     const total = 83 * usd_convert_inr;
     return `Your ${usd_convert_inr} USD is converted into ${total} INR`
}

console.log(inrToUsd(usd_convert_inr));
