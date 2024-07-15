import { bikeData } from "@/lib/data";


export default function Home() {
  return (
    <>
      <div key={bikeData.bike.manufacturer}>
        <h1
          style={{
            fontSize: 50,
            fontStyle: "black",
            color: "black",
            textAlign: "left"
          }}>
          {bikeData.bike.manufacturer} {bikeData.bike.bikeModel}
        </h1>
      </div>

      <div key={bikeData.bike.imagePath}>
        <img src={bikeData.bike.imagePath} alt="BikeImage" />
      </div>

      <div
        style={{
          backgroundColor: "white",
          border: "1px solid yellow",
        }}

      /* className="flex flex-col items-center justify-center p-24 relative h-full bg-center bg-cover bg-no-repeat bg-opacity-50" */
      >
        <h2>Bike Komponenten</h2>

        {bikeData.parts.map(part => (
          <div
            style={{
              backgroundColor: "white",
              marginTop: "5px",
              padding: "5px",
              paddingLeft: "10px",
              border: "1px solid black",
              color: "black",
              textAlign: "left"
            }}>

            <div key={part.modelName}>

              <p
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "1px",
                  textAlign: "left",
                  display: "inline-block"
                }}>{part.modelName}</p>
              <p
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "1px",
                  textAlign: "right",
                  display: "inline-block"
                }}>→</p>
            </div>

          </div>
        ))}

      </div>
    </>
  );
}
