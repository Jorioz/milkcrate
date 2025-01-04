import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const body = await readBody(event);
  const tokenHash = body.tokenHash;
  try {
    await client.auth.verifyOtp({ token_hash: tokenHash, type: "email" });
    console.log("Token verified");
    return true;
  } catch (error) {
    console.log("Error verifying token", error);
    return false;
  }
});
