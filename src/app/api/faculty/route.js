import connectToDb from "@/lib/db";
import Faculty from "@/lib/schemas/faculty";

export async function POST(request) {
    const {name,departmentid,contact,status,designation,email} = await request.json();
    try {
        await connectToDb()
        if(!name || !departmentid || !designation){
                return Response.json({message:"fields required",status:402})
        }
        const findFac = await Faculty.findOne({name,departmentid})
        if(findFac){
            return Response.json({message:"already exists",status:401})
        }else{
            const newFac = await Faculty({name,departmentid,contact,status,designation,email})
            await newFac.save()
            return Response.json({message:"success",status:200})
        }
    } catch (error) {
        console.log(error);
    }
}

export async function GET(){
    try {
        await connectToDb()
        const faculty = await Faculty.find()
        return Response.json({message:"success",status:200,faculty})
    } catch (error) {
        console.log(error);
    }
}