import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import "./styles/index.scss";
import {AppRouter} from "app/providers/router";


export const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={"/"}>Главная страница</Link>
			<Link to={"/about"}>О сайте</Link>

			<AppRouter />

		</div>
	);
};