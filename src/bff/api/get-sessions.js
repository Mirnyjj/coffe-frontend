import { transformSessions } from "../transformers";

export const getSessions = async (hash) => fetch(`http://localhost:3000/sessions?hash=${hash}`)
.then((loadedSessions) => loadedSessions.json())
.then(([loadedSessions]) => loadedSessions && transformSessions(loadedSessions));