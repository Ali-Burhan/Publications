import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const Linechart = () => {
    const data = [
        {
          "year": "2016",
          "I.F": 4000,
          "N.I.F": 2400
        },
        {
          "year": "2017",
          "I.F": 3000,
          "N.I.F": 1398
        },
        {
          "year": "2018",
          "I.F": 2000,
          "N.I.F": 9800
        },
        {
          "year": "2019",
          "I.F": 2780,
          "N.I.F": 3908
        },
        {
          "year": "2020",
          "I.F": 1890,
          "N.I.F": 4800
        },
        {
          "year": "2021",
          "I.F": 2390,
          "N.I.F": 3800
        },
        {
          "year": "2022",
          "I.F": 3490,
          "N.I.F": 4300
        }
      ]
  return (
    <div className='w-3/4 h-[350px] p-5 rounded-2xl'>
    <ResponsiveContainer width="100%" height="100%" >
    <AreaChart width={730} height={250} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#42B2BC" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#1E5156" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#42B2BC" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#1E5156" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="I.F" stroke="#42B2BC" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="N.I.F" stroke="#1E5156" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
  </ResponsiveContainer>
    </div>
  )
}

export default Linechart