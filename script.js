document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault(); 
    calculateMortgage();
});

const calculateMortgage = () => {
    const before = document.getElementById('before');
    const after = document.getElementById('after');
    const amount = Number(document.getElementById('mortgageAmount').value);
    const term = Number(document.getElementById('mortgageTerm').value);
    const rate = Number(document.getElementById('interestRate').value);
    const repayment = document.getElementById('repayment').checked;
    const interest = document.getElementById('interestChoice').checked;
    
    if (amount && term && rate) {
        
    before.style.display = 'none';
    after.style.display = 'block';

        let monthlyRate = (rate / 12) / 100;
        let totalPayments = term * 12;
        let calculatedRepayment = (amount * (monthlyRate * (1 + monthlyRate) ** totalPayments)) / ((1 + monthlyRate) ** totalPayments - 1);
        let totalRepayment = calculatedRepayment * totalPayments;
        let calculatedInterest= calculatedRepayment - amount/totalPayments
        const repaymentText = document.querySelector('.repaymentText');
        const totalPerTerm = document.querySelector('.totalPerTerm');
        
        if(repayment){

            repaymentText.textContent = `$${calculatedRepayment.toFixed(2)}`;
            totalPerTerm.textContent = `$${totalRepayment.toFixed(2)}`;
        }
        else if (interest){
            repaymentText.textContent = `$${calculatedInterest.toFixed(2)}`;
            totalPerTerm.textContent = `$${totalRepayment.toFixed(2)}`;
        }

    } 
};
