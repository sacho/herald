import Vue from "vue";

const EventBus = new Vue();

export default EventBus;

/*
  Events:
  - cooldown-adjustment (message_data)
  - new-message (message_data)
  - scroll-down (no args)
*/
