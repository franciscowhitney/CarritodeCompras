import { useParams } from "react-router-dom";
import getFormattedDate from "../../lib/functions/getFormattedDate";
import PageWrapper from "../common/PageWrapper";
import './SuccessOperation.css'


const SuccessOperation = () => {
    const { id } = useParams();


    return (
        <PageWrapper maxWidth={500}>
            <h2>Compra exitosa</h2>
            <br />
            <span className="title">Número de orden:</span>&nbsp; &nbsp; {id}
            <br />
            <span className="title">Fecha:</span>&nbsp; &nbsp; {getFormattedDate()}
        </PageWrapper>
    )
};

export default SuccessOperation