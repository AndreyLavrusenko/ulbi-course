import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";

import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";

import "./styles/index.scss";
import {classNames} from "./helpers/classNames/classNames";



export const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={"/"}>Главная страница</Link>
			<Link to={"/about"}>О сайте</Link>

			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageLazy />} />
					<Route path={"/"} element={<MainPageLazy /> } />
				</Routes>
			</Suspense>
		</div>
	);
};