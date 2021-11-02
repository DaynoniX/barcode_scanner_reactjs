import React from "react";
import styles from './ListItem.module.scss';
import useSound from "use-sound";
import approvalSound from "../../../assets/approval-sound.wav";

const ListItem = (props) =>{
    const [sound] = useSound(approvalSound);

    {sound()}

    return(
        <li className={`${styles.item}`}>
            <div className={`${styles.img} ${(props.format === 'QR-CODE') ? styles.qr : styles.bar}`}>
                <i></i>
                <div className={`${styles.loader}`}>
                    <i></i>
                </div>
            </div>
            <div>
                <div className={`${styles.format}`}>{props.format}</div>
                <div className={`${styles.text}`}>{props.text}</div>
            </div>
        </li>
    )
}

export default ListItem;
