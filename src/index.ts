import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktImage.vue";


const LktImage: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-image') === undefined) app.component('lkt-image', libComponent)
    },
};

export default LktImage;