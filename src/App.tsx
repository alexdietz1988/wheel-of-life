import { Pie, PieChart, Cell } from 'recharts';

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

const data = categories.map((category, i) => ({
  name: category,
  value: 1,
  fill: colorPalette[i % colorPalette.length],
}));

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}: {
  cx: number;
  cy: number;
  outerRadius: number;
  innerRadius: number;
  midAngle: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const RADIAN = Math.PI / 180;

  return (
    <text
      x={cx + radius * Math.cos(-midAngle * RADIAN)}
      y={cy + radius * Math.sin(-midAngle * RADIAN)}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: '16px' }}
    >
      {categories[index]}
    </text>
  );
};

const App = () => (
  <PieChart data={data} width={500} height={500}>
    <Pie
      data={data}
      labelLine={false}
      // @ts-expect-error suppress Recharts type error
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
