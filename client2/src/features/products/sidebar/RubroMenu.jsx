import { Link } from 'react-router-dom'

import SubrubroMenu from './SubrubroMenu'

import slugify from 'slugify'

const RubroMenu = (props) => {
    const { rubro } = props;
    return (
        <li>
            <Link to={`/${slugify(rubro.name, {lower: true, strict: true})}`}>{rubro.name}</Link>

            <ul>
                {rubro.subrubros.map((subrubro) => (
                    <SubrubroMenu 
                        key={`subrubro-${subrubro.id}`} 
                        subrubro={subrubro} 
                        rubro={rubro}
                        />
                ))}
            </ul>
        </li>
    )
}

export default RubroMenu