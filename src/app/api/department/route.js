import connectToDb from "@/lib/db";
import Department from "@/lib/schemas/department";

export async function POST(request) {
    const {deptname,hod} = await request.json();
    try {
        await connectToDb()
        const findDepartment = await Department.findOne({deptname});
        if (findDepartment){
            return Response.json({message:"Already Exist",status:401})
        }else{
            const newDept = await new Department({deptname,hod})
            await newDept.save()
            return Response.json({message:"Success",status:200})
        }
    } catch (error) {
        console.log(error);
        return Response.json({message:"failed",status:500})
    }
}


export async function GET(request) {
    try {
        await connectToDb()
        const dept = await Department.find()
        return Response.json({message:"success",status:200,dept})
    } catch (error) {
        console.log(error);
    }
}


export async function DELETE(request){
    const {id} = await request.json()
    try {
        await connectToDb()
        const deleteDept=await Department.deleteOne({_id : id})
        return Response.json({status:200,message:"Deleted"})
    } catch (error) {
        console.log(error);
    }
}