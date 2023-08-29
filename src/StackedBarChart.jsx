
import { Card, Title, BarChart } from "@tremor/react";


const getData = () => {
  const data = Array.from({length: 30}, (_, i) => {
   const category1 =   Math.floor(Math.random() * 50);
   const category2 =  Math.floor(Math.random() * 50);

   const category3 = 100 - (category1 + category2)
   
    return {name: i + 1, 'Category 1': category1, 'Category 2': category2, 'Category 3': category3}
  })

console.log(data);

  return data;
}

const dataFormatter = (number) => {
  return  Intl.NumberFormat("us").format(number).toString() +  '%' ;
};

const StackedBarChart = ({theme}) => (
    <div class={theme}>
        <Card style={{ width: '1000px'}}>
            <Title>{theme}</Title>
            <BarChart
                data={getData()}
                index="name"
                categories={["Category 1", 'Category 2', 'Category 3']}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
                stack
                showYAxis={false}
                showGridLines={false}
            />
        </Card>
        </div>
);

export default StackedBarChart