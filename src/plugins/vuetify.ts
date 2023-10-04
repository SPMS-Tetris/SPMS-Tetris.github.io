import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Discord from "@/components/discord.vue";
import Gmail from "@/components/gmail.vue";
import Instagram from "@/components/instagram.vue";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            discord: {
                component: Discord,
            },
            gmail: {
                component: Gmail,
            },
            instagram: {
                component: Instagram,
            },
        }
    }
});
