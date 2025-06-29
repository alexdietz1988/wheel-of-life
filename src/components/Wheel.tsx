import { useState, useEffect } from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import * as Styled from './Wheel.styles';
import { type Data } from '@/App';

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

interface renderCustomizedLabelProps {
  cx: number;
  cy: number;
  outerRadius: number;
  innerRadius: number;
  midAngle: number;
  index: number;
}

interface WheelProps {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

const Wheel = ({ data, setData }: WheelProps) => {
  const { categories, selectedCategory } = data;
  const [disableAnimation, setDisableAnimation] = useState(false);
  const updateSelectedCategory = (index: number) => {
    setData((prev) => ({
      ...prev,
      selectedCategory: index,
    }));
  };
  useEffect(() => {
    setTimeout(() => setDisableAnimation(true), 2000);
  }, []);
  useEffect(() => {
    setDisableAnimation(false);
    setTimeout(() => setDisableAnimation(true), 2000);
  }, [categories]);

  const renderCustomizedLabel = (props: renderCustomizedLabelProps) => {
    const radius =
      25 + props.innerRadius + (props.outerRadius - props.innerRadius) * 0.5;
    const RADIAN = Math.PI / 180;

    return (
      <text
        x={props.cx + radius * Math.cos(-props.midAngle * RADIAN)}
        y={props.cy + radius * Math.sin(-props.midAngle * RADIAN)}
        textAnchor="middle"
        dominantBaseline="central"
        className={props.index === selectedCategory ? 'is-selected' : ''}
        onClick={() => updateSelectedCategory(props.index)}
      >
        {categories[props.index].name}
      </text>
    );
  };
  return (
    <Styled.Wheel>
      <PieChart data={categories} width={500} height={500} onClick={() => null}>
        <Pie
          data={categories}
          labelLine={false}
          // @ts-expect-error suppress Recharts type error
          label={renderCustomizedLabel}
          isAnimationActive={!disableAnimation}
        >
          {categories.map((entry, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={colorPalette[index % colorPalette.length]}
              style={index === selectedCategory ? {} : { opacity: 0.8 }}
              onClick={() => updateSelectedCategory(index)}
            />
          ))}
        </Pie>
      </PieChart>
    </Styled.Wheel>
  );
};

export default Wheel;
