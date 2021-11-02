import React, {useEffect, useRef} from "react";
import styles from './List.module.scss'
import ListItem from "./ListItem";


let List = (props) =>{
    const barcodesList = useRef(null)

    let itemsList = props.items.map( el => <ListItem id={el.id} format={el.format} text={el.text}/>  )
    let itemsCount = props.items.length;

    let multipleEnding = () => {
        if (itemsCount > 1 || itemsCount === 0) return 's'
    };

    let showSearchBtn = () =>{
        if (itemsCount > 2){
            return (
            <span className={`${styles.search}`}>
                <i></i>
            </span>
            )
        }

    };

    useEffect(()=>{
        barcodesList.current.scrollTop = barcodesList.current.scrollHeight;
    })


    return (
        <div className={`${styles.container}`} style={{minHeight: props.streamsHeight}}>
            <div className={`${styles.header}`}>
                <span className={`${styles.counter}`}>
                    {itemsCount} item{multipleEnding()}
                </span>
                <span className={`${styles.clearBtn}`} onClick={props.clearList}>
                    Clear
                </span>
            </div>
            <ul className={`${styles.list}`} ref={barcodesList}>
                {itemsList}
            </ul>
            {showSearchBtn()}
        </div>
    )
}

export default List;
