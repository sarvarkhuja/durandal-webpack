import "regenerator-runtime";

import $ from"jquery";
import "jquery-migrate";

import ko from "knockout";
import "knockout.validation";

import { app, system } from "durandal/core";
import { router, dialog, widget } from "durandal/plugins";

import ComponentSetup from "./Components";
import Shell from "./viewmodels/shell/shell";

import "./css/ie10mobile.css";
import "./css/starterkit.css";
import "durandal/css/durandal.css";
import "lib/font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "animate.css/animate.compat.css";
import fadeIn from "durandal/transitions/fadeIn";

// Array of widgets to install
import widgets from "./widgets";

// Webpack sets this __DEV__ variable. See `webpack.config.js` file
// eslint-disable-next-line no-undef
app.title = "Durandal Starter Kit";

$(document).ready(()=>{
    if (process.env.NODE_ENV === "development") {
        system.debug(true);
    
        window.ko = ko;
        window.app = app;
        window.router = router;
    }
    ko.components.register('mfe1-element', {
        viewModel: function() {
            
                app.configurePlugins([{ module: router }, { module: dialog }, { module: widget, config: widgets }]);
                // Start the appliction
                app.start().then(() => {
                    // Register components
                    ComponentSetup();
                    // Show the app by setting the root view model for our application with a transition.
                    app.setRoot(Shell, fadeIn)
                }) 
           
        },
        template: '<div id="applicationHost"></div>'
    });
    ko.applyBindings();
})

