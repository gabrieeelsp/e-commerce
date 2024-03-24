import { NavLink } from "react-router-dom";

import slugify from "slugify";

const RubroMenu = (props) => {
    const { subrubro, rubro } = props;
    return (
        <li className="pl-2">
            <NavLink 
                className={(navData) => navData.isActive ? 'text-purple-500' : ''}
                to={`/${slugify(rubro.name, {lower: true, strict: true})}/${slugify(subrubro.name, {lower: true, strict: true})}`}
            >{subrubro.name}</NavLink>
        </li>
    )
}

export default RubroMenu