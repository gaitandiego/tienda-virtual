import { useEffect, useState } from "react";

const ITEMS_POR_PAGINA = 9;

const UsePagination = (campos = []) => {
    const [camposActuales, setCamposActuales] = useState([])
    const [items, setItems] = useState([])
    const [numeroPaginas, setNumeroPaginas] = useState(0)

    useEffect(() => {
        setCamposActuales(campos)
        setItems([...campos].splice(0, ITEMS_POR_PAGINA))
        setNumeroPaginas(Math.ceil(campos.length / ITEMS_POR_PAGINA))
    }, [campos])


    const handleSeleccionarPagina = (e) => {
        const paginaActual = e.selected;

        const totalElementos = camposActuales.length;
        const paginaSiguiente = paginaActual;
        const primerIndex = paginaSiguiente * ITEMS_POR_PAGINA;

        if (primerIndex >= totalElementos) return;

        setItems([...camposActuales].splice(primerIndex, ITEMS_POR_PAGINA))
    }

    return {
        items,
        numeroPaginas,
        handleSeleccionarPagina
    }
}

export default UsePagination