import React from 'react'
import ArrowWithoutTail from '../atoms/icons/ArrowWithoutTail'
import Text from '../atoms/Text'
import { css } from '@emotion/css'
import ChartPieSlice from '../atoms/icons/ChartPieSlice'
import ShoppingBagOpen from '../atoms/icons/ShoppingBagOpen'
import BookOpen from '../atoms/icons/BookOpen'
import FolderNotch from '../atoms/icons/FolderNotch'
import IdentificationCard from '../atoms/icons/IdentificationCard'
import IdentificationBatch from '../atoms/icons/IdentificationBatch'
import UsersThree from '../atoms/icons/UsersThree'
import Notebook from '../atoms/icons/Notebook'
import ChartTeardrop from '../atoms/icons/ChartTeardrop'
import { useNavigate } from 'react-router-dom';

const iconMapper = {
  default: <ChartPieSlice/>,
  ecommerce: <ShoppingBagOpen/>,
  projects: <FolderNotch/>,
  online_courses: <BookOpen/>,
  user_profile: <IdentificationBatch/>,
  account: <IdentificationCard/>,
  corporate: <UsersThree/>,
  blog: <Notebook/>,
  social: <ChartTeardrop/>
}

const Icon = ({ open, onClick, isChildren }) => {

    if (isChildren) {
        return (
            <div onClick={onClick} style={open ? { transform: "rotate(90deg)", cursor: "pointer" } : { transform: "rotate(0deg)", cursor: "pointer" }}>
               <ArrowWithoutTail/>
            </div>
        )
    }

    return (
        <div>
            <ArrowWithoutTail/>
        </div>
    )

}

const LeftSideMenu = ({ id, label, icon, link, children }) => {

    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState(100);
    const isChildren = Boolean(children && children.length)
 
    const handleClick = (e, key) => {
      e.stopPropagation()
      setOpen(!open)
      setSelectedMenu(key)
      navigate(link)
    }


    return (
        <div className={css`${(open && !isChildren && selectedMenu) ? `background: #f4f4f4; border-radius: 2px;border-left: 4px solid #1c1c1c`: `border-left: 3px solid transparent`};padding-left: 12px; cursor: pointer`}  onClick={(e) => handleClick(e, id)}>
            <div className={css`display: flex; align-items: center; gap: 8px`}>
                {isChildren &&<Icon
                    open={open}
                   
                    isChildren={isChildren}
                />}
                {icon && <span className={!isChildren && css`margin-left: 13px`}>{iconMapper[icon]}</span>}
                <Text fontStyleGuide="body2" ellipsis='200' mt="xs" mb='xs' weight="400">{label}</Text>
            </div>
            {isChildren && open &&
                <div className={css`padding-left: 12px`}>
                    <LeftSideMenus data={children} key={id} />
                </div>
            }
        </div>

    )
}

const LeftSideMenus = ({ data }) => {

    return (
        <div>
            {data.map((datum) => <LeftSideMenu key={datum.id} {...datum} />)}
        </div>
    )
}

export default LeftSideMenus