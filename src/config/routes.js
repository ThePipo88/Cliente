//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//Admin Pages
import Casos from '../pages/Casos';
import Departamentos from "../pages/Departamentos";
import ConsultaTracking from "../pages/ConsultaTracking";
import Parametros from "../pages/Parametros";
import Tramites from "../pages/Tramites";


const routesAdmin = [

    {
        path: "/admin",
        layout: LayoutAdmin,
        component: Casos,
    },
    {
        path: "/admin/departamentos",
        layout: LayoutAdmin,
        component: Departamentos,
    },
    {
        path: "/admin/consulta",
        layout: LayoutAdmin,
        component: ConsultaTracking,
    },
    {
        path: "/admin/parametros",
        layout: LayoutAdmin,
        component: Parametros,
    },
    {
        path: "/admin/tramites",
        layout: LayoutAdmin,
        component: Tramites,
    },
    {
        path: "/admin/casos",
        layout: LayoutAdmin,
        component: Casos,
    }
];

const routes = [...routesAdmin];

export default routes;