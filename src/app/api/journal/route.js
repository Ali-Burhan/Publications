import connectToDb from "@/lib/db";
import Journal from "@/lib/schemas/journal";

export async function POST(request) {
    const {title,year,impactfactor,category,auther,department,nfccredit,papertype} = await request.json()
    try {
        await connectToDb()
        const findJournal = await Journal.findOne({title,auther})
        if(findJournal){
            return Response.json({message:"already exist",status:402})
        }else{
            if(papertype == "research paper"){

                const newJournal = await new Journal({title,year,impactfactor,category,auther,department,nfccredit,papertype})
                await newJournal.save()
                return Response.json({message:"success",status:200})
            }else{
                const newJournal = await new Journal({title,year,auther,department,nfccredit,papertype})
                await newJournal.save()
                return Response.json({message:"success",status:200})
            }
        }
    } catch (error) {
        console.log(error);
    }
}



export async function GET(){
    try {
        await connectToDb()
        const allPublications = await Journal.find()
        return Response.json({allPublications, status: 200})
    } catch (error) {
        console.log(error);
    }
}