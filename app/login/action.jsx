'use server'

import { SignJWT, importJWK } from "jose"
import { cookies } from "next/headers"
export async function login (prevStete,formData){
    const email =formData.get('email')
    const password =formData.get('password')
    
    if (email === 'chin' && password === '1234') {
        // Login pass
        const secretJWK = {
          kty: 'oct',
          k: process.env.JOSE_SECRET // Replace with your actual base64 encoded secret key
        }
  
        const secretKey = await importJWK(secretJWK, 'HS256')
        const token = await new SignJWT({ email })
                      .setProtectedHeader({ alg: 'HS256' })
                      .setIssuedAt()
                      .setExpirationTime('1h') // Token expires in 1 hour
                      .sign(secretKey)
      
        cookies().set('token', token)
        return {message :'Login Success'}
        redirect('/manage/blog')
      } else {
        throw new Error('Login fail')
      }
    
    
}