import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";
const Barcharts = () => {
    const data = [
        {
            name: "Jan",
            Old_Customers: 4000,
            New_Customers: 2400
        },
        {
            name: "Feb",
            Old_Customers: 5000,
            New_Customers: 1500
        },
        {
            name: "Mar",
            Old_Customers: 6000,
            New_Customers: 3000
        },
        {
            name: "Apr",
            Old_Customers: 6500,
            New_Customers: 4500
        },
        {
            name: "May",
            Old_Customers: 7000,
            New_Customers: 2200
        },
        {
            name: "Jun",
            Old_Customers: 8000,
            New_Customers: 3500
        },
        {
            name: "Jul",
            Old_Customers: 7400,
            New_Customers: 5500
        },
      ];
  return (
    <div className="w-3/4 p-5 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Old_Customers" fill="#42B2BC" />
        <Bar dataKey="New_Customers" fill="#1E5156" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Barcharts