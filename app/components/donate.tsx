
// Paystack component that accepts donations

import { PaystackButton } from 'react-paystack';
import { useState } from 'react';
export default function Donate () {
    // initial amount for donation is 0, but you will set it to whatever value later
    const [ amount, setAmount ] = useState(0);
    // configuration containing all the necessary information for the transaction
    const config = {
        // Date and time for the transaction
        reference: (new Date()).getTime().toString(),
        // email where you get transaction receipts
        email: "xh3rking96@gmail.com", 
        // amount but in kobo, so multiply by 100 (kobo is like cents)
        amount: amount * 100,
        // public key given to you after registering to paystack as a business
        publicKey: 'pk_live_9999378c83331abc0c642f96d2457a5f88969934',
        // currency in which you receive donations, USD is the best
        currency: 'KES'
        }
    // what happens when transaction succeeds
    const onSuccess = ( reference: any ) => { console.log(reference) }
    // what happens when transaction fails
    const onClose = () => { console.log("closed") }
    return (
            <>
                <div className='text-center my-5' style={{minHeight: '100vh'}}>  
                    <h1 className='text-2xl font-bold my-5'>Thank you for donating anon!</h1>
                    <label>Amount (in KES)</label>
                    <br /><br />
                    <input className='text-center rounded-sm text-black py-3' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <br /><br />
                    <PaystackButton
                    className='my-5 py-2 text-white rounded-lg px-3 bg-green-900 hover:bg-green-700'
                    onSuccess={onSuccess} onClose={onClose}
                    text='Money Upvote'
                    {...config}
                    />
                </div>
           </>
           )
}
