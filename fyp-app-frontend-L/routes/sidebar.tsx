/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/dashboard/administrators',
    icon: 'FormsIcon',
    name: 'Administrators',
  },
  {
    path: '/dashboard/facultyspecializations',
    icon: 'CardsIcon',
    name: 'FacultySpecializations',
  },
  {
    path: '/dashboard/faculties',
    icon: 'ChartsIcon',
    name: 'Faculties',
  },
  {
    path: '/dashboard/students',
    icon: 'ButtonsIcon',
    name: 'Students',
  },
  {
    path: '/dashboard/projectDomains',
    icon: 'ModalsIcon',
    name: 'ProjectDomains',
  },
  {
    path: '/dashboard/rubrics',
    icon: 'MoonIcon',
    name: 'Rubrics',
  },
  {
    path: '/dashboard/presentations',
    icon: 'MoneyIcon',
    name: 'Presentations',
  },
  {
    path: '/dashboard/venues',
    icon: 'HeartIcon',
    name: 'Venues',
  },
  {
    path: '/dashboard/panels',
    icon: 'TablesIcon',
    name: 'Panels',
  }
]

export type {IRoute}
export default routes
