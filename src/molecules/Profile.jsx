import React from 'react'
import { css } from '@emotion/css'
import Text from '../atoms/Text';
import BugBeetle from '../atoms/icons/BugBeetle';
import Broadcast from '../atoms/icons/Broadcast';
import User from '../atoms/icons/User';

const defaultImageUrl = `https://s3-alpha-sig.figma.com/img/25fd/dc28/ee996b0edb37a8f08e577c61dadbc58d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVSgVwnf6CzSAJVB~uMBDerRNT1p7dBtfVbECSdccHPtHc9p7bIWMCRGehHVEQSkP8uJMf5m5D3LHFfrNYJbOImX44NsXmsum8j-iFa7E973w5UxUY~yXi9gtEEYhh4ywWN7v7hGCvDXRVPWBXB2DFxwnAGaCpzr~4~cGJ4IN-ygg5XOOpH9KU7mHVWTapN1Le7yQtSUpJ4kiUEJI6a-2MwM55Upaty5zC5WHSe~w0ShBw8rLlBEm6-aZfnlF0-S4sSpHnCJHoUcyohMdB2jT01aIMRz-Ibk6y~qN9WX2arQab551j~qOgnMIWS6xDk2Ik9FRsQlaml-~sButYIoYA__`

const statusMapper = {
  "bug": <div className={css`border-radius: 50%;height: 100%; width:100%;background: #e5ecf6; display: flex; justify-content: center; align-items: center`}><BugBeetle/></div>,
  "new_user": <div className={css`border-radius: 50%;height: 100%; width:100%;background: #e5ecf6; display: flex; justify-content: center; align-items: center`}><Broadcast/></div>,
  "subscribed": <div className={css`border-radius: 50%;height: 100%; width:100%;background: #e5ecf6; display: flex; justify-content: center; align-items: center`}><User/></div>
}

const Profile = ({title="Lorem Ipsum", description, image_url= defaultImageUrl, status, isLast=false}) => {

   
    return (
        <div className={css`display: flex; align-items: center; gap: 8px; ${isLast ? `margin-bottom: 20px` : `margin: 8px 0px`}`}>
            <div className={css`flex-shrink: 0; height: 24px; width: 24px; border-radius: 50%;${status?``: `overflow: hidden`}`}>
            {status ? statusMapper[status] : <img src={image_url}  height="100%" width="100%"/>}
            </div>
            <div>
                <Text fontStyleGuide="body2" ellipsis="150">{title}</Text>
                {description && <Text fontStyleGuide="body3">{description}</Text>}
            </div>
        </div>
    )
}

export default Profile