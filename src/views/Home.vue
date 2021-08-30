<template>
  <div>
    <AppTitle type="h2" text="Welcome" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
      lacinia eros, vel eleifend orci consequat sit amet. Curabitur eu mi
      sagittis, sagittis eros sit amet, feugiat leo. Aliquam aliquet, nisi nec
      pellentesque lobortis, ipsum neque auctor justo, vel ultricies sapien
      ipsum ac erat. In tincidunt dignissim augue, at sollicitudin mi porttitor
      eu. Nullam non bibendum purus. Fusce quis nunc mi. Etiam vitae malesuada
      odio, a efficitur mauris. Nunc nec tincidunt velit. Nunc iaculis vehicula
      felis, eu fringilla ex congue in. Mauris posuere odio sed quam vestibulum,
      luctus commodo risus mattis.
    </p>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
export default {
  name: "Home",
  components: {
    AppTitle,
  },
};
</script>
