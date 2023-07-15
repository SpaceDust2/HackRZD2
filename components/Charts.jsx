// Импортируем библиотеки Chart.js и react-chartjs-2
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Создаем компонент BarChart, который принимает в качестве пропсов заголовок и данные для графика
const BarChart = ({ title, data }) => {
    // Определяем опции для графика, такие как цвета, легенда, подписи осей и т.д.
    const options = {
        // Меняем цвета столбцов на разные оттенки синего
         maintainAspectRatio: false,
        backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
        // Добавляем легенду в верхнем правом углу
        legend: {
            display: true,
            position: "top",
        },
        // Добавляем подписи для осей x и y
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: data.xLabel,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: data.yLabel,
                    },
                },
            ],
        },
    };

    // Возвращаем элемент Bar из библиотеки react-chartjs-2 с переданными данными и опциями
    return (
        <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <div className="w-full h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
    );
};

// Создаем компонент LineChart аналогично BarChart
const LineChart = ({ title, data }) => {
    const options = {
        // Меняем цвет линии на зеленый
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        legend: {
            display: true,
            position: "top",
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: data.xLabel,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: data.yLabel,
                    },
                },
            ],
        },
    };

    return (
        <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        <div className="w-full h-full">
          <Line data={data} options={options} />
        </div>
      </div>
    );
};

// Создаем компонент PieChart аналогично BarChart
const PieChart = ({ title, data }) => {
    const options = {
        // Меняем цвета секторов на разные оттенки красного
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(255,99 ,132 ,0.2)",
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(255,99 ,132 ,1)",
        ],
        borderWidth: 1,
        legend: {
            display: true,
            position: "top",
        },
    };

    return (
        <>
    
    <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      <div className="w-full h-full">
        <Pie data={data} options={options} />
      </div>
    </div>
        </>
    );
};



// Экспортируем компоненты для использования в других файлах
export { BarChart, LineChart, PieChart};
