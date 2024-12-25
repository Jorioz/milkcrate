<script setup>
const props = defineProps({
  service: String,
  description: String,
});

function getIcon(name) {
  switch (name) {
    case "spotify":
      return "simple-icons:spotify";
    case "applemusic":
      return "simple-icons:applemusic";
    case "discogs":
      return "simple-icons:discogs";
    default:
      return "";
  }
}

const icon = getIcon(props.service);
const serviceColors = {
  spotify: "bg-green-500",
  applemusic: "bg-red-500",
  discogs: "bg-background-950",
};

const colorClass = serviceColors[props.service];
</script>

<template>
  <div
    class="bg-background-800 hover:bg-primary-300 duration-300 rounded-lg group cursor-pointer w-full"
  >
    <div class="flex flex-col items-center justify-center md:p-10 p-5">
      <Icon
        :name="icon"
        :class="`w-[4em] md:w-[5em] h-auto  aspect-square  ${colorClass} group-hover:bg-background-900 group-hover:scale-110 transition-transform duration-300`"
      />
      <div class="flex md:max-w-32">
        <p
          class="text-center leading-snug font-quicksand text-primary-100 group-hover:text-background-900 md:pt-5 pt-2"
        >
          Connect with {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
