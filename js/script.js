// section showing and hiding function here 
const historySectionShow=function(idName){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(idName).classList.remove('hidden');
}

// Button Active and Inactive Common Function is here
const buttonActive = function (idName) {
    document.getElementById('donation-btn').classList.remove('btn-success');
    document.getElementById('history-btn').classList.remove('btn-success');
    document.getElementById(idName).classList.add('btn-success');
}

// Donated function start here 
const donationBangladesh=function(yourDonatedAmount, mainBalance ,donatedBalance  ){
    const donationAmount=Number(document.getElementById(yourDonatedAmount).value)
    let totalDonation=Number(document.getElementById(mainBalance).innerText)

    let accountBalance=Number(document.getElementById(donatedBalance).innerText)

    if(typeof (donationAmount)==='number' && ! isNaN (donationAmount) && donationAmount >0 && donationAmount <= accountBalance){
        const newTotalDonatedBalance=totalDonation += donationAmount;
        document.getElementById(mainBalance).innerText=newTotalDonatedBalance;
        const newMainBalance=accountBalance - donationAmount;
        document.getElementById('account-balance').innerText=newMainBalance;
        document.getElementById('my_modal_5').showModal()
 }else{
        alert(' Invalid donation amount')
    }

};
// donationBangladesh function calling here 
document.getElementById('donation-of-noakhali-btn').addEventListener('click',function(){
    donationBangladesh( 'input-donation-amount-noakhali', 'donation-amount-noakhali', 'account-balance');
})
document.getElementById('donation-of-feni-btn').addEventListener('click',
function(){
    donationBangladesh( 'input-donation-amount-feni', 'donation-amount-feni', 'account-balance');
})
document.getElementById('donation-of-quota-btn').addEventListener('click',
function(){
    donationBangladesh( 'input-donation-amount-quota', 'donation-amount-quota', 'account-balance');
})
// Section showing and hiding functionality here 
document.getElementById('donation-btn').addEventListener('click', function(){
    historySectionShow('donation-container');
    buttonActive('donation-btn');
})    
document.getElementById('history-btn').addEventListener('click', function(){
    historySectionShow('transaction-history');
    buttonActive('history-btn');
})