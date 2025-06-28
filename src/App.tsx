import { type ChartConfig } from '@/components/ui/chart';
import { Pie, PieChart } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

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
  category,
  value: 1,
  fill: colorPalette[i % colorPalette.length],
}));

const chartConfig: ChartConfig = Object.fromEntries(
  categories.map((category) => [
    category,
    { label: category.charAt(0).toUpperCase() + category.slice(1) },
  ])
);

const App = () => (
  <ChartContainer
    config={chartConfig}
    className="mx-auto aspect-square max-h-[250px]"
  >
    <PieChart>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Pie data={chartData} dataKey="value" nameKey="category" />
      <ChartLegend
        content={<ChartLegendContent nameKey="category" payload={null} />}
        className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
      />
    </PieChart>
  </ChartContainer>
);

export default App;
