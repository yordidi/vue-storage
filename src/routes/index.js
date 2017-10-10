/*
 * Import .vue components
 */
import App from '../App.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import NotFoundComponent from '../pages/NotFoundComponent.vue'

/*
 * Define routes
 */
const routes = [
	{
		path: '/',
		component: App,
		children: [
			//地址为空，跳转register页
			{
				path: '',
				redirect: '/register'
			},
			// 注册页面
			{
				path: '/register',
				component: Register
			},
			// 登陆页面
			{
				path: '/login',
				component: Login
			}
		]
	},
	// //404
	{
		path: '*',
		component: NotFoundComponent
	}
];

/*
 * Export router
 */
export default routes;