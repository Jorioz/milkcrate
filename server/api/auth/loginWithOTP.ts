import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { email } = await readBody(event);
  const trimmedEmail = email.trim();

  const { error } = await client.auth.signInWithOtp({
    email: trimmedEmail,
    options: {
      shouldCreateUser: false,
    },
  });
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
});
