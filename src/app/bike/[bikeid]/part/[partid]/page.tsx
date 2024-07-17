
interface DetailsProps {
    params: {
        manufacturer: string
        modelName: string
    }
}

export default function Details({ params: { manufacturer, modelName } }: DetailsProps) {

    return (
        <>
            <h1>Details</h1>
            <p>{manufacturer}</p>
            <p>{modelName}</p>
        </>
    );
}