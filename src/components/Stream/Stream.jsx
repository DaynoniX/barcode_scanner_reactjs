import React, {useEffect, useRef} from "react";
import styles from './Stream.module.scss'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

let Stream = (props) =>{
    const [data, setData] = React.useState([]);
    const stream = useRef(null);

    const formatEncoding = (formatNumber) => {
        switch (formatNumber){
            case 0:
                return 'AZTEC';
            case 1:
                return 'CODABAR';
            case 2:
                return 'CODE-39';
            case 3:
                return 'CODE-93';
            case 4:
                return 'CODE-128';
            case 5:
                return 'DATA MATRIX';
            case 6:
                return 'EAN-8';
            case 7:
                return 'EAN-13';
            case 8:
                return 'ITF';
            case 9:
                return 'MAXICODE';
            case 10:
                return 'PDF-417';
            case 11:
                return 'QR-CODE';
            case 12:
                return 'RSS-14';
            case 13:
                return 'RSS-EXPANDED';
            case 14:
                return 'UPC-A';
            case 15:
                return 'UPC-E';
            case 16:
                return 'UPC-EAN-EXTENSION';
            default:
                return 'UNKNOWN';
        }
    }
    useEffect(()=>{
        props.getStreamsHeight(window.innerHeight - stream.current.querySelector('video').clientHeight + 10);
    });
    const updateHandler = (error, result) =>{
        if (result) {
            setData(
                props.addItem(formatEncoding(result.format), result.text)
            )

        }
        else setData([]);
    }

    return (

        <div className={`${styles.stream}`} ref={stream}>
            <BarcodeScannerComponent
                width={'100%'}
                height={'100%'}
                delay={'700'}
                stopStream={true}
                onUpdate={updateHandler}
            />
        </div>
    )
}

export default Stream;
