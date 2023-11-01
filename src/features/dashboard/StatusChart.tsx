import { StatusChartProps } from '@/types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const colors = ['#00B6AC', '#FF7C45', '#FF6169'];

function StatusChart({ data }: StatusChartProps) {
  return (
    <BarChart
      width={870}
      height={350}
      data={data}
      margin={{
        top: 25,
        right: 20,
        left: -20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" strokeOpacity={0} />
      <YAxis strokeOpacity={0} type="number" />
      <Tooltip />
      <Bar dataKey="value" barSize={45} fill="#8884d8">
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

export default StatusChart;
