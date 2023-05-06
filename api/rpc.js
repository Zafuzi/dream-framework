export const methods = {
    ping(input, okay, fail)
    {
        okay("pong");
    }
}

export function server_rpc(req, res, next)
{
    // do the rpc things
}