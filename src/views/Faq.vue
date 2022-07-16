<script setup lang="ts">
import IGProfile from "@/components/IGProfile.vue";
</script>

<template>
  <div class="faq">
    <h2>Who's getting married?</h2>
    <p>
      Kevin and Marzia are getting married this month - we're celebrating with
      Kevin the last days before the marriage.
    </p>

    <h2>Where are you celebrating?</h2>
    <p>
      In Budapest! If you've seen us at the airport, Kevin still doesn't know
      anything about what we're going to do!
    </p>

    <h2>Who's the Groom?</h2>
    <div class="profiles-content">
      <IGProfile username="keie_92_qv" />
    </div>

    <h2>Who's the Groom Team?</h2>
    <div class="profiles-content">
      <IGProfile
        :username="profile"
        v-for="profile in [
          'the_repole',
          'pat__ferre',
          'dellemonache.claudio',
          'teo_corre',
          'denvit',
        ]"
      />
    </div>
  </div>
</template>

<style>
div.faq {
  display: flex;
  flex-direction: column;
  align-items: top;
  padding: 50px;
  max-width: 100vw;
}

div.faq p {
  margin: 1em 0 1em 0;
}

div.profiles-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media all and (max-width: 767px) {
  div.profiles-content {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
