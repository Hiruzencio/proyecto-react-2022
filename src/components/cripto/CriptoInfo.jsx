import { parseFloatNumber } from "../../helpers/numbers"

const CriptoInfo = ({ cripto }) => {
    return (
        <div className="info">
                    <div className="main-info">
                        <span>Rank: {cripto.rank}</span>
                        <h1>{cripto.name}</h1>
                        <span className="symbol">{cripto.symbol}</span>
                    </div>
                    <div className="details">
                        <ul>
                            <li className="detail">
                                <span className="label">Price: </span>
                                <span>{parseFloatNumber(cripto.priceUsd, 2)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Max Supply</span>
                                <span>{parseFloatNumber(cripto.maxSupply, 2)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Market Cap (USD): </span>
                                <span>{parseFloatNumber(cripto.marketCapUsd, 2)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Volumen (USD -24 Hrs.): </span>
                                <span>{parseFloatNumber(cripto.volumenUsd24Hr, 2)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Variation (24 Hrs.): </span>
                                <span>{parseFloatNumber(cripto.changePercent24Hr, 2)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Vwap (24 Hrs.): </span>
                                <span>{parseFloatNumber(cripto.vwap24Hr, 2)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
    )
}
export default CriptoInfo