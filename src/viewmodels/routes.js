import Welcome from "./welcome/welcome";
import Binding from "./binding/binding";

export default [
    {
        route: "",
        title: "Welcome",
        moduleId() {
            return Welcome;
        },
        nav: true,
    },
    {
        route: "picsum",
        hash: "mfe1/#picsum",
        title: "Picsum",
        moduleId() {
            return import(/* webpackChunkName: "picsum-viewmodel" */ "./picsum/picsum").then((module) => {
                return module.default;
            });
        },
        nav: true,
    },
    {
        route: "router*details",
        hash: "mfe1/#router",
        title: "Router",
        moduleId() {
            return import(/* webpackChunkName: "router-viewmodel" */ "./router/index").then((module) => {
                return module.default;
            });
        },
        nav: true,
    },
    {
        route: "binding",
        hash: "mfe1/#binding",
        title: "Binding",
        moduleId() {
            return Binding;
        },
        nav: true,
    },
    {
        route: "widgets",
        hash: "mfe1/#widgets",
        title: "Widgets",
        moduleId() {
            return import(/* webpackChunkName: "widgets-viewmodel" */ "./widgets/widgets").then((module) => {
                return module.default;
            });
        },
        nav: true,
    },
    {
        route: "components",
        hash: "mfe1/#components",
        title: "Components",
        moduleId() {
            return import(/* webpackChunkName: "components-viewmodel" */ "./ko-components/ko-components").then(
                (module) => {
                    return module.default;
                }
            );
        },
        nav: true,
    },
];
