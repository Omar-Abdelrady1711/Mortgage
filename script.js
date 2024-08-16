
function calculateMortgage() {
    const results = document.getElementById('before');
    const shown = document.getElementById('after');
    const amount = Number(document.getElementById('mortgageAmount').value);
    const term = Number(document.getElementById('mortgageTerm').value);
    const rate = Number(document.getElementById('interestRate').value);
    const repayment = document.getElementById('repayment').checked;
    const interest = document.getElementById('interestChoice').checked;
    const image = document.getElementById('Image');

    // Simple validation check
    if (isNaN(amount) || isNaN(term) || isNaN(rate) || amount <= 0 || term <= 0 || rate <= 0) {
        results.innerHTML = `<div class="results"><p>Please enter valid values for all fields.</p></div>`;
        return;
    }
    
    let monthlyRate = (rate / 12) / 100;
    let totalPayments = term * 12;

    // Mortgage formula for monthly repayment
    let monthlyRepayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
    let totalRepayment = monthlyRepayment * totalPayments;
    
    if (repayment ) {
        image.style.display = "none";
        shown.innerHTML = `
        <div class="results">
        <p>Your monthly repayment: $${monthlyRepayment.toFixed(3)}</p>
        <div class="divider"></div>
        <p>Total you'll repay over term: $${totalRepayment.toFixed(3)}</p>
        </div>`;
        results.style.display = "none";
        shown.style.display = "block";
    }
    else if(interest) {

    }
      
}

document.getElementById('calculate').addEventListener('click', calculateMortgage);