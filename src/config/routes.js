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