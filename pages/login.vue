<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const route = useRoute();

const provider = route.query.provider;

watchEffect(() => {
  if (provider === "discogs") {
    window.location.href = "/api/discogs";
  } else if (provider) {
    client.auth.signInWithOAuth({ provider: provider });
  }

  if (user.value) {
    router.push("/dashboard");
  } else {
    router.push("/");
  }
});
</script>

<template>
  <div>Logging in...</div>
</template>
