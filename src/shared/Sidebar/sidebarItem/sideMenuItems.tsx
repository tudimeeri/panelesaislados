
import { mdiHome, mdiInformationOutline, mdiHomeRoof, mdiAccountBoxOutline, mdiHospitalBuilding, mdiBook } from "@mdi/js";


export interface ItemT {
    pathIcon: string;
    color: string;
    text: string;
    size: number;
    routeTo: string;
}

const color: string = 'white'

export const SideItems: ItemT[] = [
    {
        pathIcon: mdiHome,
        color: color,
        text: 'Inicio',
        size: 1,
        routeTo: '/main'
    },
    {
        pathIcon: mdiInformationOutline,
        color: color,
        text: 'Nosotros',
        size: 1,
        routeTo: '/nosotros'
    },
    {
        pathIcon: mdiHomeRoof,
        color: color,
        text: 'Productos',
        size: 1,
        routeTo: '/redirect'
    },
    {
        pathIcon: mdiAccountBoxOutline,
        color: color,
        text: 'Contacto',
        size: 1,
        routeTo: '/contact'
    },
    {
        pathIcon: mdiHospitalBuilding,
        color: color,
        text: 'Proyectos',
        size: 1,
        routeTo: '/proyectos'
    },
    {
        pathIcon: mdiBook,
        color: color,
        text: 'Manuales',
        size: 1,
        routeTo: '/manuales'
    }
]
