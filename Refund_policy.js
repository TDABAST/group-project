const button1 = document.querySelector('.bt1');


button1.addEventListener('mouseover', () => {
    bp1.innerHTML = `
       
        <ol>
            <li>1. We accept returns on eligible products within 30 days of purchase.To initiate a return, please contact our customer service team or visit our warehouse location.</li>
            <li>2. Returned products must be in their original condition, including all accessories and packaging, to be eligible for a refund or exchange.</li>
            <li>3. Return shipping costs are the responsibility of the customer unless the return is due to a defect or error on our part.</li>
        </ol>
    `;
});
button1.addEventListener('mouseout', () => {
    bp1.innerHTML = '';
 });

const button2 = document.querySelector('.bt2');


button2.addEventListener('mouseover', () => {
    bp2.innerHTML = `
       
        <ol>
        <li>1. Once your return is received and inspected, we will process your refund within 5-7 business days.</li>
   <br> <li>2. Refunds will be issued to the original payment method used for the purchase.</li>
   <br> <li>3. Please note that shipping charges are non-refundable unless the return is due to a defect or error on our part.</li>
        </ol>
    `;
});
button2.addEventListener('mouseout', () => {
    bp2.innerHTML = '';
 });


const button3 = document.querySelector('.bt3');


button3.addEventListener('mouseover', () => {
    bp3.innerHTML = `
       
        <ol>
        <li> 1. If you need to exchange a product for a different model or variant, please contact our customer service team to arrange for an exchange.</li>
     <br><li>2. Exchanged products must be in their original condition and packaging.</li>
        </ol>
    `;
});

button3.addEventListener('mouseout', () => {
    bp3.innerHTML = '';
 });
 const button4 = document.querySelector('.bt4');
 button4.addEventListener('mouseover', () => {
    bp4.innerHTML = `
       
        <ol>
       <li>1. If you receive a damaged or defective product, please contact us immediately for assistance.</li>
  <br> <li>2. We will arrange for a replacement or refund, depending on the circumstances.</li>
        </ol>
    `;
});

button4.addEventListener('mouseout', () => {
    bp4.innerHTML = '';
 });
