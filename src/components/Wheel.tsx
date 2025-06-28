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

const Wheel = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[];
  selectedCategory: number | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const data = categories.map((category) => ({
    name: category,
    value: 1,
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
    const radius = 25 + innerRadius + (outerRadius - innerRadius) * 0.5;
    const RADIAN = Math.PI / 180;

    return (
      <text
        x={cx + radius * Math.cos(-midAngle * RADIAN)}
        y={cy + radius * Math.sin(-midAngle * RADIAN)}
        fill={index === selectedCategory ? 'yellow' : 'white'}
        textAnchor="middle"
        dominantBaseline="central"
        style={
          index === selectedCategory
            ? {
                fontSize: '16px',
                fontWeight: 'bold',
              }
            : { fontSize: '16px' }
        }
      >
        {categories[index]}
      </text>
    );
  };
  return (
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
            style={index === selectedCategory ? {} : { opacity: 0.8 }}
            onClick={() => setSelectedCategory(index)}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Wheel;
