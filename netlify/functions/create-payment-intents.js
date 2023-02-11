require("dotenv").config()
const stripe = require("Stripe")("sk_test_51MYkTLALrjdA4aW4nfcAuUyyCvuZDKp9So8gqSHLSagaQVHMpv3UyI05QCtkJI0TGlDaXni0erheTrr2IpiIofB800JnpwYnha")

exports.handler = async (event) => {
 try{
    const {amount} = JSON.parse(event.body)
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency:"usd",
        payment_method_types:["card"]
    })
    return {
        statusCode:200,
        body:JSON.stringify({paymentIntent})

    }
 }catch(err){
  console.log(err)
  return {
    status:400,
    body:JSON.stringify({err})
  }
 }
}
