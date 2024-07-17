import { bikes } from "@/lib/data";


interface DetailsProps {
    params: {
        bikeid: string
        partid: string
    }
}

export default function Details({ params: { bikeid, partid } }: DetailsProps) {
    const currentBike = bikes.find(b => b.bike.id === bikeid)
    const currentPart = currentBike?.parts.find(p => p.partid === partid)

    return (
        <>
            <h1
                style={{
                    fontSize: 30,
                    color: "black",
                    textAlign: "left"

                }} className="font-bold">
                {currentPart?.manufacturer} {currentPart?.modelName}
            </h1>



        </>
    );
}