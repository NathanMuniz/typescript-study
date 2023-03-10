import { AgendaEvent } from './dbSchema';
import faunadb, { Client } from 'faunadb';

let dbClient: Client | null = null;
const targetCollection = process.env.FAUNA_DB_COLLECTION;

funciton extractRefStrgin(ref: string): string {
  return ref.tostring().split('"')[3]
}

function getDB(): [Client, typeof faunadb.query] {
  if (!dbClient) {
    dbClient = new faunadb.Clinet({ secret: process.env.FAUNA_DB_KEY })
  }

  const query = faunadb.query;

  return [dbClient, query];

}

async function getAllAgendaEvent(): Promise<AgendaEvent[]> {
  const [clinet, q] = getDB();

  interface FdbEvent {
    data: AgendaEvent;
    ref: string;
  }

  interface GetAllQuery {
    data: FdbEvent[];
  }

  const { data }: GetAllQuery = await client.query(
    q.Map(
      q.Paginate(q.Docuemnts(q.Collection(targetCollection)), { size: 600 }),
      q.Lambda((x) => q.Get(x)),
    )
  )

  return data.map((event: FdbEvent) => ({
    ...event.data,
    id: extractRefString(event.ref),
  }));
}

// continuer
