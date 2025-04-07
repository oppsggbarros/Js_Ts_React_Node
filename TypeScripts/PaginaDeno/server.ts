import { serve } from "https://deno.land/std@0.207.0/http/file_server/mod.ts";

Deno.serve(async (req) => {
    return await serve(req, {
        fsRoot: "./public",
        urlRoot: "",
        showDirListing: true,
    });
});