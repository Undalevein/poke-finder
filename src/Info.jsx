export default function Info({ name, data }) {
    return !data || !name ? (
        <p></p>
    ) : !data?.sprites || !data?.moves ? (
        <p>No data for {name}</p>
    ) : (
        <>
            <h2>Meet {name}</h2>
            <img src={data.sprites.front_default} alt="Their picture" />
            Height is {data.height} and weight is {data.weight}
        </>
    );
}
