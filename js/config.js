// ======================================
// Tidal Echo
// Config Manager
// ======================================

const Config = {

    load(){

        const data = localStorage.getItem("tidal_config");

        if(!data){

            return {

                provider:"anthropic",

                baseURL:"",

                apiKey:"",

                model:""

            };

        }

        return JSON.parse(data);

    },

    save(config){

        localStorage.setItem(

            "tidal_config",

            JSON.stringify(config)

        );

    }

};
