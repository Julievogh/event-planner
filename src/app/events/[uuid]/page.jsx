import AddComment from "@/components/AddComment";
export default async function eventPage({ params }) {
  const uuid = params.uuid;
  console.log(uuid);
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  const response = await fetch("https://ncskiybovrupsrvhtkwk.supabase.co/rest/v1/events?id=eq." + uuid, {
    headers: headersList,
  });

  let data = await response.json();
  const eventInfo = data[0];
  console.log(uuid);

  const ep = "";

  const responseComments = await fetch("https://ncskiybovrupsrvhtkwk.supabase.co/rest/v1/events?event_id=eq." + uuid, {
    headers: headersList,
    cache: "no-cache",
  });

  const comments = await responseComments.json();

  console.log(comments);
  return (
    <article className="align-content: center">
      <h1>{eventInfo.name}</h1>

      <dl>
        <dt>Hvornår:</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>

      <section>
        <h2>Kommentar</h2>
        {comments.map((c) => (
          <div key={c.id}>
            <dl>
              <dt>{c.name}</dt>
              <dd>{c.comment}</dd>
            </dl>
          </div>
        ))}
        <AddComment uuid={uuid} />
      </section>
    </article>
  );
}
