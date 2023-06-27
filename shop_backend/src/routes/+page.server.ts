import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
/** 
*@type {import('@sveltejs/kit').Actions}
*/
export const actions={
  // default: async () => {
  //   console.log("default action");
  // },
  default: async ({request}) =>{
    const data = await request.formData();
    const email = data.get('email');
    let transporter = nodemailer.createTransport({
      host: 'smtp.rosti.cz',
      port: 587,
      secure: false,
      auth: {
        user: '6610@rostiapp.cz',
        pass: 'ebb1f5905ebe4611999f0d119ae03df5'
      }
    });
    if(typeof email === 'string'){
    const info = await transporter.sendMail({
      from: 'hobitekCZ@post.cz',
      to: email,
      subject: 'hello world',
      html: '<p>Hello, world!</p>'
    });}else{
      console.log("dont have email")
    }
    
  }
}




