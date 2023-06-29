import { type Actions, type Action, fail, redirect} from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import Register from '$lib/emails/register.svelte';
import bcrypt from 'bcrypt';
import prisma from '$lib/prisma';



const login: Action = async({cookies, request}) => {
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  if(typeof email !== 'string' || typeof password !== 'string'||!password||!email){
      return fail(400,{invalid: true})}
  const user = await prisma.user.findUnique({
      where:{email},
    })
    if(!user){
      return fail(400,{exist: true})
    }
    const userPassword = bcrypt.compare(password, user.passwordHash)
    if (!userPassword){
    return fail(400,{credentials: true})
  }
  const authenticatedUser = await prisma.user.update({
      where:{email},
      data: {userAuthToken: crypto.randomUUID()}
  })
  cookies.set('session', authenticatedUser.userAuthToken,{
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60*60*24*30,
  })
  throw redirect(302, '/')
}

const register: Action = async ({request}) =>{
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  const password_2 = data.get('password_2');
  if(typeof email !== 'string' || typeof password !== 'string'||typeof password_2 !== 'string'||!password||!email||!password_2){
  return fail(400,{invalid: true})}
  const user = await prisma.user.findUnique({
    where:{email},
  })
  if(user){
    return fail(400,{exist: true})
  }
  if(password_2!=password){
  return fail(400,{password: true})
  }
  await prisma.user.create({
    data: {
      email: email,
      passwordHash: await bcrypt.hash(password,10),
      userAuthToken: crypto.randomUUID().toString(),
    }
  })
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
    const emailHtml = render({
      template: Register,
      props: {
        password
      }
    })
  const info = await transporter.sendMail({
    from: 'noreply@lamaminerals.cz',
    to: email,
    subject: 'Registration',
    html: emailHtml
  });}else{
    console.log("dont have email")
  }
  throw redirect(303, '/')
}
const logout: Action = async ({cookies}) =>{
  
  cookies.set('session', '',{
        path: '/',
        expires: new Date()
  })
  throw redirect(303, '/')
}

export const actions={
  login,
  register,
  logout
}




