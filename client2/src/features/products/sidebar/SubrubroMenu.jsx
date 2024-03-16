import { Link } from "react-router-dom";

import slugify from "slugify";

const RubroMenu = (props) => {
    const { subrubro, rubro } = props;
    return (
        <li className="pl-2">
            <Link to={`/${slugify(rubro.name, {lower: true, strict: true})}/${slugify(subrubro.name, {lower: true, strict: true})}`}>{subrubro.name}</Link>
        </li>
    )
}

export default RubroMenu