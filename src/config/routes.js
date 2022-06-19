//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutLogin from "../layouts/LayoutLogin";

//Admin Pages
import Casos from '../pages/Casos';
import Departamentos from "../pages/Departamentos";
import EditarDepartamentos from "../pages/EditarDepartamento";
import ConsultaTracking from "../pages/ConsultaTracking";
import Parametros from "../pages/Parametros";
import Tramites from "../pages/Tramites";
import Login from "../pages/Login";
import SingLogin from "../pages/SingIn";
import RegisterForm from "../components/Login/RegisterForm";
import EditarTramites from "../pages/EditarTramite";
import VerConsulta from "../pages/VerConsulta"



const routesAdmin = [

    {
        path: "/",
        layout: LayoutAdmin,
        component: Casos,
    },
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
        path: "/admin/departamentos/editar",
        layout: LayoutAdmin,
        component: EditarDepartamentos,
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
    },
    {
        path: "/admin/tramites/editartramites",
        layout: LayoutAdmin,
        component: EditarTramites,
    },
    {
        path: "/admin/consulta/verconsulta",
        layout: LayoutAdmin,
        component: VerConsulta,
    }
];

const routesLogin = [

    {
        path: "/login",
        layout: LayoutLogin,
        component: Login,
    },
    {
        path: "/singIn",
        layout: LayoutLogin,
        component: SingLogin,
    }
];

const routes = [...routesAdmin, ...routesLogin];

export default routes;