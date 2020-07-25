
      // Case Counting(+)
      document.getElementById("case-increase").addEventListener("click", function(){
        const caseInput = document.getElementById("case-count");
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById('case-total').innerText = '$' + caseTotal;
     });
     // Case Counting(-)
     document.getElementById("case-decrease").addEventListener("click", function(){
        const caseInput = document.getElementById("case-count");
        const caseCount = parseInt(caseInput.value);
        const caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        const caseTotal = caseNewCount * 59;
        document.getElementById("case-total").innerText = '$' + caseTotal;
     });

     //Function for Case Counting

     document.getElementById("case-increase").addEventListener("click", function(){
         handleProductChange(true);
      });
      document.getElementById("case-decrease").addEventListener("click", function(){
         handleProductChange(false);
      });

      function handleProductChange(isIncrease){
         const caseInput = document.getElementById("case-count");
         const caseCount = parseInt(caseInput.value);
         let caseNewCount = caseCount;
         if(isIncrease == true){
            caseNewCount = caseCount + 1;
         }
         if(isIncrease == false && caseCount > 0){
            caseNewCount = caseCount - 1;
         }
         caseInput.value = caseNewCount;
         const caseTotal = caseNewCount * 59;
         document.getElementById("case-total").innerText = '$' + caseTotal;
      }

     // Phone Counting(+)
     document.getElementById("phone-increase").addEventListener("click", function(){
        const phoneInput = document.getElementById("phone-count");
        const phoneCount = parseInt(phoneInput.value);
        const phoneNewCount = phoneCount + 1;
        phoneInput.value = phoneNewCount;
        const phoneTotal = phoneNewCount * 1219;
        document.getElementById("phone-total").innerText = '$' + phoneTotal;
     });

     // phone counting(-)
     document.getElementById("phone-decrease").addEventListener("click", function(){
        const phoneInput = document.getElementById("phone-count");
        const phoneCount = parseInt(phoneInput.value);
        const phoneNewCount = phoneCount - 1;
        phoneInput.value = phoneNewCount;
        const phoneTotal = phoneNewCount * 1219;
        document.getElementById("phone-total").innerText = '$' + phoneTotal;
     });

     // function for Phone Counting

     document.getElementById("phone-increase").addEventListener("click", function(){
        handlePhoneChange(true);
     });
     document.getElementById("phone-decrease").addEventListener("click", function(){
        handlePhoneChange(false);
     });

     function handlePhoneChange(isIncrease){
        const phoneInput = document.getElementById("phone-count");
        const phoneCount = parseInt(phoneInput.value);
        let phoneNewCount = phoneCount;
        if(isIncrease == true){
           phoneNewCount = phoneCount + 1;
        }
        if(isIncrease == false && phoneCount > 0){
           phoneNewCount = phoneCount - 1;
        }
        phoneInput.value = phoneNewCount;
        const phoneTotal = phoneNewCount * 1219;
        document.getElementById("phone-total").innerText = '$' + phoneTotal;
     }