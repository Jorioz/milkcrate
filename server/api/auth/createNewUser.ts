import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { email, username } = await readBody(event);
  const trimmedEmail = email.trim();

  const { data, error } = await client.auth.signInWithOtp({
    email: trimmedEmail,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: "/verified",
      data: { username: username },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
});
