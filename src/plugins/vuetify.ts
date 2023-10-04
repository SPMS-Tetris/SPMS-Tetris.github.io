import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Discord from "@/components/discord.vue";
import Gmail from "@/components/gmail.vue";
import Instagram from "@/components/instagram.vue";
import GoldMedal from "@/components/gold-medal.vue";
import SilverMedal from "@/components/silver-medal.vue";
import BronzeMedal from "@/components/bronze-medal.vue";

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
            gold_medal: {
                component: GoldMedal
            },
            silver_medal: {
                component: SilverMedal
            },
            bronze_medal: {
                component: BronzeMedal
            }
        }
    }
});
