import React from 'react';
import '../App.css';

const analyticsData = [
  {
    title: 'Heatwaves',
    value: 4,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3c1db502a92c4d00ef470a041b9d701c3ae5a3a6a5de7b15e00a1b8c3b4b1dcb?apiKey=445ba0ff0b3c49d2bee11927b6391744&',
  },
  {
    title: 'High fire danger events',
    value: 10,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb03a1ee7bd9c9d72b122310c9805f54b007380b720c2a95e11e130d5642c7f2?apiKey=445ba0ff0b3c49d2bee11927b6391744&',
  },
  {
    title: 'Anticipated power outages',
    value: 18,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93451e16bef24d401950dfd435ff85794fdd6c4bd58a0333d89795aafffdcb7f?apiKey=445ba0ff0b3c49d2bee11927b6391744&',
  },
  {
    title: 'Anticipated energy demand surges',
    value: 0,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e05047e377e550628efe6af954bed4811d4fa847cb606acd2e2de3805d0a45e7?apiKey=445ba0ff0b3c49d2bee11927b6391744&',
  },
  {
    title: 'Risk Exposure Score',
    value: 3,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f2ce0f2ffa946ce009203e45af89dc0e9fa7cc5aa8345356532809faa74d338b?apiKey=445ba0ff0b3c49d2bee11927b6391744&',
  },
];

function Analytics() {
  const imageWidth = 50; // Set a fixed width for all images

  return (
    <div className="flex flex-col justify-center px-5 py-6 rounded-xl bg-gray-400 bg-opacity-50 max-w-[340px]">
      <div className="self-center text-xl font-semibold text-center text-gray-900 text-opacity-80">
        Analytics
      </div>

      {/* Mapping over analyticsData array */}
      {analyticsData.map((data, index) => (
        <div
          key={index}
          className="flex justify-between px-6 py-4 mt-2.5 rounded-xl bg-slate-500"
        >
          <div className="flex flex-col justify-center">
            <div className="text-base font-light text-white text-opacity-90">
              {data.title}
            </div>
            <div className="mt-1.5 text-4xl font-semibold text-gray-100">
              {data.value}
            </div>
          </div>
          <img
            loading="lazy"
            src={data.imageUrl}
            className="shrink-0 my-auto aspect-square"
            style={{ width: `${imageWidth}px` }}
            alt="hi"
          />
        </div>
      ))}
    </div>
  );
}

export default Analytics;
