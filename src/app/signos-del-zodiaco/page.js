'use client';
export default function ZodiacSigns() {
  const signs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-96 h-96 flex flex-wrap justify-center items-center rounded-full border-4 border-white">
        {signs.map((index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-full bg-yellow-500"
            style={{
              position: 'absolute',
              transform: `rotate(${
                index * (360 / signs.length)
              }deg) translate(6rem) rotate(-${
                index * (360 / signs.length)
              }deg)`, // Posición y rotación para distribuir las imágenes alrededor del círculo
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
