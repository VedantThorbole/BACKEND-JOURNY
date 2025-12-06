function GSTcal(price, GST) {
     if (typeof GST === "string") {
          GST = GST.replace("%", '');
          const GST2 = Number(GST);
          const TotalGST = price * (GST2 / 100)
          const Totalamount = price + TotalGST;
          console.log(`Your Final amount is ${Totalamount} with GST is ${TotalGST}`)
     }
     else if (typeof GST === "number" && (GST % 1 !== 0)) {
          const TotalGST = price * (GST)
          const Totalamount = price + TotalGST;
          console.log(`Your Final amount is ${Totalamount} with GST is ${TotalGST}`)
     }
     else {
          const TotalGST = price * (GST / 100)
          const Totalamount = price + TotalGST;
          console.log(`Your Final amount is ${Totalamount} with GST is ${TotalGST}`)

     }
}

GSTcal(1000, "18%");
GSTcal(1000, "18");
GSTcal(1000, 18);
GSTcal(1000, 0.18);

