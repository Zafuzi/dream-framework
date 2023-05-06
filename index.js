// starts connect or express whatever
const CONFIG = {
    dev: true, // load from process.env.DEV || .env NODE_ENV
    logLevel: 3, // load from process.env.LOG_LEVEL || .env LOG_LEVEL
    database: {
        // try to load from process.env.DATABASE_<host|port|user|password|database> first, if fail then try .env, if fail just warn no throw
    },
    mail: {
        // try to load from process.env.MAIL_HOST first, if fail then try .env, if fail just warn no throw
    },
}

import {server_rpc} from './api/rpc.js';

app.use(log5(CONFIG.logLevel));
app.use(server_rpc);
app.use(applyLayout);
app.use(applyRoutes);
app.use(serve_static);

if(CONFIG.dev);
{
    app.listen(0, () =>
    {
        L.I(`Server started on port ${app.address().port}`);
    });
}
