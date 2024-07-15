import { bikeData } from "@/lib/data";

const numbers = [7, 5, 6, 7, 3, 2];

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          border: "1px solid yellow",
        }}

        /* className="flex flex-col items-center justify-center p-24 relative h-full bg-center bg-cover bg-no-repeat bg-opacity-50" */
      >
        {numbers.map(num => (
          <div
            key={num}
            style={{
              backgroundColor: "blue",
              border: "1px solid green",
              color: "white",
            }}>
            {num}
          </div>
        ))}
      </div>
    </>
  );
}
