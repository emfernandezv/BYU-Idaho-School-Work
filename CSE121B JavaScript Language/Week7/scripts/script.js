const selector = [
    { value: 0, description: "Select an option" },
    { value: 0.15, description: "Okay - 15%" },
    { value: 0.18, description: "Good - 18%" },
    { value: 0.2, description: "Great - 20%" },
    { value: 0.22, description: "Excellent- 22%" },
    { value: 0.25, description: "Outstanding - 25%" },
  ];
  
  //FUCTION TO POPULATE THE SELECTOR
  function populateSelector() {
    var select = document.querySelector("#serviceQual");
    const html = selector.map(
      (section) =>
        `<option value=${section.value}> ${section.description}</option>`
    );
    select.innerHTML = html.join("");
  }
  
  //FUNCTION CALCULATE TOTAL BILL
  function getTotalBill() {
    const totBill = parseFloat(document.querySelector("#totalBill").value);
    const tipPercent = parseFloat(document.querySelector("#serviceQual").value);
  
    if (validate(totalBill,tipPercent) == 1) {
      document.querySelector("#pretip").innerHTML = `Tip with selected percentage is: $ ${calculateTip(totBill,tipPercent)}`;
      document.querySelector("#pretotal").innerHTML = `Total with selected tip is: $ ${totalBill(calculateTip(totBill,tipPercent),totBill)}`;
    }
  }
  
  //FUNCTION ROUND IT UP
  function rounditup() {
    const totalBill = parseFloat(document.querySelector("#totalBill").value);
    const tipPercent = parseFloat(document.querySelector("#serviceQual").value);
    if (validate(totalBill,tipPercent) == 1) {
      var finaltotal = Math.ceil(calculateTip(totalBill,tipPercent) + totalBill);
      document.querySelector("#finaltip").innerHTML = `${finalTip(finaltotal,totalBill)}`;
      document.querySelector("#finaltipPer").innerHTML = `${finalPerc(finalTip(finaltotal,totalBill),totalBill)}`;
      document.querySelector("#finaltotal").innerHTML = `${finaltotal}`;
    }
  }
  
  //FUNCTION TO CALCULATE THE FINAL TIP
  function finalTip(total,bill){
      return total-bill
  }
  
  //FUNCTION TO CALCULATE THE FINAL TIP PERC
  function finalPerc(tip,bill){
      return parseFloat(((tip / bill) * 100).toFixed(2))
  }
  
  //FUNCTION TO CALCULATE THE TIP
  function calculateTip(total,perc){
      return parseFloat((total * perc).toFixed(2))
  }
  
  //FUCNTION TO CALCULATE THE TOTAL BILL
  function totalBill(bill,tip){
      return parseFloat((bill + tip).toFixed(2))
  }
  
  //FUNCTION TO VALIDATE THE INPUT
  function validate(bill,tip){
      if (bill === "" || tip == 0) {
          alert("Please enter values");
          return -1
      }else {
          return 1
      }
  }
  
  //FUNCTION TO RESET THE PAGE
  function reset() {
      location.reload();
    }
    
  //CONSTRUCTOR
  populateSelector();
  
  // EVENT LISTENERS
  document.querySelector("#roundit").addEventListener("click", rounditup);
  document.querySelector("#calculate").addEventListener("click", getTotalBill);
  document.querySelector("#reset").addEventListener("click", reset);