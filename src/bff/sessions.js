import {getSessions, addSessions, deleteSession} from './api'

export const sessions = {
    create(user) {
        const hash = Math.random().toFixed(50);

        addSessions(hash, user);

        return hash;
    },
    async remove(hash) {
        const session = await getSessions(hash);
        if (!session) {
            return;
        }
        deleteSession(session.id);
    },
    async access(hash, accessRoles) {
        const dbSession = await getSessions(hash);

        return !!dbSession?.user && accessRoles.includes(dbSession.user.roleId);
    },

};