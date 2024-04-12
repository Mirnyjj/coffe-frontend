export const transformSessions = (dbSessions) => ({
    id: dbSessions.id,
    hash: dbSessions.hash,
    user: dbSessions.user,
});