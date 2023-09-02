import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import auth from '../../app/styles/auth.module.css'

export default function AuthFeatCard({title, descrp}) {
  return (
    <div className={auth.authFeatCard}>
        <div className={auth.authCardHead}>
            <i className="fa-regular fa-circle-check"></i>
            <p>{title}</p>
        </div>
        <p className={auth.authCardDescrp}>{descrp}</p>
    </div>
  )
}
