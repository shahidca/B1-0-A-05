
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
        // History 
        const donateFor=document.querySelector('.donate-for').innerText;
        const history=document.createElement('history');
        history.innerText`<h3 class="text-lg font-bold">${donationAmount} tk is donated for ${donateFor}</h3>`

    }else{
        alert(' Invalid donation amount')
    }

};
// Donated function end here 
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
// history section start here 
// const historySectionShow=function(id){
//     document.getElementById('donation-container').classList.add('hidden');
//     document.getElementById('transaction-history').classList.add('hidden');
//     document.getElementById(id).classList.remove('hidden');
// }
// history section start here 
