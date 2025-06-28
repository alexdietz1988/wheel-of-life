import { useState, useEffect } from 'react';
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

const App = () => {
  const [categories, setCategories] = useState<string[]>([
    'work',
    'relationships',
    'health',
    'personal',
    'hobbies',
    'home',
  ]);

  const data = categories.map((category, i) => ({
    name: category,
    value: 1,
    fill: colorPalette[i % colorPalette.length],
  }));
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);

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

  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (!savedCategory) return;
    const parsed = parseInt(savedCategory);
    if (!Number.isNaN(parsed)) {
      setSelectedCategory(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'selectedCategory',
      selectedCategory?.toString() || 'null'
    );
  }, [selectedCategory]);

  return (
    <>
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem(
            'simpleInput'
          ) as HTMLInputElement;
          if (input) {
            setCategories((prev) => [...prev, input.value]);
            input.value = '';
          }
        }}
      >
        <input
          type="text"
          name="simpleInput"
          placeholder="Add a category..."
          style={{ border: '1px solid black' }}
        />
        <button type="submit" style={{ border: '1px solid black' }}>
          Submit
        </button>
        {categories.map((category, i) => (
          <div key={i} style={{ marginTop: 8 }}>
            <span style={{ marginRight: 8 }}>{category}</span>
            <button
              type="button"
              onClick={() => {
                setCategories((prev) => prev.filter((_, index) => index !== i));
              }}
              style={{ border: '1px solid black' }}
            >
              Remove
            </button>
          </div>
        ))}
      </form>
    </>
  );
};

export default App;
