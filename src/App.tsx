import { Pie, PieChart, Cell, LabelList } from 'recharts';

const colorPalette = [
  'hsl(10, 80%, 50%)',
  'hsl(40, 80%, 50%)',
  'hsl(90, 60%, 50%)',
  'hsl(140, 60%, 50%)',
  'hsl(200, 70%, 50%)',
  'hsl(250, 70%, 50%)',
  'hsl(290, 60%, 50%)',
  'hsl(320, 70%, 50%)',
  'hsl(0, 0%, 50%)',
  'hsl(180, 40%, 50%)',
];

const categories = [
  'work',
  'relationships',
  'health',
  'personal',
  'hobbies',
  'home',
];

const chartData = categories.map((category, i) => ({
  name: category,
  value: 1,
  fill: colorPalette[i % colorPalette.length],
}));

console.log('chartData', chartData);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const RADIAN = Math.PI / 180;

const App = () => (
  <PieChart data={chartData} width={500} height={500}>
    <LabelList dataKey="name" position="center" fill="black" />
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="category"
      label={renderCustomizedLabel}
    >
      {data.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={colorPalette[index % colorPalette.length]}
        />
      ))}
    </Pie>
  </PieChart>
);

export default App;
