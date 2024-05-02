import connectToDb from "@/lib/db"
import User from "@/lib/schemas/user"
import bcryptjs  from "bcryptjs"

export async function POST(request) {
    const {firstname,lastname,email,password,status} = await request.json()
    if(!firstname || !email || !password){
        return Response.json({message:"Please Fill required Fields"},{status:400})
    }
    await connectToDb()
    const oldUser = await User.find({email})
    if(oldUser.length>0){
        return Response.json({error:"Already Present User"},{status:401})
    }
    else{

    const salt = await bcryptjs.genSalt(10)
    const hashedPass = await bcryptjs.hash(password,salt)
    const newUser = await new User({firstname,lastname,email,password:hashedPass,status})
    await newUser.save()
    return Response.json({status:200})
    
    }
    
}