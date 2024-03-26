import connectToDb from "@/lib/db"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "@/lib/schemas/user"
import { cookies } from "next/headers"

export async function POST(request) {
    const {email,password} = await request.json()
    try {
        await connectToDb()
        const getUser = await User.find({email})

        if (getUser.length > 0){
            const comparePass = await bcrypt.compare(password,getUser[0].password)
            if(comparePass){
                const token =await jwt.sign({id:getUser[0]._id},process.env.SECRET_KEY)
                
                cookies().set('pmscookie', token)
                return Response.json({message:"success",status:200})

            }else{
                return Response.json({message:"Invalid Password",status:401})
            }
        }
        else{
            return Response.json({message:"No User Found",status:400})
        }
    } catch (error) {
        
    }
}