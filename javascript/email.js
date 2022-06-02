const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];
const subject = form.elements['subject'];
const item = form.elements['item'];
const qt = form.elements['qt'];
const date = form.elements['date']
const time = form.elements['time']
const num = form.elements['num']
const loc = form.elements['loc']
let body = "hello my name is " + name.value + " and i would like to place an order of" + qt.value + " " + item.value + " for " + date.value + " at " + time.value + " my email is " + email.value + " and my phone number is " + num.value + "and i would like it delivered to " + loc.value
let subject = "order"
window.open('mailto:bruegmansbakery@gmail.com.com?subject=subject&body=body');
