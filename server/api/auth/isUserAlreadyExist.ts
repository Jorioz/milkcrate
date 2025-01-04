import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { email, username } = await readBody(event);

  const trimmedEmail = email.trim();
  const trimmedUsername = username.trim();

  // Check users table for given email
  const { data: emailData, error: emailError } = await client
    .from("users")
    .select("id")
    .eq("email", trimmedEmail);

  // Check users table for given username
  const { data: usernameData, error: usernameError } = await client
    .from("users")
    .select("id")
    .eq("username", trimmedUsername);

  // Error handling
  if (emailError || usernameError) {
    return createError({
      statusCode: 500,
      statusMessage: emailError?.message || usernameError?.message,
    });
  }

  // Debug
  console.log("isUserAlreadyExist API result", {
    isEmailExist: emailData.length > 0,
    isUsernameExist: usernameData.length > 0,
  });

  // Return result
  return {
    isEmailExist: emailData.length > 0,
    isUsernameExist: usernameData.length > 0,
  };
});
