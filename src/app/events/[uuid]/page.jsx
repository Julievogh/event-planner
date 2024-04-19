export default async function eventPage({ params }) {
  const uuid = params.uuid;
  console.log(uuid);
  let headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  let response = await fetch("https://ncskiybovrupsrvhtkwk.supabase.co/rest/v1/events?id=eq." + uuid, {
    headers: headersList,
  });

  let data = await response.json();
  const eventInfo = data[0];
  console.log(uuid);
  return (
    <article className="align-content: center">
      <h1>{eventInfo.name}</h1>

      <dl>
        <dt>Hvornår:</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>
    </article>
  );
}
