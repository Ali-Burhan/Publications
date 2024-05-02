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
                console.log(getUser[0].status);
                const token = jwt.sign({id:getUser[0]._id},process.env.SECRET_KEY)
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

export async function GET() {
    try {
        await connectToDb()
        const allUser = await User.find()
        return Response.json({status:200,allUser})
    } catch (error) {
        console.log(error);
    }
}


export async function DELETE(request) {
    const {id} = await request.json()
    try {
        await connectToDb()
        const deleteUser  = await User.deleteOne({_id:id})
        return Response.json({status:200,message:"Deleted"})
    } catch (error) {
        
    }
}