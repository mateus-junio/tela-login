export function Card(poke) {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img
                    className="bg-success" //rounded bg-primary
                    src={poke.image}
                    alt={poke.name}
                    title={poke.name}
                />
                <h2 className="text-center">{poke.name}</h2>
            </div>
        </div>
    )
}